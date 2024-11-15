import { PieChartComp } from "@/components/Charts/PieChart"
import { useOrganizationStore } from "@/zustand/store"

const OrganizationStatics = () => {

    const {organizations} = useOrganizationStore()
    const org1 = organizations[0]
    
    const chartConfig = {
        students: {
            label: "Students",
            color: "hsl(var(--chart-1))"
          },
          instructors: {
            label: "Instructors",
            color: "hsl(var(--chart-1))"
          },
    }

    const chartData = [
        {
            label: "Students",
            value: org1.students && org1.students?.length,
            fill: "#10b981"
        },
        {
            label: "Instructors",
            value: org1.instructors && org1.instructors?.length,
            fill: "#3b82f6"
        }
    ]

  return (
    <div className="w-full h-full">
        <h1 className="text-lg font-semibold">Organization statistics</h1>
        <div>
            <p><span className="text-sm font-semibold text-gray-400">Instructors: </span>{org1.instructors?.length}</p>
            <p><span className="text-sm font-semibold text-gray-400">Students: </span>{org1.students?.length}</p>

            
                <PieChartComp chartConfig={chartConfig} chartData={chartData}/>
            
        </div>
    </div>
  )
}

export default OrganizationStatics