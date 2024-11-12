import StaticStarRating from "@/components/utils/StaticStarRating";
import { InstructorType, OrganisationType, QuestionType, StudentType } from "@/Types/types";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Trash } from "lucide-react";

const columnHelper = createColumnHelper<InstructorType>();
const organisationColumnHelper = createColumnHelper<OrganisationType>();
const studentColumnHelper = createColumnHelper<StudentType>();
const questionColumnHelper = createColumnHelper<QuestionType>();

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

export const studentColumns: ColumnDef<StudentType>[] = [
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
    accessorKey: "group",
    header: "Group",
  },
  {
    accessorKey: "password",
    header: "Password",
  },
  {
    accessorKey: "last_login_time",
    header: "Last Login Time",
  },
  studentColumnHelper.display({
    id:"action",
    header: "Action",
    cell: ({row})=> (
      <span className="flex items-center gap-2 text-red-500 cursor-pointer"><Trash size={16} /> delete</span>
    )
  })

]

export const questionColumns: ColumnDef<QuestionType>[] = [
  {
    accessorKey: "id",
    header: "ID"
  },{
    accessorKey: "questions",
    header: "Stem"
  }
  ,{
    accessorKey: "type",
    header: "Type"
  },{
    accessorKey: "createdBy",
    header: "CreatedBy"
  },{
    accessorKey: "updateTime",
    header: "UpdateTime"
  },
  questionColumnHelper.display({
    id: "actions",
    header: "Actions",
    cell: ({row})=> (
      <span className="flex items-center gap-2 text-red-500 cursor-pointer"><Trash size={18}/> Actions</span>
    )
  })

]