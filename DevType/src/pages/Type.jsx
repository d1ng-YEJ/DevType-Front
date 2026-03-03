import Types from "../components/Types";
function Type() {
  return (
    <div className="w-full h-full bg-navy">
      <div className="flex flex-row gap-8 justify-center items-center">
        <Types
          developerType="완벽주의 리팩토러"
          explain="코드는 예술입니다. 한 줄, 한 글자까지 완벽을 추구하며 끊임없이 리팩토링하는 장인 정신의 소유자."
          point1="같은 파일 수정 빈도 높음"
          point2="커밋 메시지에 'repactor' 키워드 많음"
          point3="테스트 코드 비율 40% 이상"
        ></Types>
        <Types
          developerType="속도광 프로토타이퍼"
          explain="일단 돌아가게 만들고 본다! 빠른 프로토타입으로 아이디어를 현실로 만드는 실행력의 화신."
          point1="프로젝트 생성 빈도 높음"
          point2="첫 커밋 후 24시간 내 배포 이력"
          point3="주석/문서화 비율 낮음"
        ></Types>
        <Types
          developerType="문서화 장인"
          explain="주석 없는 코드는 존재할 수 없습니다. 상세한 README와 문서로 후배 개발자들의 멘토가 됩니다."
          point1="README 평규 1000자 이상"
          point2="주석 비율 30% 이상"
          point3="Wiki/Docs 폴더 존재"
        ></Types>
        <Types
          developerType="풀스택 탐험가 "
          explain="프론트엔드든 백엔드든 다 해봅니다. 끝없는 호기심으로 새로운 기술 스택을 탐험하는 만능 개발자."
          point1="사용 언어 5개 이상"
          point2="프론트+백엔드 레포 모두 보유"
          point3="다양한 프레임워크 경험"
        ></Types>
        <Types
          developerType="버그 헌터"
          explain="버그는 나의 먹잇감. 테스트 코드와 디버깅 실력으로 프로젝트의 안정성을 책임지는 수호자."
          point1="이슈 해결 비율 80% 이상"
          point2="커밋에 “fix” 키워드 많음"
          point3="테스트 코드 커밋 빈도 높음"
        ></Types>
        <Types
          developerType="꾸준형 성실러"
          explain="매일매일 한 걸음씩. 규칙적인 커밋으로 장기적 성장을 이루는 진정한 마라토너."
          point1="1년 이상 잔디 80% 이상 채움"
          point2="커밋 간격 규칙적 (표준편차 낮음)"
          point3="장기 프로젝트 유지 이력"
        ></Types>
      </div>
    </div>
  );
}
export default Type;
