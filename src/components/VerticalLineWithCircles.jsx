const VerticalLineWithCircles = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-4 h-4 border border-neutral-300 items-center rounded-full"></div>
      <div
        className="w-[0.5px] bg-neutral-600 absolute top-4"
        style={{ height: "-webkit-fill-available" }}
      ></div>
    </div>
  );
};

export default VerticalLineWithCircles;
