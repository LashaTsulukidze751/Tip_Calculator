import { useRecoilState } from "recoil";
import TipButton from "./tipButton";
import { tipState } from "../state";

export default () => {
    const [tip, setTip]=useRecoilState(tipState);
  return (
    <div className="w-full">
      <div>
        <TipButton value={5} />
        <TipButton value={10} />
      </div>
      <div>
        <TipButton value={15} />
        <TipButton value={25} />
      </div>
      <div>
        <TipButton value={50} />
        <input
          type="number"
          placeholder="Custom"
          className="m-2 h-12 w-5/12 rounded-[5px] bg-[#F3F9FA] text-center text-2xl"
          onChange={(e)=>{
            setTip(Number(e.target.value))
          }}
        />
      </div>
    </div>
  );
};
