import React from "react";
import { Button, Modal } from "react-bootstrap";
import Swal, { SweetAlertIcon } from "sweetalert2";

interface ConfirmData {
  MessageConFirmtext: ModalType;
  data?: any;
  onClick: (value: any) => void | undefined;
  text: string;
  button?: boolean;
  disabled?: boolean;
}
interface ModalType {
  title: string;
  detail?: string;
  type?: "success" | "error" | "warning" | "info" | "question";
  showCancelButton?: boolean;
  showConfirmButton?: boolean;
  customizeButtonColor?: "#d33333" | "#77c831";
  afterConfirmTitle?: string;
  afterConfirmDetail?: string;
  afterConfirmType?: "success" | "error" | "warning" | "info" | "question";
  afterConfirmButton?: "#d33333" | "#77c831";
  confirmButtonText?: string;
}
interface Dataincoming {
  name: string;
  email: string;
  password: string;
  avatar: string;
}
const ModalConfirm = ({
  text,
  data,
  button,
  MessageConFirmtext,
  disabled,
  onClick,
}: ConfirmData) => {
  const handleClick = (data: any) => {
    Swal.fire({
      title: `${MessageConFirmtext.title || ""}!`,
      text: `${MessageConFirmtext.detail || ""}`,
      icon: `${MessageConFirmtext.type}` as SweetAlertIcon,
      showCancelButton: true,
      showConfirmButton: true,
      customClass: {
        // confirmButton: "btn btn-success",
        // cancelButton: "btn btn-danger",
        // actions: "flex",
        // popup: "swal2-popup",
        // container: "flex",
        // title: "flex",
      },
      confirmButtonColor: MessageConFirmtext.customizeButtonColor,
      // cancelButtonColor: "#d33",
      confirmButtonText: MessageConFirmtext.confirmButtonText,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("data", data);
        onClick(data);
        Swal.fire({
          title: `${MessageConFirmtext.afterConfirmTitle || ""}!`,
          text: `${MessageConFirmtext.afterConfirmDetail || ""}`,
          icon: `${MessageConFirmtext.afterConfirmType}` as SweetAlertIcon,
          showCancelButton: false,
          showConfirmButton: true,
          customClass: {
            // confirmButton: "btn btn-success",
            // cancelButton: "btn btn-danger",
            // actions: "flex",
            // popup: "swal2-popup",
            // container: "flex",
            // title: "flex",
          },
          confirmButtonColor: MessageConFirmtext.afterConfirmButton,
        });
      }
    });
  };
  return (
    <div>
      {button ? (
        <Button
          variant={MessageConFirmtext.type}
          onClick={() => handleClick(data)}
          disabled={disabled}
        >
          {text}
          <i className="bi bi-wifi-1"></i>
        </Button>
      ) : (
        <div onClick={() => handleClick(data)}>delete </div>
      )}
    </div>
  );
};

export default ModalConfirm;
