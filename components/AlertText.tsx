import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import styles from "@/styles/Components.module.css";
import withReactContent from "sweetalert2-react-content";
import Swal, { SweetAlertIcon, SweetAlertPosition } from "sweetalert2";

interface MessageAlerttext {
  title: string;
  detail?: string;
  type: "success" | "error" | "warning" | "info" | "question";
  position: "top-end" | "center" | "bottom-right";
  timer?: number;
  showCloseButton?: boolean;
}

const AlertText = ({
  title,
  detail,
  type,
  position,
  timer,
  showCloseButton,
}: MessageAlerttext) => {
  Swal.fire({
    title: `${title || "PLEASE FILL TITLE !!"}`,
    text: `${detail || ""}`,
    position: `${position}` as SweetAlertPosition,
    icon: `${type}` as SweetAlertIcon, // แปลงค่า 'success' เป็น SweetAlertIcon
    showConfirmButton: false,
    showCloseButton: true,
    width: 200,
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
      closeButton: "shadow-none",
      // actions: "flex",
      // popup: "swal2-popup",
      // container: "flex",
      // title: "flex",
    },

    // buttonsStyling: false,
    timer: timer,
  });
};

export default AlertText;
