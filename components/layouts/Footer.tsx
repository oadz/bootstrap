import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
const Footer = () => {
  const theme = useTheme();
  return (
    <div>
      <span
        style={{
          paddingRight: "10px",
          borderTop: "1px solid #b8b8b8",
          fontSize: "13px",
          //  paddingTop: "20px",
          backgroundColor: "#424242",
          bottom: "0 !important",
          alignItems: "center",
          height: "5vh",
          display: "flex",
          // position: "absolute",
          position: "fixed",
          width: "100%",
          justifyContent: "center",
          color: "white",
          // flexShrink: 0,
        }}
      >
        Powered by National ITMX
        ..&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Copyright © NITMX 2022 ,All Right
        Reserved
      </span>
    </div>
  );
};

export default Footer;
