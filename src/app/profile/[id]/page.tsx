import ProfileCard from "@/app/components/ProfileCard";
import { getUserData } from "@/app/util";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: number }> }) => {
  "use cache";
  const id = (await params).id;
  const userData = getUserData(id);
  if (userData === undefined) {
    return <h1>User not found</h1>;
  }
  return (
    <div className="flex justify-center items-center mt-10">
      <ProfileCard userData={userData} />
    </div>
  );
};

export default page;
