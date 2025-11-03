import { TestData } from "../test/TestData";

export const getUserData: Function = (id: string) => {
  return TestData.filter((data) => data.id === id)[0];
};

export const getAllUsersData = () => {
  return TestData;
};
