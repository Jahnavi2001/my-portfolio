import VerticalLineWithCircles from "./VerticalLineWithCircles";
import { workData } from "../constants/workData";

const WorkExperience = () => {
  return (
    <div className="py-10">
      {workData.map((work) => (
        <div className="flex gap-4">
          <div className="min-w-52">
            <h1 className="font-semibold tracking-widest text-right">
              {work.company}
            </h1>
            <div className="text-gray-300 my-5 text-justify font-thin tracking-wider font-customText">
              <p className="text-right">{work.startDate}-</p>
              <p className="text-right">{work.endDate}</p>
            </div>
          </div>
          <div className="w-5">
            <VerticalLineWithCircles lineHeight="48" />
          </div>
          <div>
            <h1 className="tracking-[0.09rem]">{work.role}</h1>
            <p className="text-gray-300 my-4 text-justify font-thin tracking-wider font-customText">
              {work.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default WorkExperience;
