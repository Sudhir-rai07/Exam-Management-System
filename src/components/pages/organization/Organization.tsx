import OrganisationQueryForm from "../../utils/OrganisationQueryForm";
import organisationData from '@/dummyData/organisationData.json'
import { Download } from "lucide-react";
import { Button } from "../../ui/button";
import { DataTable } from "@/dataTable/data-table";
import {  organisationColumns } from "@/dataTable/columns";
import AddOrganisationDialog from "../../utils/AddOrganisationDialog";
import { useEffect, useState } from "react";
import { Organization } from "@/Types/types";
import { useOrganizationStore } from "@/zustand/store";

async function getData(): Promise<Organization[]> {
  // Fetch data from your API here.
  return organisationData;
}

const data = await getData();

const OrganizationList = () => {

  const  [searchQuery, setSearchQuery] = useState<string>("")
  const {organizations} = useOrganizationStore()
  useEffect(()=>{
        console.log(organizations)
  }, [organizations])
  console.log(organizations)

  return (
    <section className="w-full h-full">
      <OrganisationQueryForm setQuery={setSearchQuery}/>
      <hr className="h-[2px] my-4 bg-gray-300 dark:bg-gray-700"/>
      <div className="flex justify-between w-full">
        <AddOrganisationDialog headerText="Organisation"/>
        <Button className="flex items-center gap-2 bg-gray-400 dark:text-black">
          <Download /> Download
        </Button>
      </div>

      <div className="mt-4 overflow-x-scroll overflow-y-scroll h-1/2">
        <DataTable columns={organisationColumns} data={organizations}/>
      </div>
    </section>
  );
};

export default OrganizationList;
