import { useRecoilState } from "recoil";
import { billState, tipState, peopleAmountState } from "../state";

export default () => {
  const [bill, setBill] = useRecoilState(billState);
  const [tip, setTip] = useRecoilState(tipState);
  const [peopleAmount, setPeopleAmount] = useRecoilState(peopleAmountState);

  const tipAmount = (): number => {
    if (Number(bill) != 0 && tip != 0) {
      return (Number(bill) * tip) / 100;
    }
    return 0;
  };

  const totalTipAmount = (): number => {
    return Math.round(tipAmount() * Number(peopleAmount) * 100) / 100;
  };
  const reset = () => {
    setBill("0");
    setTip(0);
    setPeopleAmount("0");
  };

  return (
    <div className=" w-full h-full p-6 bg-VeryDarkCyan rounded-2xl flex flex-col justify-between">
      <div>
        <div className=" mt-1 flex justify-between">
          <div>
            <h4 className=" text-White">Tip Amount</h4>
            <h5 className=" text-[13px] text-DarkGrayishCyan">/ person</h5>
          </div>
          <p className=" text-3xl text-[#26C2AE] ">${tipAmount()}</p>
        </div>
        <div className=" my-3 flex justify-between">
          <div>
            <h4 className=" text-White">Total</h4>
            <h5 className=" text-[13px] text-DarkGrayishCyan">/ person</h5>
          </div>
          <p className=" text-3xl text-[#26C2AE]">${totalTipAmount()}</p>
        </div>
      </div>
      <button
        onClick={reset}
        className=" my-6 rounded-md h-12 w-full bg-[#26C2AE] text-VeryDarkCyan invalid:border-red-500"
      >
        RESET
      </button>
    </div>
  );
};
