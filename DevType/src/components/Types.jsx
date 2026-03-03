function Types({ developerType, explain, point1, point2, point3 }) {
  return (
    <div
      className="bg-[#142142] border-[1px] border-perple w-[236px] h-[360px] rounded-2xl mt-[120px] hover:border-skyblue transition-all duration-500 ease-in-out hover:translate-y-[-16px] hover:shadow-[0px_1px_10px_0px_#22d3ee]
      "
    >
      <div className="flex flex-col justify-center items-center gap-8 pt-8">
        <div className="text-white text-2xl font-bold">{developerType}</div>
        <div className="w-[200px] text-white/70 text-[12px] font-medium">
          {explain}
        </div>
        <div className="flex flex-col  w-[200px]">
          <div className="text-skyblue font-bold text-base pb-4">주요 특징</div>
          <div className=" w-[200px] text-white font-medium text-[12px]">
            {point1}
          </div>
          <br></br>
          <div className=" w-[200px] text-white font-medium text-[12px]">
            {point2}
          </div>
          <br></br>
          <div className=" w-[200px] text-white font-medium text-[12px]">
            {point3}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Types;
