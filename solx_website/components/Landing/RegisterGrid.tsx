import CustomButton from "@components/ui/CustomButton";
import "./landing.css";
import Link from "next/link";

const RegisterGrid = () => {
  return (
    <div className="bg-gradient-linear w-full py-10">
      <div className="landing__register-section ">
        <p className="text-2xl font-montserrat font-semibold tracking-wide">
          Want to come on-board, as a Grid?
        </p>
        <Link href={"/grid/create"}>
          <CustomButton
            title={"Register"}
            containerStyles="rounded-full bg-orange px-10 py-3 text-xl font-roboto font-medium text-white hover:shadow-md"
          />
        </Link>
      </div>
    </div>
  );
};

export default RegisterGrid;
