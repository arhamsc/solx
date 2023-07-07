"use client";

import { InputField } from "@components";
import CustomButton from "@components/ui/CustomButton";
import { ChangeEvent, useState } from "react";
import { NewGridType } from "@types";
import { useGridFactory } from "@hooks";
import { useRive } from "@rive-app/react-canvas";
import { useRouter } from "next/navigation";

const GridCreateForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<NewGridType>({
    gridCapacity: 0,
    gridCountry: "",
    gridName: "",
    gridState: "",
  });

  const { gridContractWrite } = useGridFactory();
  const { error, isLoading, isSuccess, mutateAsync } = gridContractWrite({
    debounceObject: formData,
    functionName: "createGrid",
  });

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onFormSubmit = async (event: any) => {
    event.preventDefault();

    try {
      await mutateAsync({
        args: [
          formData.gridName,
          formData.gridCountry,
          formData.gridCapacity,
          formData.gridState,
        ],
      });
      setFormData({
        gridCapacity: 0,
        gridCountry: "",
        gridName: "",
        gridState: "",
      });
    } catch (e) {
      console.log(error);
      console.log(e);
    }
  };

  const { RiveComponent: RiveLoadingComponent } = useRive({
    src: "/animations/loading.riv",
    // stateMachines: "State Machine 1",
    autoplay: true,
  });

  const { RiveComponent: RiveSuccessComponent } = useRive({
    src: "/animations/success.riv",
    // stateMachines: "State Machine 1",
    autoplay: true,
    onStop: () => {
      setTimeout(() => {
        router.replace("/");
      }, 1000);
    },
  });

  if (isLoading) {
    return (
      <div className="flex-center w-full h-full text-center">
        <RiveLoadingComponent style={{ height: "200px", color: "red" }} />
      </div>
    );
  }
  if (isSuccess) {
    return (
      <div className="flex-center flex-col w-full h-full text-center">
        <RiveSuccessComponent
          style={{ height: "200px", color: "red", textAlign: "center" }}
        />
        <p className="mt-3 font-semibold text-2xl">
          Grid Successfully Registered!
        </p>
        <p className="mt-3 text-md">Redirecting to home page.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onFormSubmit}>
      <InputField
        id="grid_name"
        label="Grid Name"
        name="gridName"
        required
        onChangeHandler={handleOnChange}
        value={formData.gridName}
      />
      <div className="flex justify-between gap-4">
        <InputField
          id="grid_country"
          label="Grid Country"
          name="gridCountry"
          required
          onChangeHandler={handleOnChange}
        />
        <InputField
          id="grid_state"
          label="Grid State"
          name="gridState"
          required
          onChangeHandler={handleOnChange}
        />
      </div>
      <InputField
        id="grid_capacity"
        label="Grid Capacity (mW/hr)"
        name="gridCapacity"
        type="number"
        required
        onChangeHandler={handleOnChange}
      />

      <CustomButton
        title="Register Grid"
        containerStyles="rounded-xl bg-orange text-xl font-medium w-1/2 mx-auto mt-8 hover:shadow-md"
      />
    </form>
  );
};

export default GridCreateForm;
