import Head from "next/head";
import styles from "@/styles/Home.module.css";

import { Button, NavDropdown, Table } from "react-bootstrap";
import { useEffect, useState } from "react";

import ModalConfirm from "../../components/ModalConfirm";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useRouter } from "next/router";
import { removeItem } from "@/store/profileSlice";

export default function Home() {
  const profileList = useSelector((state: RootState) => state.profile);
  const router = useRouter();
  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [multipleId, setMultipleId] = useState<any>([]);
  const [selectAll, setSelectAll] = useState(false);
  const MessageWarningtext: MessagePopup = {
    title: "THIS IS CONFIRM warning",
    detail: "Are you sure to delete ?",
    type: "error",
    buttonVariant: "danger",
    afterConfirmType: "success",
    afterConfirmTitle: "Finished !!",
    afterConfirmDetail: "Data is deleted",
    confirmButtonText: "Sure, Delete it!",
  };
  const handleViewProfile = (id: number) => {
    router.push(`/view/${id}`);
  };
  const handleEditProfile = (id: number) => {
    router.push(`/edit/${id}`);
  };
  const handleRemoveProfile = (id: number) => {
    setDeleteId(id);
  };
  const handleSelectSingle = (event: any, id: number) => {
    if (event.target.checked) {
      setMultipleId([...multipleId, id]);
    } else {
      setMultipleId(
        multipleId.filter((selectedId: number) => selectedId !== id)
      );
    }
  };
  const handleSelectAllChange = (event: any) => {
    setSelectAll(event.target.checked);
    if (event.target.checked) {
      setMultipleId(profileList.map((item: any) => item.id));
    } else {
      setMultipleId([]);
    }
  };
  const handleDelete = () => {
    dispatch(removeItem(multipleId));
    setMultipleId([]);
  };
  useEffect(() => {
    const profileListIds = profileList.map((item) => item.id);
    let areAllSelected = true;
    for (const id of profileListIds) {
      if (!multipleId.includes(id)) {
        areAllSelected = false;
        break;
      }
    }
    setSelectAll(areAllSelected);
  }, [multipleId, profileList]);

  return (
    <>
      <Head>
        <title>Example Bootstrap</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className={styles.description}>
          <div className="d-flex justify-content-between mb-3">
            {" "}
            <h3 className="text-center">Dashboard</h3>
            <Button className="regis-button">
              <Link href="/create" className="regis-link">
                Register
              </Link>
            </Button>
          </div>

          {/* <Link href="/create">Register</Link>
          <Link href="/view">View</Link>
          <Link href="/edit">edit</Link> */}
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">birthday </th>
                <th scope="col">role </th>
                <th scope="col">tel </th>
                <th scope="col">action </th>
                <th scope="col">
                  {" "}
                  <input
                    type="checkbox"
                    name="selectAll"
                    onChange={handleSelectAllChange}
                    checked={selectAll}
                  />{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {profileList.map((profile) => (
                <tr key={profile.id}>
                  <td>{profile.name || "null"}</td>
                  <td>{profile.email || "null"}</td>
                  <td>{profile.birthday || "null"}</td>
                  <td>{profile.role || "null"}</td>
                  <td>{profile.tel || "null"}</td>
                  <td style={{ display: "flex" }}>
                    {" "}
                    <NavDropdown title="action" id="nav-dropdown">
                      <NavDropdown.Item
                        eventKey="4.1"
                        onClick={() => handleViewProfile(profile.id)}
                      >
                        view
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        eventKey="4.2"
                        onClick={() => handleEditProfile(profile.id)}
                      >
                        edit
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        eventKey="4.4"
                        className="text-danger my-auto"
                        onClick={() => handleRemoveProfile(profile.id)}
                      >
                        <ModalConfirm
                          data={deleteId}
                          text={"danger"}
                          onClick={() => {
                            dispatch(removeItem([profile.id]));
                          }}
                          MessageConFirmtext={MessageWarningtext}
                        />
                      </NavDropdown.Item>
                    </NavDropdown>
                  </td>
                  <td>
                    {" "}
                    <td>
                      <input
                        type="checkbox"
                        name="selectedId"
                        value={profile.id}
                        onChange={(e) => handleSelectSingle(e, profile.id)}
                        checked={multipleId.includes(profile.id)}
                      />
                    </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <ModalConfirm
          data={deleteId}
          button={true}
          text={"Delete Selected Items"}
          onClick={handleDelete}
          MessageConFirmtext={MessageWarningtext}
          disabled={multipleId.length === 0}
        />
      </div>
    </>
  );
}
