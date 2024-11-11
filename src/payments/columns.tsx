import { InstructorType, OrganisationType } from "@/Types/types";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Trash } from "lucide-react";

const columnHelper = createColumnHelper<InstructorType>();
const organisationColumnHelper = createColumnHelper<OrganisationType>();

export const organisationColumns: ColumnDef<OrganisationType>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "password",
    header: "Password",
  },
  {
    accessorKey: "last_login_time",
    header: "Last Login Time",
  },
  organisationColumnHelper.display({
    id: "actions",
    header: "Actions",
    cell: ({row})=> (
      <span className="flex items-center gap-2 text-red-500 cursor-pointer"><Trash size={18}/> Actions</span>
    )
  })
];

export const instructorColumns: ColumnDef<InstructorType>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "subject",
    header: "Subject",
  },
  {
    accessorKey: "last_login_time",
    header: "Last Login Time",
  },
  columnHelper.display({
    id: "actions",
    header: "Actions",
    cell: ({row})=> (
      <span className="flex items-center gap-2 text-red-500 cursor-pointer"><Trash size={18}/> Actions</span>
    )
  })
];
