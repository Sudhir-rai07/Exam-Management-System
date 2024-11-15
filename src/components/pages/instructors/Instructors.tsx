import instructorData from "@/dummyData/instructorData.json";
import { Download } from "lucide-react";
import { DataTable } from "@/dataTable/data-table";
import { useState } from "react";
import { User } from "@/Types/types";
import { Button } from "@/components/ui/button";
import { instructorColumns } from "@/dataTable/columns";
import InstructorQueryForm from "@/components/utils/InstructorQueryForm";
import AddInstructor from "./AddInstructor";

async function getData(): Promise<User[]> {
  return instructorData;
}
const data = await getData();

const Instructors = () => {

  const [query, setQuery] = useState<string>("")

  return (
    <section className="w-full h-full">
      <InstructorQueryForm setQuery={setQuery}/>
      <hr className="h-[2px] my-4 bg-gray-300 dark:bg-gray-700" />
      <div className="flex justify-between w-full">
        <AddInstructor headerText="Instructor" />
        <Button className="flex items-center gap-2 bg-gray-400 dark:text-black">
          <Download /> Download
        </Button>
      </div>
      
        <div className="mt-4 overflow-x-scroll overflow-y-scroll h-1/2">
          <DataTable columns={instructorColumns} data={data}/>
        </div>
    </section>
  );
};

export default Instructors;
