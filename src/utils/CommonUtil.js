import useFirstStore from "../store/useFirstStore";

export const logWrite = (message) => {
  console.log(`message : ${message}`);
};

export const writeFirstStoreName = () => {
  const firstName = useFirstStore.getState().name;
  console.log(`firstName : ${firstName}`);
};
