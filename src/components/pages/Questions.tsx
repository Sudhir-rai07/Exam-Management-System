import { Download } from "lucide-react"
import { Button } from "../ui/button"
import QuestionsQueryForm from "../utils/QuestionsQueryForm"
import { DataTable } from "@/dataTable/data-table"
import { questionColumns } from "@/dataTable/columns"
import { useState } from "react"
import questionData from '@/dummyData/questionData.json'
import AddQuestion from "./testBanks/AddQuestion"


const Questions = () => {
  const [query, setQuery] = useState<string | number>("")
  return (
    <section className='w-full h-full mb-8'>
        <QuestionsQueryForm setQuery={setQuery}/>
        <hr className="h-[2px] my-4 bg-gray-300 dark:bg-gray-700"/>
        <div className="flex justify-between w-full">
          <AddQuestion headerText="Question"/>
        <Button className="flex items-center gap-2 bg-gray-400 dark:text-black">
          <Download /> Download
        </Button>
      </div>

      <div className="pb-6 mt-4 overflow-x-scroll overflow-y-scroll h-1/2">
        <DataTable columns={questionColumns} data={questionData} />
      </div>
    </section>
  )
}

export default Questions