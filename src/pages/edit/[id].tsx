import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../store/profileSlice";
import { RootState } from "@/store/store";
import ModalConfirm from "../../../components/ModalConfirm";
import InputText from "../../../components/InputText";
import SelectBox from "../../../components/SelectBox";
import AlertText from "../../../components/AlertText";
import { Button } from "react-bootstrap";
import Link from "next/link";
interface Profile {
  name?: string;
  email?: string;
  birthday?: string;
  tel: string;
  address?: string;
  role?: string;
}
const EditProfile = () => {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();

  const profile = useSelector((state: RootState) => {
    return state.profile.find((profile) => profile.id === Number(id));
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [errorMessage, setErrorMessage] = useState<any>({
    nameNotEmpty: "",
    phoneStart: "",
    emailIsnotValid: "",
    tel: "",
    address: "",
    role: "",
  });
  const today = new Date().toISOString().substr(0, 10); // วันปัจจุบันในรูปแบบ YYYY-MM-DD

  const [regisProfile, setRegisProfile] = useState<Profile>({
    name: profile?.name || "",
    email: profile?.email || "",
    birthday: profile?.birthday || "",
    tel: profile?.tel || "",
    address: profile?.address || "",
    role: profile?.role || "",
  });
  const MessageAlerttext: MessageAlertPopup = {
    title: "EDIT PAGE",
    detail: "You can edit this page",
    type: "info", //ถ้าไม่ใส่จะมี log ถามหาแต่จะไม่เป็น stoper
    position: "top-end",
    timer: 2000,
  };
  const MessageConFirmtext: MessagePopup = {
    title: "THIS IS CONFIRM REGISTER",
    type: "info",
    afterConfirmType: "success",
    afterConfirmTitle: "Finished !!",
    afterConfirmDetail: "Data is OK",
    confirmButtonText: "Sure, Create/Edit  pewpew!",
  };
  const optionSelect = [
    { id: 1, name: "admin" },
    { id: 2, name: "user" },
  ];

  const handleChangeData = (id: string, value: any) => {
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
  const handleSubmit = (e: any) => {
    dispatch(
      updateProfile({
        id: Number(id),
        name: regisProfile.name,
        email: regisProfile.email,
        birthday: regisProfile.birthday,
        role: regisProfile.role,
        tel: regisProfile.tel,
      })
    );
    router.push("/");
  };
  useEffect(() => {
    AlertText(MessageAlerttext);
  }, []);
  useEffect(() => {
    const hasEmptyField = Object.values(regisProfile).some(
      (value) => value === ""
    );
    setIsButtonDisabled(hasEmptyField);
  }, [regisProfile]);
  return (
    <div>
      <h1>Edit Profile</h1>
      <div>
        <div style={{ height: "auto" }}>
          <div className="row">
            <div className="col-6">
              <InputText
                id="name"
                isTextarea={false} //ตัวแปลงในการใช้งาน
                type="text"
                required={true}
                ErrorMssage={errorMessage.name || ""}
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
          <Button className="goback-button">
            <Link href="/" className="goback-link">
              go to dashboard
            </Link>
          </Button>
          <ModalConfirm
            data={regisProfile}
            text={"confirm"}
            button={true}
            disabled={isButtonDisabled}
            onClick={handleSubmit}
            MessageConFirmtext={MessageConFirmtext}
          ></ModalConfirm>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
