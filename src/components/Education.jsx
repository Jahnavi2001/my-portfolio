import VerticalLineWithCircles from "./VerticalLineWithCircles";
import { educationData } from "../constants/educationData";

const Education = () => {
  return (
    <div className="py-10">
      {educationData.map((education) => (
        <div className="flex gap-4" key={education.id}>
          <div className="min-w-40 max-w-24 lg:w-48 text-right">
            <h1 className="font-semibold tracking-widest break-words">
              {education.degree}
            </h1>
          </div>
          <div className="w-5">
            <VerticalLineWithCircles lineHeight="24" />
          </div>
          <div>
            <h1 className="tracking-[0.09rem] break-all">{education.school}</h1>
            <div className="text-gray-300 my-4 text-justify font-thin tracking-wider font-customText">
              {education.yearOfStudy}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Education;
