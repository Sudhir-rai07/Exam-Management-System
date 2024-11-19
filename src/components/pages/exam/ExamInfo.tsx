import { Plus } from "lucide-react";
import ExamCard from "../../utils/ExamCard";
import QueryForm from "../../utils/QueryForm";
import StaticStarRating from "../../utils/StaticStarRating";
import { Link } from "react-router-dom";

const ExamInfo = () => {
  return (
    <section className="w-full h-full pb-8 ">
      <QueryForm />
      <hr className="h-[2px] my-4 bg-gray-300 dark:bg-gray-700" />

      <div className="h-[calc(100vh-450px)] overflow-y-scroll grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
          <Link
            to={"/teacher/exam-info/create/basic"}
            className="h-[280px] w-full max-w-[300px] flex flex-col justify-center items-center border-2 border-dashed px-2 py-1 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <Plus size={100} className="text-gray-500" />
            <span className="mt-2 text-sm">Add New Exam</span>
          </Link>
          {Array.from({ length: 20 }).map((_, idx) => (
            <ExamCard
              date="20/07/2024"
              examName="Math Exam"
              group={4}
              time="45"
              key={idx + 1}
              difficulty={<StaticStarRating key={idx} rating={4} />}
            />
          ))}
      
      </div>
    </section>
  );
};

export default ExamInfo;
