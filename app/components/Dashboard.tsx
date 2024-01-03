import InputLabel from "./InputLabel";
import Tip from "./tip";
import Calculator from "./Calculator";

export default () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-LightGrayishCyan">
      <div className="h-full  w-[500px]  flex flex-col items-center   font-bold lg:w-[920px]">
        <h1 className=" my-12">
          S P L I <br /> T T E R
        </h1>
        <div className="h-full rounded-lg flex flex-col w-11/12 bg-white p-8 lg:flex-row">
          <div className="lg:w-1/2 lg:p-2">
            <InputLabel icon={"dollar"} />
            <div className=" my-8">
              <h3>select tip %</h3>
              <Tip />
            </div>
            <InputLabel icon={"person"} />
          </div>
          <div className="lg:w-1/2 lg:p-2">
            <Calculator />
          </div>
        </div>
      </div>
    </div>
  );
};
