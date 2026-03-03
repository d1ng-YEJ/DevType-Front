import Top from "../components/Top";
import Icon from "../assets/Vector.svg";
function Home() {
  return (
    <div className="w-full h-full bg-navy">
      <div className="max-w-[1920px] mx-auto pt-[120px] ">
        <div className="flex flex-col justify-center items-center h-80 pt-[160px]">
          <div className="font-bold text-3xl text-white/80 pb-[72px]">
            당신의 개발자 유형은?
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-jet text-skyblue">
              &gt; Github 프로필 URL을 입력하세요
            </div>
            <div>
              <input
                type="url"
                maxLength={30}
                class="w-[524px] font-jet text-[16px] text-white/50 font-medium outline-none border-perple border-[1px] rounded-lg bg-[#142142] py-4 pl-5 pr-8 placeholder:font-jet text-[16px] font-medium focus:border-skyblue border-[1px] focus:shadow-[0_1px_10px_0px_#22d3ee]"
                placeholder="https://github.com/username"
              ></input>{" "}
              <img
                className="relative left-[470px] bottom-[37px]"
                src={Icon}
                alt="link icon"
              ></img>
            </div>
          </div>
          <button className="hover:shadow-[0_1px_10px_0px_#eb9400] text-black bg-yellow font-bold text-[20px] px-[196px] py-3 rounded-lg mt-[28px] transition-all duration-500 ease-in-out hover:translate-y-[-4px]">
            AI 분석 시작하기
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
