import { Grid, SolX } from "@models";
import { ReactNode } from "react";

export interface OverviewCardProps {
  icon: ReactNode;
  title: string;
  number: string;
  isMinus?: boolean;
}

export interface SolXCardProps {
  solX: SolX;
  // viewMoreFunction: () => void;
}

export interface SolXDetailsCardProps {
  solX: SolX;
  grid?: Grid;
  isOpen: boolean;
  onClose: () => void;
  buyNowFunction: () => void;
}