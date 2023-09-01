import {
  AppBar,
  Button,
  CssBaseline,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
// import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import router from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};

const Header = (props: Props) => {
  // const { data: session, status }: any = useSession();
  // console.log("SESSION :: ", session);
  // const [value, setValue] = useState(0);
  // const handleTabChange = (
  //   event: any,
  //   newTabIndex: React.SetStateAction<number>
  // ) => {
  //   setValue(newTabIndex);
  // };
  // useEffect(() => {
  //   if (!value) {
  //     router.push("/");
  //   }
  //   console.log("value", !value);
  // }, [value]);
  //border-b-2 border-indigo-500
  return (
    <div>
      <AppBar
        position="static"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#424242",
        }}
      >
        <CssBaseline />
        <Toolbar
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4">Navbar</Typography>
          <div
            style={{
              width: "80%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Link href="/">Home</Link>
            <Link href="/admin">Admin</Link>
            <Link href="/contact">Contact</Link>
            {/* <Link href="/faq">FAQ</Link> */}
          </div>
        </Toolbar>
        {/* <div className="flex">
          <div className="flex flex-col mr-2 justify-center">
            <span>NAME : {session?.name}</span>
            <span style={{ color: "gray" }}>You is :{session?.role}</span>
          </div>
          {session ? (
            <Button variant="outlined" color="error" onClick={() => signIn()}>
              logout
            </Button>
          ) : (
            <Button variant="outlined" onClick={() => signIn()}>
              Login
            </Button>
          )}
        </div> */}
      </AppBar>
    </div>

    // <div
    //   className="w-full p-2 "
    //   style={{
    //     backgroundColor: "#424242",
    //     color: "white",
    //   }}
    // >
    //   <div
    //     style={{
    //       display: "flex",
    //       justifyContent: "space-between",
    //       alignItems: "center",
    //     }}
    //   >
    //     <div className="flex px-1">
    //       {/* <ul className="menu flex menu-horizontal px-1">
    //         <li>
    //           <Link href="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link href="/contact">Contact</Link>
    //         </li>
    //         <li>
    //           <Link href="/about">About</Link>
    //         </li>
    //       </ul> */}

    //       {/* <Tabs>
    //         <Tab
    //           style={{
    //             // backgroundColor: "#424242",
    //             color: "white",
    //           }}
    //           value="home"
    //           href="/"
    //           label="HOME"
    //         />
    //         <Tab
    //           style={{
    //             // backgroundColor: "#424242",
    //             color: "white",
    //           }}
    //           value="contact"
    //           href="/home"
    //           label="CONTACT US"
    //         />
    //         <Tab
    //           style={{
    //             // backgroundColor: "#424242",
    //             color: "white",
    //           }}
    //           value="admin"
    //           href="/manager"
    //           label="ADMIN"
    //         />
    //       </Tabs> */}
    //     </div>
    //     <div className="flex">
    //       <div className="flex flex-col mr-2">
    //         <span>{session?.data?.email}</span>
    //         <span style={{ color: "gray" }}>{session?.data?.role}</span>
    //       </div>
    //       {session ? (
    //         <Button variant="outlined" color="error" onClick={() => signIn()}>
    //           logout
    //         </Button>
    //       ) : (
    //         <Button variant="outlined" onClick={() => signIn()}>
    //           Login
    //         </Button>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Header;
