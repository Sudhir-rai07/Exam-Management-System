import { Checkbox } from "@/components/ui/checkbox";
import StaticStarRating from "@/components/utils/StaticStarRating";
import { Organization, Question, TestBank, User } from "@/Types/types";
import { useOrganizationStore, useTestBankStore } from "@/zustand/store";
import {
  ColumnDef,
  createColumnHelper,
  selectRowsFn,
} from "@tanstack/react-table";
import { Plus, Trash } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const instructorColumnHelper = createColumnHelper<User>();
const organisationColumnHelper = createColumnHelper<Organization>();
const studentColumnHelper = createColumnHelper<User>();
const questionColumnHelper = createColumnHelper<Question>();

export const organisationColumns: ColumnDef<Organization>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "org_id",
    header: "Org_Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },{
    accessorKey: "email",
    header: "Email",
  },{
    accessorKey: "password",
    header: "Password",
  },{
    accessorKey: "last_login",
    header: "Last login",
  },
  organisationColumnHelper.display({
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const deleteOrganization = useOrganizationStore(
        (state) => state.deleteOrganization
      );

      return (
        <span
          onClick={() => {
            deleteOrganization(row.original.org_id);
            toast.success("Org deleted");
          }}
          className="flex items-center gap-2 text-red-500 cursor-pointer"
        >
          <Trash size={18} /> Delete
        </span>
      );
    },
  }),
];

export const instructorColumns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "user_id",
    header: "Id",
  },
  {
    accessorKey: "username",
    header: "Name",
  },{
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  instructorColumnHelper.display({
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const { deleteOrganization } = useOrganizationStore();
      return (
        <div
          onClick={() => {
            deleteOrganization(row.original.user_id);
            toast.success("Instructor removed");
          }}
          className="flex items-center gap-2 text-red-500 cursor-pointer"
        >
          <Trash size={18} /> Remove
        </div>
      );
    },
  }),
];

export const studentColumns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey:"user_id",
    header: "Student ID"
  },
  {
    accessorKey: "username",
    header: "Name",
  },{
    accessorKey: "last_login",
    header: "Last Login",
  },
  {
    accessorKey:"password",
    header: "Password",
  },
  studentColumnHelper.display({
    id:"action",
    header: "Action",
    cell: ({row})=> {
            return(
      <Link to={`/organization-admin/student/${row.original.user_id}`} className="flex items-center gap-2 text-green-500 cursor-pointer"> Go to user</Link>
    )}
  })

]

export const questionColumns: ColumnDef<Question>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "question_id",
    header: "ID"
  },{
    accessorKey: "question_text",
    header: "Stem"
  },
  questionColumnHelper.display({
    id:"difficulty",
    header: "Difficulty",
    cell: ({row}) => {
      return (
        <>
        <StaticStarRating rating={row.original.difficulty} />
        </>
      )
    }
  }),
  {
accessorKey:"question_type",
header: "Question Type"
  },
  {
    accessorKey: "created_by",
    header: "Created by",
  },
  questionColumnHelper.display({
    id: "actions",
    header: "Actions",
    cell: ({row})=> {
      const {removeQuestion} = useTestBankStore()
      const handleDeleteQuestion = () =>{
        removeQuestion(1,row.original.question_id)
        toast.success("Question removed")
      }
      return(
      <span onClick={handleDeleteQuestion} className="flex items-center gap-2 text-red-500 cursor-pointer">
        <Trash size={18}/> Delete
      </span>
    )}
  })
]
