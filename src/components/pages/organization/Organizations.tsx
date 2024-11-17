import { Button } from "@/components/ui/button"
import { Organization } from "@/Types/types"
import { useOrganizationStore } from "@/zustand/store"
import { Link } from "react-router-dom"

const Organizations = () => {
    const {organizations} = useOrganizationStore()
  return (
    <section className="w-full h-full">
        <h1 className="text-2xl font-semibold">Existing Organizations</h1>
        <div className="w-full px-4 mt-8">
        {
            organizations.map((org: Organization)=>{

                return (
                    <div key={org.org_id} className="max-w-[400px] border-2 border-gray-400 shadow-md w-full flex items-center justify-start px-4 py-2 rounded-md">
                        <Link to={`/admin/organisation/${org.org_id}`} className="">
                        <p className="font-semibold "><span className="text-gray-400">OrgId:</span> {org.org_id}</p>
                        <p className="font-semibold "><span className="text-gray-400">OrgName:</span> {org.name}</p>
                        <p className="font-semibold "><span className="text-gray-400">OrgDescription:</span> {org.description}</p>
                    </Link>
                    </div>
                )
            })
        }
        </div>
        
    </section>
  )
}

export default Organizations