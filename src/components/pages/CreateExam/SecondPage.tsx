import { Button } from "@/components/ui/button";
import QuestionsQueryForm from "@/components/utils/QuestionsQueryForm";
import { questionColumns } from "@/dataTable/columns";
import { DataTable } from "@/dataTable/data-table";
import questionData from '@/dummyData/questionData.json'
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SecondPage = () => {
  const [query, setQuery] = useState<string  | number>("")
  return (
    <div className="w-full h-full pb-8 overflow-y-scroll">
      <QuestionsQueryForm setQuery={setQuery}/>
      <hr className="h-[2px] my-4 bg-gray-300 dark:bg-gray-700" />
      <div className="">
        <DataTable data={questionData} columns={questionColumns} />
      </div>
      <Button className="mt-4 text-white bg-blue-600 hover:bg-blue-700"><Link className="flex items-center gap-2" to={"/teacher/exam-info/create/preview"}><ArrowRight size={16}/> Next step</Link></Button>
      </div>
  );
};

export default SecondPage;
