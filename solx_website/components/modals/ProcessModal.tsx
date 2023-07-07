"use client";
import TransitionModelWrapper from "@components/Wrapper/TransitionModelWrapper";
import { useRive } from "@rive-app/react-canvas";
import { ProcessModalProps } from "@types";
import { useRouter } from "next/navigation";
import React from "react";

const ProcessModel = ({
  isOpen,
  message,
  onClose,
  isError,
  isLoading,
  isSuccess,
  errorMessage,
  loadingMessage,
  onErrorStop,
  onSuccessStop,
}: ProcessModalProps) => {
  const router = useRouter();

  const { RiveComponent: RiveLoadingComponent } = useRive({
    src: "/animations/loading.riv",
    autoplay: true,
  });

  const { RiveComponent: RiveSuccessComponent } = useRive({
    src: "/animations/success.riv",
    // stateMachines: "State Machine 1",
    autoplay: true,
    onStop: onSuccessStop,
  });

  const { RiveComponent: RiveErrorComponent } = useRive({
    src: "/animations/error.riv",
    // stateMachines: "State Machine 1",
    autoplay: true,
    onStop: onErrorStop,
  });

  return (
    <TransitionModelWrapper isOpen={isOpen} onClose={onClose}>
      <div className="relative w-full flex-center">
        {isLoading ? (
          <RiveLoadingComponent
            style={{ height: "200px", textAlign: "center" }}
          />
        ) : isSuccess ? (
          <RiveSuccessComponent
            style={{ height: "200px", textAlign: "center" }}
          />
        ) : isError ? (
          <RiveErrorComponent
            style={{ height: "200px", color: "red", textAlign: "center" }}
          />
        ) : (
          <p className="text-center w-full text-4xl font-bold text-red-500">
            No Loading State.
          </p>
        )}
      </div>
      <div className="mt-3">
        <p className="text-2xl font-medium font-montserrat text-center text-orange">
          {isLoading
            ? loadingMessage
            : isSuccess
            ? message
            : isError
            ? errorMessage
            : "Loading data...."}
        </p>
      </div>
    </TransitionModelWrapper>
  );
};

export default ProcessModel;
