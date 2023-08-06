import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import SelectBox from "../../components/SelectBox";
import InputText from "../../components/InputText";
import { Button, Form } from "react-bootstrap";
import { SetStateAction, useEffect, useState } from "react";
import AlertText from "../../components/AlertText";
import ModalConfirm from "../../components/ModalConfirm";
import { useSelector, useDispatch } from "react-redux";
import { registerProfile } from "../store/profileSlice";
import { RootState } from "@/store/store";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
interface Profile {
  id: number;
  name?: string;
  email?: string;
  birthday?: string;
  tel: string;
  address?: string;
  role?: string;
}
type Props = {};

const Create = (props: Props) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const dispatch = useDispatch();

  // const [validName, setValidName] = useState<boolean>(false);
  // const [validphone, setValidphone] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<any>({
    nameNotEmpty: "",
    phoneStart: "",
    emailIsnotValid: "",
    tel: "",
    address: "",
    role: "",
  });
  const today = new Date().toISOString().substr(0, 10); // วันปัจจุบันในรูปแบบ YYYY-MM-DD
  const dataList = useSelector((state: RootState) => state.profile);

  const [regisProfile, setRegisProfile] = useState<Profile>({
    id: 0,
    name: "",
    email: "",
    birthday: "",
    tel: "",
    address: "",
    role: "",
  });
  const MessageAlerttext: MessageAlertPopup = {
    title: "THIS IS PROPS TITLE",
    detail: "DETAILS MSG PROPS",
    type: "info", //ถ้าไม่ใส่จะมี log ถามหาแต่จะไม่เป็น stoper
    position: "top-end",
  };
  const MessageConFirmtext: MessagePopup = {
    title: "THIS IS CONFIRM success",
    detail: "DETAILS success",
    type: "success",
    afterConfirmType: "success",
    afterConfirmTitle: "Finished !!",
    afterConfirmDetail: "Detail prop after confirm",
    confirmButtonText: "Sure, Create/Edit  pewpew!",
  };
  const MessageWarningtext: MessagePopup = {
    title: "THIS IS CONFIRM warning",
    detail: "DETAILS warning",
    type: "error",
    afterConfirmType: "success",
  };
  const dataCreate = {
    name: "Nicolas",
    email: "nico@gmail.com",
    password: "123456",
    avatar: "https://api.lorem.space/image/face?w=640&h=480",
  };
  const ErrorMssage = {
    name: "Please fill name",
    email: " eieie",
  };
  const optionSelect = [
    { id: 1, name: "admin" },
    { id: 2, name: "user" },
  ];

  const handleChangeData = (id: string, value: any) => {
    console.log("value", value);
    switch (id) {
      case "tel":
        const onlyDigits = value.replace(/\D/g, "");
        setRegisProfile((prevProfile) => ({ ...prevProfile, tel: onlyDigits }));
        const isValidPhoneNumber = /^0\d{9}$/.test(onlyDigits);
        setErrorMessage((prevError: any) => ({
          ...prevError,
          phoneStart: isValidPhoneNumber ? true : "Please fill start with 0",
        }));
        break;
      case "email":
        setRegisProfile((prevProfile) => ({ ...prevProfile, email: value }));
        const isValidEmail = value.includes("@");
        setErrorMessage((prevError: any) => ({
          ...prevError,
          emailIsnotValid: isValidEmail ? true : "Invalid email address.",
        }));
        break;
      case "address":
        setRegisProfile((prevProfile) => ({ ...prevProfile, address: value }));
        break;
      case "name":
        setRegisProfile((prevProfile) => ({ ...prevProfile, name: value }));
        setErrorMessage((prevError: any) => ({
          ...prevError,
          nameNotEmpty: value ? true : "Name should not empty",
        }));
        break;
      case "role":
        setRegisProfile((prevProfile) => ({
          ...prevProfile,
          role: value[0]?.name || "",
        }));
        break;
      case "birthday":
        const inputDate = value;
        if (inputDate > today) {
          setRegisProfile((prevProfile) => ({
            ...prevProfile,
            birthday: today,
          }));
        } else {
          setRegisProfile((prevProfile) => ({
            ...prevProfile,
            birthday: inputDate,
          }));
        }
        break;
      default:
        break;
    }
  };
  const handleDataFromAlert = (dataFromAlert: any) => {
    console.log("dataFromAlert", dataFromAlert);

    dispatch(registerProfile(dataFromAlert));
    // setData(dataFromAlert);
  };
  useEffect(() => {
    const hasEmptyField = Object.values(regisProfile).some(
      (value) => value === ""
    );
    setIsButtonDisabled(hasEmptyField);
  }, [regisProfile]);
  useEffect(() => {
    if (dataList.length) {
      setRegisProfile((prevProfile) => ({
        ...prevProfile,
        id: !dataList.length
          ? dataList.length + 1
          : dataList[dataList.length - 1].id + 1,
      }));
    } else {
      setRegisProfile((prevProfile) => ({ ...prevProfile, id: 1 }));
    }
  }, [dataList]);
  console.log("dataList", dataList);
  return (
    <>
      <div>
        <div className={styles.description}>
          <h3 className="text-center">Register </h3>
          <Link href="/">home</Link>
          <div>
            <div style={{ height: "auto" }}>
              <div className="row">
                <div className="col-6">
                  <InputText
                    id="name"
                    isTextarea={false} //ตัวแปลงในการใช้งาน
                    type="text"
                    required={true}
                    ErrorMssage={ErrorMssage.name || ""}
                    placeHolder="Enter name"
                    value={regisProfile.name}
                    isInvalid={errorMessage.nameNotEmpty.length}
                    isValid={errorMessage.nameNotEmpty}
                    maxLength={20}
                    onChange={handleChangeData}
                    style={{ resize: "none" }}
                  ></InputText>
                </div>
                <div className="col-6">
                  <InputText
                    id="email"
                    isTextarea={false} //ตัวแปลงในการใช้งาน
                    type="email"
                    required={true}
                    ErrorMssage={errorMessage.emailIsnotValid || ""}
                    disabled={false}
                    isInvalid={errorMessage.emailIsnotValid.length}
                    isValid={errorMessage.emailIsnotValid}
                    placeHolder="Enter email"
                    value={regisProfile.email}
                    onChange={handleChangeData}
                  ></InputText>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <InputText
                    id="birthday"
                    required={false}
                    isTextarea={false}
                    type="date"
                    placeHolder="Enter date"
                    max={today}
                    value={regisProfile.birthday}
                    onChange={handleChangeData}
                    style={{ resize: "none" }}
                  ></InputText>
                </div>
                <div className="col-6">
                  <InputText
                    id="tel"
                    isTextarea={false} //ตัวแปลงในการใช้งาน
                    type="tel"
                    required={false}
                    placeHolder="Enter phone number (e.g., 0XXXXXXXXX)"
                    value={regisProfile.tel}
                    ErrorMssage={errorMessage.phoneStart || ""}
                    isInvalid={errorMessage.phoneStart.length}
                    isValid={errorMessage.phoneStart}
                    onChange={handleChangeData}
                    style={{ resize: "none" }}
                    maxLength={10}
                  ></InputText>
                </div>
                <div className="col-6">
                  <SelectBox
                    id="role"
                    optionSelect={optionSelect}
                    placeHolder={"role"}
                    onChange={handleChangeData}
                    labelKey={"name"}
                    disabled={false}
                  ></SelectBox>
                </div>
                <div className="col-6">
                  <InputText
                    id="address"
                    isTextarea={true} //ตัวแปลงในการใช้งาน
                    type="text"
                    required={false}
                    placeHolder="Address please fill"
                    value={regisProfile.address}
                    onChange={handleChangeData}
                    style={{ resize: "none" }}
                    maxLength={10}
                  ></InputText>
                </div>
              </div>
            </div>

            <div className="mt-5 d-flex justify-content-center">
              <Button
                variant="warning"
                onClick={() => AlertText(MessageAlerttext)}
              >
                Show Alert
              </Button>
              <ModalConfirm
                data={regisProfile}
                text={"confirm"}
                // disabled={isButtonDisabled}
                onClick={handleDataFromAlert}
                MessageConFirmtext={MessageConFirmtext}
              ></ModalConfirm>
              {/* <ModalConfirm
            variant="warning"
            onClick={() => AlertText(MessageAlerttext)}
          >
            view
          </ModalConfirm> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
