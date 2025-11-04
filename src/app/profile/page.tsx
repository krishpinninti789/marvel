"use cache";
import React from "react";
import { getAllUsersData } from "../util";
import ProfileCard from "../components/ProfileCard";

const page = async () => {
  const Users = getAllUsersData();
  return (
    <div>
      <h1>All users page</h1>
      <div className="grid grid-cols-3 m-3 p-3 gap-10">
        {Users.map((user) => {
          return (
            <div key={user.id} className="m-3 p-3">
              <ProfileCard userData={user} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
