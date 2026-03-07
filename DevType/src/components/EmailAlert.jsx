import Xmark from "../assets/AlertXmark.svg";
import Alert from "../assets/Alert.svg";
function EmailAlert() {
  return (
    <div className="fixed top-14 right-12 w-[360px] h-20 bg-[#142142] border-2 border-red-500 rounded-xl">
      {" "}
      <img
        src={Xmark}
        alt="Xmark"
        className="pl-[328px] pt-2 hover:cursor-pointer"
      ></img>
      <div className="flex gap-3 pl-4 pt-1">
        <img src={Alert} alt="alert"></img>
        <div className=" font-medium text-[16px] text-white">
          Github URL을 입력해주세요
        </div>
      </div>
    </div>
  );
}
export default EmailAlert;
