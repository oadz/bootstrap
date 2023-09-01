// import React, { useEffect, useState } from "react";
// import InputText from "../../components/InputText";
// import ModalConfirm from "../../components/ModalConfirm";
// // import { registerProfile } from "@/store/profileSlice";
// import { useDispatch, useSelector } from "react-redux";
// import AlertText from "../../components/AlertText";
// import { Button } from "react-bootstrap";
// import { addItem } from "@/store/profileSlice";
// import { RootState } from "@/store/store";

// type Props = {};

// const test = (props: Props) => {
//   const profileList = useSelector((state: RootState) => state.profile);
//   const [groupData, setGroupData] = useState({
//     id: 0,
//     name: "",
//     email: "",
//     birthday: "",
//     tel: "",
//     address: "",
//     role: "",
//     testnum: "",
//   });
//   const dispatch = useDispatch();
//   const MessageConFirmtext: MessagePopup = {
//     title: "THIS IS CONFIRM REGISTER",
//     // detail: "DETAILS success",
//     buttonVariant: "success",
//     type: "info",
//     afterConfirmType: "success",
//     afterConfirmTitle: "Finished !!",
//     afterConfirmDetail: "Data is OK",
//     confirmButtonText: "Sure, Create/Edit  pewpew!",
//   };
//   const handleChange = (id: any, value: any) => {
//     if (id === "tel") {
//       setGroupData((initial: any) => ({ ...initial, testnum: value }));
//     }
//   };

//   const handleDataFromAlert = (dataFromAlert: any) => {
//     console.log("dataFromAlert", dataFromAlert);

//     dispatch(addItem(dataFromAlert));
//   };
//   const profile = profileList.find(
//     (profile) => profile.testnum === groupData.testnum
//   );
//   console.log("profileList", profile?.testnum);
//   return (
//     <>
//       <div>
//         <InputText
//           type={"tel"}
//           id="tel"
//           value={groupData.testnum}
//           onChange={handleChange}
//           required={false}
//           maxLength={10}
//         ></InputText>
//         {/* <Button onClick={() => handleDataFromAlert(telnNum)}>submit</Button> */}
//         <ModalConfirm
//           data={groupData}
//           text={"confirm"}
//           button={true}
//           disabled={false}
//           onClick={handleDataFromAlert}
//           MessageConFirmtext={MessageConFirmtext}
//         ></ModalConfirm>
//         <div> aaaaa : {profile?.testnum}</div>
//       </div>
//     </>
//   );
// };

// export default test;
