import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
type Props = {};

const view = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const profileList = useSelector((state: RootState) => state.profile);

  const profile = profileList.find((profile) => profile.id === Number(id));
  console.log("pro", profile);
  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div>
      <h2>View Profile</h2>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Birthday: {profile.birthday}</p>
      <p>Tel: {profile.tel}</p>
      <p>Address: {profile.address}</p>
      <p>Role: {profile.role}</p>
    </div>
  );
};

export default view;
