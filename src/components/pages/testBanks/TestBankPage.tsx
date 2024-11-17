import { useTestBankStore } from "@/zustand/store";
import TestBankQueryForm from "./TestBankQueryForm";
import { DataTable } from "@/dataTable/data-table";
import { questionColumns } from "@/dataTable/columns";
import AddQuestion from "./AddQuestion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const TestBankPage = () => {
  const { testBank } = useTestBankStore();
  const testbank1 = testBank[0];

  return (
    <div className="w-full h-full">
      <hr className="h-[2px] my-2 bg-gray-300 dark:bg-gray-700" />

        <TestBankQueryForm /> 
        <div className="flex justify-between w-full mt-2">
        <AddQuestion headerText="Question" />
        <Button className="flex items-center gap-2 bg-gray-400 dark:text-black">
          <Download /> Download
        </Button>
      </div>
      <div className="h-[50%] mt-6 overflow-y-scroll">  <DataTable data={testbank1.questions} columns={questionColumns} />
      </div>
    </div>
  );
};

export default TestBankPage;
