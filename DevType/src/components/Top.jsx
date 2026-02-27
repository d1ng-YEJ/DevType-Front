function Top() {
  return (
    <div>
      <div className="pt-4 pl-16">
        <div className="font-jet text-skyblue font-medium text-[16px] mb-[12px]">
          $analyze --github
        </div>
        <div className="flex gap-[1160px]">
          <div className="flex">
            <div className="font-jet text-white font-semibold text-[32px]">
              DevType
            </div>
            <div className="text-yellow font-medium text-[32px] animate-blink">
              |
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex  gap-[68px]">
              <div className="text-white/70 font-light text-5">홈</div>
              <div className="text-white/70 font-light text-5">유형 소개</div>
            </div>
            <div className="relative right-8 bg-skyblue w-20 h-[2px] rounded"></div>
          </div>
        </div>
      </div>
      <div className="mt-4 mx-auto bg-perple w-[1560px] h-[1px]"></div>
    </div>
  );
}
export default Top;
