import { GradeCardType } from "@/Types/types";
import GradeCard from "./utils/GradeCard";
import gradeData from '@/dummyData/gradeInfoData.json'

const Grade = () => {
  return (
    <div className="grid w-full h-full grid-cols-1 gap-4 overflow-y-scroll place-items-start md:grid-cols-2 lg:grid-cols-3">
     {gradeData.map((value: GradeCardType,idx:number)=>{
        return (
            <GradeCard
        date={value.date}
        name={value.name}
        grade={value.grade}
        time={value.time}
        key={idx}
      />
        )
     })}
      
    </div>
  );
};

export default Grade;
