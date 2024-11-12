import { Download } from "lucide-react"
import { Button } from "../ui/button"
import AddOrganisationDialog from "../utils/AddOrganisationDialog"
import QuestionsQueryForm from "../utils/QuestionsQueryForm"
import { DataTable } from "@/payments/data-table"
import { questionColumns } from "@/payments/columns"
import questionData from '@/dummyData/questionData.json'

async function getData() {
    return questionData
}

const data = await getData()
const Questions = () => {
  return (
    <section className='w-full h-full'>
        <QuestionsQueryForm />
        <hr className="h-[2px] my-4 bg-gray-300 dark:bg-gray-700"/>
        <div className="flex justify-between w-full">
        <AddOrganisationDialog headerText="Question"/>
        <Button className="flex items-center gap-2 bg-gray-400 dark:text-black">
          <Download /> Download
        </Button>
      </div>

      <div className="mt-4 overflow-x-scroll overflow-y-scroll h-1/2">
        <DataTable columns={questionColumns} data={data} />
      </div>
    </section>
  )
}

export default Questions