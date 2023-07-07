import { ReactNode } from "react";

export interface CommonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ModelWrapperProps extends CommonModalProps {
  children: ReactNode;
}

export interface ProcessModalProps extends CommonModalProps {
  message: string;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage?: string;
  loadingMessage?: string;
  onErrorStop?: () => void;
  onSuccessStop?: () => void;
}
