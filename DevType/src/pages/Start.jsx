import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo";
import Copyright from "../components/Copyright";
function Start() {
  const navigate = useNavigate();

  const Nav = () => {
    navigate("/home");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto bg-navy">
      <Logo></Logo>
      <h2 className="text-white font-bold text-[24px] mt-[52px]">
        개발자 전용 개발 성향 테스트
      </h2>
      <div className="text-white/50 font-light text-[16px] mt-[135px]">
        Github URL을 입력하여 본인이 어떤 개발자인지 알아보세요!
      </div>
      <button
        onClick={Nav}
        className="text-black bg-yellow font-bold text-[20px] px-[165px] py-[12px] rounded-lg mt-[28px] hover:bg-[#eb9400]"
      >
        시작하기
      </button>
      <Copyright></Copyright>
    </div>
  );
}
export default Start;
