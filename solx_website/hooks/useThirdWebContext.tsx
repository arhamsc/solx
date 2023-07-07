import { ThirdWebContext } from "@context/thirdWebContext";
import { useContext } from "react";

const useThirdWebContext = () => {
  return useContext(ThirdWebContext);
};

export default useThirdWebContext;
