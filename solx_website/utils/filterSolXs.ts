import { SolX } from "@models";

export const filterSolXs = (
  solXArray: SolX[],
  type: "all" | "on_market" | "sold" | "pending",
  walletAddress: string,
): SolX[] => {
  if (type === "on_market") {
    return solXArray?.filter(
      (val) => val.manager !== walletAddress && val.status !== "sold",
    );
  } else if (type === "sold") {
    return solXArray?.filter(
      (val) => val.manager !== walletAddress && val.status === "sold",
    );
  } else if (type === "pending") {
    return solXArray?.filter(
      (val) => val.manager !== walletAddress && val.status === "pending",
    );
  } else {
    return solXArray;
  }
};
