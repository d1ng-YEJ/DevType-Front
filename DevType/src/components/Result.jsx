import Xmark from "../assets/Xmark.svg";
export default function Result({ isOpen, onCancel, word, because }) {
  return (
    <div
      onClick={onCancel}
      className={`fixed inset-0 bg-[#000000]/50 flex items-center justify-center transition-all duration-500 ease-in-out ${
        isOpen
          ? "translate-y-[-4px] opacity-100"
          : "translate-y-0 opacity-0 pointer-events-none"
      }`}
    >
      <div
        className=" relative bg-navy w-[560px] h-[620px] border-perple border-[1px] rounded-2xl mt-20"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          onClick={onCancel}
          src={Xmark}
          alt="close"
          className="absolute left-[504px] top-7 hover:cursor-pointer"
        ></img>
        <div className="flex  flex-col pt-20  gap-9 justify-center items-center">
          <div className="flex flex-col gap-2">
            <div className="text-white font-bold text-3xl">당신은</div>
            <div className="flex gap-2">
              <div className="text-skyblue font-bold text-[44px]">{word}</div>
              <div className="text-white font-bold text-3xl relative top-5">
                입니다!
              </div>
            </div>
          </div>
          <div className="bg-[#142142] border-perple border-[1px] rounded-2xl w-[448px] h-[328px] text-white font-medium text-lg pt-5 px-5 break-words whitespace-normal">
            {because}
          </div>
        </div>
      </div>
    </div>
  );
}

// function Modal(){
//     return(

//     )
// }
