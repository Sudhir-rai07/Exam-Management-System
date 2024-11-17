import { useTestBankStore } from "@/zustand/store";
import { DataTable } from "@/dataTable/data-table";
import { questionColumns } from "@/dataTable/columns";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import AddQuestion from "@/components/pages/testBanks/AddQuestion";
import QuestionQueryForm from "./QuestionQueryForm";

const Questions = () => {
  const { testBank } = useTestBankStore();
  const testbank1 = testBank[0];

  return (
    <div className="w-full h-full">
      <h1 className="text-xl font-semibold">
        Test bank : <span className="font-bold">{testbank1.name}</span>
      </h1>
      <p className="text-sm text-gray-500 max-w-[80%]">
        {testbank1.description}
      </p>
      <hr className="h-[2px] my-2 bg-gray-300 dark:bg-gray-700" />

        <QuestionQueryForm /> 
        <div className="flex justify-between w-full mt-2">
            <AddQuestion headerText="Question"/>
        <Button className="flex items-center gap-2 bg-gray-400 dark:text-black">
          <Download /> Download
        </Button>
      </div>
      <div className="h-[50%] mt-6 overflow-y-scroll">  <DataTable data={testbank1.questions} columns={questionColumns} />
      </div>
    </div>
  );
};

export default Questions;
