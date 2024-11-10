import { ColumnDef } from "@tanstack/react-table"

export type OrganisationType = {
  id: number
  name: string
  email: string
  password: string
  last_login_time: string
}

export const columns: ColumnDef<OrganisationType>[] = [
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
  }
]
