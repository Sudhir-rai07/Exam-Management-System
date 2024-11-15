import { Download } from 'lucide-react'
import { useState } from 'react'
import StudentQueryQueryForm from '@/components/utils/StudentQueryForm';
import { Button } from '@/components/ui/button';
import AddStudent from './AddStudent';
import { useStudentStore } from '@/zustand/store';
import { DataTable } from '@/dataTable/data-table';
import { studentColumns } from '@/dataTable/columns';


// async function getData(): Promise<User[]> {
//     // Your API call here
//     return studentData;
//   }
  // const data = await getData();

const Students = () => {

  const [query, setQuery] = useState<string>("")
  const {students} = useStudentStore()

  return (
    <section className='w-full h-full'>
        <StudentQueryQueryForm setQuery={setQuery}/>
        <hr className="h-[2px] my-4 bg-gray-300 dark:bg-gray-700"/>
        <div className="flex justify-between w-full">
        <AddStudent headerText="Student" />
        <Button className="flex items-center gap-2 bg-gray-400 dark:text-black">
          <Download /> Download
        </Button>
      </div>
      
        <div className="mt-4 overflow-x-scroll overflow-y-scroll h-1/2">
          <DataTable columns={studentColumns} data={students}/>
        </div>
    </section>
  )
}

export default Students