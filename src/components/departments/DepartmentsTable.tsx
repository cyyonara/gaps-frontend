import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, FileUp, MoreHorizontal } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import CustomButton from "@/components/common/CustomButton";
import moment from "moment";
import { Button } from "@/components/ui/button";
import { IDepartmentWithAudit } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams } from "react-router-dom";
import SearchDepartmentInput from "@/components/departments/SearchDepartmentInput";
import React, { useState } from "react";
import {
  rowsPerPageOptions,
  getPage,
  getRowsPerPage,
  sortingOptions,
  getSortingOption,
} from "@/utils/paginationUtils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  PaginationState,
  useReactTable,
} from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useGetDepartments from "@/hooks/api/useGetDepartments";
import { useDebounce } from "@/hooks/states/useDebounce";
import { cn } from "@/lib/utils";

const columns: ColumnDef<IDepartmentWithAudit>[] = [
  {
    accessorKey: "name",
    header: "Department name",
  },
  {
    accessorKey: "dean",
    header: "Dean",
    cell: ({ row }) => {
      const dean = row.getValue("dean") as IDepartmentWithAudit["dean"];

      return (
        <>
          {dean ? (
            <div className="flex items-center gap-x-3 justify-center">
              <Avatar className="size-8">
                <AvatarImage src={dean?.profileImage || ""} />
                <AvatarFallback className="capitalize">
                  {dean!.firstName[0] + dean!.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <span>{dean?.fullname}</span>
                <span className="text-muted-foreground text-xs">{dean?.email}</span>
              </div>
            </div>
          ) : (
            "--"
          )}
        </>
      );
    },
  },
  {
    accessorKey: "courseCount",
    header: "Courses",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => <>{moment(row.getValue("createdAt")).format("LL")}</>,
  },
  {
    accessorKey: "createdBy",
    header: "Created By",
    cell: ({ row }) => {
      const createdBy = row.getValue("createdBy") as IDepartmentWithAudit["createdBy"];

      return (
        <>
          {createdBy ? (
            <div className="flex items-center gap-x-3 justify-center">
              <Avatar className="size-8">
                <AvatarImage src={createdBy?.profileImage || ""} />
                <AvatarFallback className="capitalize">
                  {createdBy!.firstName[0] + createdBy!.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <span>{createdBy?.fullname}</span>
                <span className="text-muted-foreground text-xs">{createdBy?.email}</span>
              </div>
            </div>
          ) : (
            "--"
          )}
        </>
      );
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => <>{moment(row.getValue("updatedAt")).format("LL")}</>,
  },
  {
    accessorKey: "updatedBy",
    header: "Created By",
    cell: ({ row }) => {
      const updatedBy = row.getValue("updatedBy") as IDepartmentWithAudit["updatedBy"];

      return (
        <>
          {updatedBy ? (
            <div className="flex items-center gap-x-3 justify-center">
              <Avatar className="size-8">
                <AvatarImage src={updatedBy?.profileImage || ""} />
                <AvatarFallback className="capitalize">
                  {updatedBy!.firstName[0] + updatedBy!.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <span>{updatedBy?.fullname}</span>
                <span className="text-muted-foreground text-xs">{updatedBy?.email}</span>
              </div>
            </div>
          ) : (
            "--"
          )}
        </>
      );
    },
  },
  {
    id: "actions",
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

interface Props {
  setTotalDepartments: (total: number) => void;
}

const DepartmentsTable = ({ setTotalDepartments }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  let totalPages = 0;

  // query params
  const search = searchParams.get("search") || "";
  const debounceValue = useDebounce(search, 500);
  const page = getPage(searchParams.get("page"));
  const rowsPerPage = getRowsPerPage(searchParams.get("limit"));
  const sortBy = getSortingOption(searchParams.get("sortBy"));

  const { data, isLoading, isSuccess, isError, isFetching } = useGetDepartments({
    search: debounceValue,
    page,
    limit: rowsPerPage,
    sortBy,
  });
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: rowsPerPage,
  });

  const table = useReactTable({
    data: isSuccess ? data.departments : [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: { pagination },
    autoResetAll: false,
  });

  const currentPage = getPage(searchParams.get("page"));

  let paginationButtons: React.ReactNode;

  if (isSuccess) {
    setTotalDepartments(data.pagination.totalItems);
    totalPages = data.pagination.totalPages;
    paginationButtons = (
      <>
        <Button
          disabled={!data.pagination.hasPreviousPage}
          variant="outline"
          onClick={() => {
            setSearchParams({
              search: searchParams.get("search") || "",
              page: (currentPage - 1).toString(),
              limit: searchParams.get("limit") || "10",
              sortBy: searchParams.get("sortBy") || "",
            });
          }}
        >
          Previous
        </Button>
        <Button
          disabled={!data.pagination.hasNextPage}
          variant="outline"
          onClick={() => {
            setSearchParams({
              search: searchParams.get("search") || "",
              page: (currentPage + 1).toString(),
              limit: searchParams.get("limit") || "10",
              sortBy: searchParams.get("sortBy") || "",
            });
          }}
        >
          Next
        </Button>
      </>
    );
  }

  if (isLoading || isError || isFetching) {
    paginationButtons = (
      <>
        <Button variant="outline" disabled>
          Previous
        </Button>
        <Button variant="outline" disabled>
          Next
        </Button>
      </>
    );
  }

  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex items-center justify-between">
        <SearchDepartmentInput />
        <div className="flex items-center gap-x-6">
          <div className="flex items-center gap-x-2">
            <span className="text-muted-foreground whitespace-nowrap">Sort By:</span>
            <Select
              disabled={isLoading || isError || isFetching}
              value={sortBy}
              onValueChange={(value) => {
                table.setPageIndex(0);
                setSearchParams({
                  search: searchParams.get("search") || "",
                  page: "1",
                  limit: searchParams.get("limit") || "10",
                  sortBy: value,
                });
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sort departments" />
              </SelectTrigger>
              <SelectContent>
                {sortingOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-x-2">
            <CustomButton variant="outline" icon={Download}>
              Download
            </CustomButton>
            <CustomButton variant="outline" icon={FileUp}>
              Export
            </CustomButton>
          </div>
        </div>
      </div>
      {isLoading && (
        <Table className="border-none">
          <TableBody>
            {Array.from({ length: 11 }).map((_, i) => (
              <TableRow key={i} className="hover:bg-transparent">
                {Array.from({ length: columns.length }).map((_, i) => (
                  <TableCell key={i.toString()} className="p-4">
                    <Skeleton className="h-4 w-full" />
                  </TableCell>
                ))}
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {/* Success  */}
      {isSuccess && (
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header, i) => (
                  <TableHead
                    key={header.id}
                    className={cn({
                      "text-center": i !== 0,
                    })}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : ""}
                  className="h-16"
                >
                  {row.getVisibleCells().map((cell, i) => (
                    <TableCell
                      key={cell.id}
                      className={cn({
                        "text-center": i !== 0,
                      })}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No records found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
      <div className="flex items-center justify-end mb-8">
        <div className="flex items-center gap-x-10">
          <div className="flex items-center gap-x-2">
            <span className="whitespace-nowrap">Rows per page</span>
            <Select
              disabled={isLoading || isError || isFetching}
              defaultValue={rowsPerPage.toString()}
              onValueChange={(value) => {
                table.setPageSize(parseInt(value));
                table.setPageIndex(0);
                setSearchParams({
                  search: searchParams.get("search") || "",
                  page: getPage(searchParams.get("page")).toString(),
                  limit: value,
                  sortBy: searchParams.get("sortBy") || "",
                });
              }}
            >
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                {rowsPerPageOptions.map((option) => (
                  <SelectItem key={option.toString()} value={option.toString()}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex gap-x-1">{paginationButtons}</div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentsTable;
