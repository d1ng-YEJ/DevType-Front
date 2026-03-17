import { useState, useEffect } from "react";
import axios from "axios";
import Icon from "../assets/Vector.svg";
import Result from "../components/Result";
import React from "react";
import EmailAlert from "../components/EmailAlert";

const LOADING_STEPS = [
  "GitHub 레포지토리를 정밀 분석 중입니다...",
  "AI가 커밋 기록에서 당신의 성향을 읽고 있습니다...",
  "분석 결과 리포트를 생성하고 있습니다...",
];

function Home() {
  const [githubUrl, setGithubUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [showEmailAlert, setShowEmailAlert] = useState(false);
  const [resultData, setResultData] = useState({ type: "", desc: "" });

  const handleAnalyze = async () => {
    setShowEmailAlert(false);

    if (!githubUrl.includes("github.com/")) {
      setShowEmailAlert(true);
      return;
    }

    setIsAnalyzing(true);
    setLoadingStep(0);

    try {
      const response = await axios.post("http://your-backend-api.com/analyze", {
        link: githubUrl,
      });

      setResultData({
        type: response.data.word,
        desc: response.data.because,
      });

      setIsAnalyzing(false);
      setOpen(true);
    } catch (error) {
      console.error(error);
      alert("분석 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      setIsAnalyzing(false);
    }
  };

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
      <EmailAlert
        showEmailAlert={showEmailAlert}
        onCancel={() => setShowEmailAlert(false)}
      />
      <div className="max-w-[1920px] mx-auto pt-[120px]">
        <div className="flex flex-col justify-center items-center h-80 pt-[160px]">
          <div className="font-bold text-3xl text-white/80 pb-[72px]">
            당신의 개발자 유형은?
          </div>

          <div className="flex flex-col gap-4">
            <div
              className={`font-jet transition-all duration-300 ${isAnalyzing ? "text-yellow" : "text-skyblue"}`}
            >
              &gt;{" "}
              {isAnalyzing
                ? LOADING_STEPS[loadingStep]
                : "Github 프로필 URL을 입력하세요"}
            </div>

            <div
              className={`relative ${showEmailAlert ? "animate-shake" : ""}`}
            >
              <input
                type="url"
                value={githubUrl} // 값 연결
                onChange={(e) => setGithubUrl(e.target.value)} // 변경 이벤트 연결
                disabled={isAnalyzing}
                maxLength={58}
                className={`w-[524px] font-jet text-[16px] text-white/50 font-medium outline-none border-perple border-[1px] rounded-lg bg-[#142142] py-4 pl-5 pr-8 placeholder:font-jet focus:border-skyblue focus:shadow-[0_1px_10px_0px_#22d3ee] transition-all duration-500 ${isAnalyzing ? "opacity-50 cursor-not-allowed" : ""}  ${showEmailAlert ? "border-red-500 border-[1px]" : ""}`}
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
            disabled={isAnalyzing}
            className={`text-black font-bold text-[20px] px-[196px] py-3 rounded-lg mt-[28px] transition-all duration-500 ease-in-out 
              ${isAnalyzing ? "bg-yellow/50 cursor-wait opacity-70" : "bg-yellow hover:shadow-[0_1px_10px_0px_#eb9400] hover:translate-y-[-4px]"}`}
          >
            {isAnalyzing ? "분석 중..." : "AI 분석 시작하기"}
          </button>
        </div>
      </div>

      <Result
        isOpen={open}
        onCancel={() => setOpen(false)}
        type={resultData.type}
        desc={resultData.desc}
      />
    </div>
  );
}

export default Home;
