import OrganisationQueryForm from "../utils/OrganisationQueryForm";
import organisation from "@/dummyData/organisationData.json";
import { Download, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { DataTable } from "@/payments/data-table";
import { OrganisationType, columns } from "@/payments/columns";

async function getData(): Promise<OrganisationType[]> {
  // Fetch data from your API here.
  return organisation;
}

const data = await getData();

const Organisation = () => {
  return (
    <section className="w-full h-full">
      <OrganisationQueryForm />
      <hr className="h-[2px] my-4 bg-gray-300 dark:bg-gray-700" />
      <div className="flex justify-between w-full">
        <Button className="flex items-center gap-2 bg-blue-500 dark:text-white">
          <Plus /> New
        </Button>
        <Button className="flex items-center gap-2 bg-gray-400 dark:text-black">
          <Download /> Download
        </Button>
      </div>

      <div className="mt-4 overflow-x-scroll overflow-y-scroll h-1/2">
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
};

export default Organisation;
