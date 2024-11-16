import { TestBank } from "@/Types/types"
import { useTestBankStore } from "@/zustand/store"
import { Link } from "react-router-dom"

const TestBanks = () => {
  const {testBank} = useTestBankStore()
  return (
    <section className='w-full h-full'>
      {/* <TestBankQueryForm /> */}
      <h1 className="text-xl font-semibold">Test Banks</h1>
    <hr className="h-[2px] my-2 bg-gray-300 dark:bg-gray-700"/>
    
    <div>
      {testBank.map((testbank: TestBank)=>{

        return (
          <div key={testbank.testBank_id} className="max-w-[400px] shadow-md rounded-md border-2 px-2 py-2">
            <Link to={`${testbank.testBank_id}`} >
            <p className="text-lg font-semibold">{testbank.name}</p>
            <p className="text-sm text-gray-500 max-w-[80%]">{testbank.description}</p>
          </Link>
          </div>
        )
      })}
    </div>
    </section>
  )
}

export default TestBanks