import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { SetStateAction, useState } from "react"
import { Dialog } from "@radix-ui/react-dialog"
import { DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  globalFilter: string | number; // Optional, so add ? if you don't always use it
  setGlobalFilter: React.Dispatch<SetStateAction<string | number>>
}


export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {

  
  const table = useReactTable({
    data,
    columns,
    state:{
      // globalFilter:globalFilter
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    // onGlobalFilterChange: setGlobalFilter
  })

 
  return (
    <div className="flex flex-col border rounded-md">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <Dialog>
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  
                  <TableCell key={cell.id}>
                  <DialogTrigger> {flexRender(cell.column.columnDef.cell, cell.getContext())}</DialogTrigger> 
                  </TableCell>
                ))}
              </TableRow>

              <DialogContent>
              {row.getVisibleCells().map((cell) => (
                  
                  <TableCell key={cell.id}>
                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </DialogContent>

              </Dialog>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex gap-2 mt-4 ml-auto">
        <Button onClick={()=> table.firstPage()} disabled={!table.getCanPreviousPage()}>{"<<"}</Button>
        <Button onClick={()=> table.previousPage()} disabled={!table.getCanPreviousPage()}>{"<"}</Button>
        <Button onClick={()=> table.nextPage()} disabled={!table.getCanNextPage()}>{">"}</Button>
        <Button onClick={()=> table.lastPage()} disabled={!table.getCanNextPage()}>{">>"}</Button>
      </div>
    </div>
  )
}
