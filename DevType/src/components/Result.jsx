import Xmark from "../assets/Xmark.svg";
export default function Result() {
  return (
    <div className="fixed inset-0 bg-[#000000]/50 flex items-center justify-center">
      <div className=" relative bg-navy w-[580px] h-[644px] border-perple border-[1px] rounded-3xl mt-20">
        <img
          src={Xmark}
          alt="close"
          className="absolute left-[528px] top-6"
        ></img>
        <div className="flex  flex-col pt-20  gap-9 justify-center items-center">
          <div className="flex flex-col gap-2">
            <div className="text-white font-bold text-3xl">당신은</div>
            <div className="flex gap-2">
              <div className="text-skyblue font-bold text-[44px]">
                완벽주의자 리팩토러
              </div>
              <div className="text-white font-bold text-3xl relative top-5">
                입니다!
              </div>
            </div>
          </div>
          <div className="bg-[#142142] border-perple border-[1px] rounded-3xl w-[448px] h-[328px] text-white font-medium text-lg pt-5 px-5 break-words whitespace-normal">
            이유이유이ㅠㅇㄴ;리ㅏㅁ늉리ㅏㅁ눙;ㅐㅁㄴ울;ㅣㅁ나얼;ㅁㄴㅇ룸ㄴ이ㅏ럼ㄴ앨2ㅜ;ㄷ리;ㅏㄴㅁㅇㄹ'
            ㅁ;ㄴ이ㅏ룸; dfinweoifna'epiofja'wp
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
