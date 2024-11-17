import { GradeCardType } from "@/Types/types";
import { Button } from "../ui/button";
import { Eye, Timer } from "lucide-react";
import { Link } from "react-router-dom";


const GradeCard: React.FC<GradeCardType> = ({ date, grade, name, time }) => {
  return (
    <div className="px-4 flex flex-col py-4 rounded-md  border-2 border-gray-400 gap-3 w-[300px]">
      <div className="flex items-center justify-between">
        <div >
          <h1 className="text-lg font-semibold">{name}</h1>
          <span className="text-sm font-semibold text-gray-400">{date}</span>
        </div>

        <span className="flex items-center w-1/3 h-8 gap-2 font-semibold text-center text-gray-500 bg-orange-100 border-2 border-orange-500 rounded-md ">
         <Timer size={16} className="ml-2"/> {time} min
        </span>
      </div>

      <div className="flex items-center justify-between">
      <p className="font-semibold">Grade : {grade}</p>
      <Button className="flex items-center px-4 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600 hover:text-white">
        <Link to={'/student/gradeinner'} className="flex items-center gap-2"><Eye /> Review</Link>
      </Button>
      </div>
    </div>
  );
};

export default GradeCard;
