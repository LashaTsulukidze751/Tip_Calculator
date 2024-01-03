import { useRecoilState } from "recoil";
import { tipState } from "../state";

export default ({ value }: { value: number }) => {
  const [tip, setTip] = useRecoilState(tipState);
  const handleClick = () => {
    setTip(value);
  };
  return (
    <button
      onClick={handleClick}
      className="m-2 h-12 w-5/12 rounded-[5px] bg-VeryDarkCyan text-2xl text-white hover:bg-[#26C2AE] hover:text-[#00474B]"
    >
      {value}%
    </button>
  );
};
