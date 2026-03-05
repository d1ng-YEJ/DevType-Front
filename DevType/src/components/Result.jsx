import Xmark from "../assets/Xmark.svg";
export default function Result({ isOpen, onCancel, type, desc }) {
  if (!isOpen) return null;
  return (
    <div
      onClick={onCancel}
      className="fixed inset-0 bg-[#000000]/50 flex items-center justify-center"
    >
      <div
        className=" relative bg-navy w-[560px] h-[620px] border-perple border-[1px] rounded-2xl mt-20"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          onClick={onCancel}
          src={Xmark}
          alt="close"
          className="absolute left-[504px] top-7"
        ></img>
        <div className="flex  flex-col pt-20  gap-9 justify-center items-center">
          <div className="flex flex-col gap-2">
            <div className="text-white font-bold text-3xl">당신은</div>
            <div className="flex gap-2">
              <div className="text-skyblue font-bold text-[44px]">{type}</div>
              <div className="text-white font-bold text-3xl relative top-5">
                입니다!
              </div>
            </div>
          </div>
          <div className="bg-[#142142] border-perple border-[1px] rounded-2xl w-[448px] h-[328px] text-white font-medium text-lg pt-5 px-5 break-words whitespace-normal">
            {desc}
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
