import { useState, useEffect } from "react";
import Icon from "../assets/Vector.svg";
import Result from "../components/Result";
import React from "react";

// 로딩 단계별 문구
const LOADING_STEPS = [
  "GitHub 레포지토리를 정밀 분석 중입니다...",
  "AI가 커밋 기록에서 당신의 성향을 읽고 있습니다...",
  "분석 결과 리포트를 생성하고 있습니다...",
];

function Home() {
  const [open, setOpen] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false); // 분석 중 여부
  const [loadingStep, setLoadingStep] = useState(0); // 현재 로딩 문구 인덱스

  // 분석 시작 핸들러
  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setLoadingStep(0);

    // 실제로는 여기서 백엔드 API를 호출해야 합니다.
    // 지금은 로직 확인을 위해 6초(2초 * 3단계) 후 모달이 뜨게 설정했습니다.
    setTimeout(() => {
      setIsAnalyzing(false);
      setOpen(true);
    }, 6000);
  };

  // 문구가 2초마다 바뀌는 효과
  useEffect(() => {
    let interval;
    if (isAnalyzing) {
      interval = setInterval(() => {
        setLoadingStep((prev) => (prev + 1) % LOADING_STEPS.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isAnalyzing]);

  return (
    <div className="w-full h-full bg-navy">
      <div className="max-w-[1920px] mx-auto pt-[120px]">
        <div className="flex flex-col justify-center items-center h-80 pt-[160px]">
          <div className="font-bold text-3xl text-white/80 pb-[72px]">
            당신의 개발자 유형은?
          </div>

          <div className="flex flex-col gap-4">
            {/* 상황에 따라 바뀌는 상단 텍스트 */}
            <div
              className={`font-jet transition-all duration-300 ${isAnalyzing ? "text-yellow" : "text-skyblue"}`}
            >
              &gt;{" "}
              {isAnalyzing
                ? LOADING_STEPS[loadingStep]
                : "Github 프로필 URL을 입력하세요"}
            </div>

            <div className="relative">
              <input
                type="url"
                disabled={isAnalyzing} // 분석 중엔 입력 방지
                maxLength={58}
                className={`w-[524px] font-jet text-[16px] text-white/50 font-medium outline-none border-perple border-[1px] rounded-lg bg-[#142142] py-4 pl-5 pr-8 placeholder:font-jet focus:border-skyblue focus:shadow-[0_1px_10px_0px_#22d3ee] transition-all duration-500 ${isAnalyzing ? "opacity-50 cursor-not-allowed" : ""}`}
                placeholder="https://github.com/username"
              />
              <img
                className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none"
                src={Icon}
                alt="link icon"
              />
            </div>
          </div>

          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing} // 중복 클릭 방지
            className={`text-black font-bold text-[20px] px-[196px] py-3 rounded-lg mt-[28px] transition-all duration-500 ease-in-out 
              ${
                isAnalyzing
                  ? "bg-gray-500 cursor-wait opacity-70"
                  : "bg-yellow hover:shadow-[0_1px_10px_0px_#eb9400] hover:translate-y-[-4px]"
              }`}
          >
            {isAnalyzing ? "분석 중..." : "AI 분석 시작하기"}
          </button>
        </div>
      </div>

      <Result
        isOpen={open}
        onCancel={() => setOpen(false)}
        type="완벽주의자 리팩토러"
        desc="AI 분석 결과 데이터가 이곳에 들어갑니다. (백엔드 연동 전)"
      />
    </div>
  );
}

export default Home;
