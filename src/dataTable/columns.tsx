import { Checkbox } from "@/components/ui/checkbox";
import { Organization } from "@/Types/types";
import { useOrganizationStore } from "@/zustand/store";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Plus, Trash } from "lucide-react";
import toast from "react-hot-toast";

// const columnHelper = createColumnHelper<InstructorType>();
const organisationColumnHelper = createColumnHelper<Organization>();
// const studentColumnHelper = createColumnHelper<StudentType>();
// const questionColumnHelper = createColumnHelper<Question>();


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
    accessorKey: 'org_id',
    header: "Org_Id"
  },{
    accessorKey: 'name',
    header: "Name"
  },
  organisationColumnHelper.display({
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const deleteOrganization = useOrganizationStore((state) => state.deleteOrganization);

      return (
        <span
          onClick={() => {deleteOrganization(row.original.org_id); toast.success("Org deleted")}}
          className="flex items-center gap-2 text-red-500 cursor-pointer"
        >
          <Trash size={18} /> Delete
        </span>
      );
    },
  })
];

// export const instructorColumns: ColumnDef<InstructorType>[] = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={
//           table.getIsAllPageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && "indeterminate")
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: "id",
//     header: "Id",
//   },
//   {
//     accessorKey: "name",
//     header: "Name",
//   },
//   {
//     accessorKey: "email",
//     header: "Email",
//   },
//   {
//     accessorKey: "subject",
//     header: "Subject",
//   },
//   {
//     accessorKey: "last_login_time",
//     header: "Last Login Time",
//   },
//   columnHelper.display({
//     id: "actions",
//     header: "Actions",
//     cell: ({row})=> (
//       <span className="flex items-center gap-2 text-red-500 cursor-pointer"><Trash size={18}/> Actions</span>
//     )
//   })
// ];

// export const studentColumns: ColumnDef<StudentType>[] = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={
//           table.getIsAllPageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && "indeterminate")
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: "id",
//     header: "Id",
//   },
//   {
//     accessorKey: "name",
//     header: "Name",
//   },
//   {
//     accessorKey: "email",
//     header: "Email",
//   },
//   {
//     accessorKey: "group",
//     header: "Group",
//   },
//   {
//     accessorKey: "password",
//     header: "Password",
//   },
//   {
//     accessorKey: "last_login_time",
//     header: "Last Login Time",
//   },
//   studentColumnHelper.display({
//     id:"action",
//     header: "Action",
//     cell: ({row})=> (
//       <span className="flex items-center gap-2 text-red-500 cursor-pointer"><Trash size={16} /> delete</span>
//     )
//   })

// ]

// export const questionColumns: ColumnDef<Question, unknown>[] = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={
//           table.getIsAllPageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && "indeterminate")
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: "id",
//     header: "ID"
//   },
//   {
//     accessorKey: "questionText",
//     header: "Question"
//   },
//   {
//       accessorKey: "questionType",
//       header: "Question Type",
//   },
//   questionColumnHelper.display({
//     id: "actions",
//     header: "Actions",
//     cell: ({row})=> (
//       <span className="flex items-center gap-2 text-green-500 cursor-pointer"><Plus size={18}/> Add</span>
//     )
//   })

// ]