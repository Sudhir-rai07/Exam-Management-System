import { Download } from 'lucide-react'
import { Button } from '../ui/button'
import AddOrganisationDialog from '../utils/AddOrganisationDialog'
import StudentQueryQueryForm from '../utils/StudentQueryForm'
import { DataTable } from '@/dataTable/data-table'
import { studentColumns } from '@/dataTable/columns'
import studentData from '@/dummyData/studentData.json'
import { StudentType } from '@/Types/types'
import { useState } from 'react'


async function getData(): Promise<StudentType[]> {
    // Your API call here
    return studentData;
  }
  const data = await getData();

const Students = () => {

  const [query, setQuery] = useState<string>("")

  return (
    <section className='w-full h-full'>
        <StudentQueryQueryForm setQuery={setQuery}/>
        <hr className="h-[2px] my-4 bg-gray-300 dark:bg-gray-700"/>
        <div className="flex justify-between w-full">
        <AddOrganisationDialog headerText="Student" />
        <Button className="flex items-center gap-2 bg-gray-400 dark:text-black">
          <Download /> Download
        </Button>
      </div>
      
        <div className="mt-4 overflow-x-scroll overflow-y-scroll h-1/2">
          <DataTable columns={studentColumns} data={data} globalFilter={query} setGlobalFilter={setQuery}/>
        </div>
    </section>
  )
}

export default Students