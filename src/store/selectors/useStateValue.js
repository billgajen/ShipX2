import { useSelector } from "react-redux";

export const useStateValue = () => {
  const state = useSelector((state) => state);
  return state;
};
