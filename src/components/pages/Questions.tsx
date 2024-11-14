import { Download } from "lucide-react"
import { Button } from "../ui/button"
import AddOrganisationDialog from "../utils/AddOrganisationDialog"
import QuestionsQueryForm from "../utils/QuestionsQueryForm"
import { DataTable } from "@/dataTable/data-table"
import { questionColumns } from "@/dataTable/columns"
import { useState } from "react"
import { questions } from "@/dummyData/examData"

async function getData() {
    return questions
}

const data = await getData()
const Questions = () => {
  const [query, setQuery] = useState<string | number>("")
  return (
    <section className='w-full h-full mb-8'>
        <QuestionsQueryForm setQuery={setQuery}/>
        <hr className="h-[2px] my-4 bg-gray-300 dark:bg-gray-700"/>
        <div className="flex justify-between w-full">
        <AddOrganisationDialog headerText="Question"/>
        <Button className="flex items-center gap-2 bg-gray-400 dark:text-black">
          <Download /> Download
        </Button>
      </div>

      <div className="pb-6 mt-4 overflow-x-scroll overflow-y-scroll h-1/2">
        <DataTable columns={questionColumns} data={data} globalFilter={query} setGlobalFilter={setQuery}/>
      </div>
    </section>
  )
}

export default Questions