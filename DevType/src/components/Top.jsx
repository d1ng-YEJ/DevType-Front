import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
function Top() {
  const navigate = useNavigate();
  const location = useLocation();
  const [moving, setMoving] = useState(location.pathname === "/type");
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (location.pathname === "/type") {
      setMoving(true);
    } else {
      setMoving(false);
      setAnimate(false);
    }
  }, [location.pathname]);
  const handleClickType = () => {
    if (location.pathname === "/type") return;
    setAnimate(true);
    setMoving(true);
    setTimeout(() => {
      navigate("/type");
    }, 500);
  };

  return (
    <div className="w-full">
      <div className="max-w-[1920px]  mx-auto">
        <div className="pt-4 pl-16 pr-40">
          <div className="font-jet text-skyblue font-medium text-[16px] mb-[12px]">
            $analyze --github
          </div>
          <div className="flex justify-between items-start ">
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
                <div
                  onClick={() => navigate("/home")}
                  className="text-white/70 font-light text-[16px] hover:cursor-pointer"
                >
                  홈
                </div>
                <div
                  onClick={handleClickType}
                  className="text-white/70 font-light text-[16px] hover:cursor-pointer"
                >
                  유형 소개
                </div>
              </div>
              <div
                className={`relative right-8 bg-skyblue w-20 h-[2px] rounded duration-500 ease-in-out transition-all ${moving ? "translate-x-[102px]" : "trnaslate-x-0"}`}
              ></div>
            </div>
          </div>
        </div>
        <div className="px-8 mt-4">
          <div className=" mx-auto bg-perple w-full h-[1px]"></div>
        </div>
      </div>
    </div>
  );
}
export default Top;
