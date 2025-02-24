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
import { useSearchParams } from "react-router-dom";
import {
  getPage,
  getRowsPerPage,
  getSortingOption,
  rowsPerPageOptions,
} from "@/utils/paginationUtils";
import { useDebounce } from "@/hooks/states/useDebounce";
import useGetUsers from "@/hooks/api/useGetUsers";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  PaginationState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { IDepartmentWithAudit, IUserWithAudit } from "@/types";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Badge, BadgeProps } from "@/components/ui/badge";
import SearchUserInput from "@/components/users/SearchUserInput";

const columns: ColumnDef<IUserWithAudit>[] = [
  {
    accessorKey: "profileImage",
    header: "",
    cell: ({ row }) => {
      const firstName = row.original.firstName;
      const lastName = row.original.lastName;

      const avatarFallback = firstName[0] + lastName[0];
      const profileImage = row.original.profileImage as string;

      return (
        <Avatar className="size-8">
          <AvatarImage src={profileImage} />
          <AvatarFallback className="capitalize">{avatarFallback}</AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "fullname",
    header: "Full Name",
  },
  {
    accessorKey: "department.name",
    header: "Department",
    cell: ({ row }) => (row.original.department ? row.original.department.name : "--"),
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.original.role;

      let badgeVariant: BadgeProps["variant"] = "default";

      if (role === "admin") {
        badgeVariant = "outline";
      }

      if (role === "dean") {
        badgeVariant = "secondary";
      }

      if (role === "mentor") {
        badgeVariant = "default";
      }

      return (
        <Badge className="capitalize" variant={badgeVariant}>
          {role}
        </Badge>
      );
    },
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
            <div className="flex items-center gap-x-3">
              <Avatar className="size-8">
                <AvatarImage src={createdBy?.profileImage || ""} />
                <AvatarFallback className="capitalize">
                  {createdBy?.firstName[0] + createdBy?.lastName[0]}
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
            <div className="flex items-center gap-x-3">
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
  setTotalUsers: (total: number) => void;
}

const UsersTable = ({ setTotalUsers }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  let totalPages = 0;

  // query params
  const search = searchParams.get("search") || "";
  const debounceValue = useDebounce(search, 500);
  const page = getPage(searchParams.get("page"));
  const rowsPerPage = getRowsPerPage(searchParams.get("limit"));
  const sortBy = getSortingOption(searchParams.get("sortBy"));

  const { data, isLoading, isSuccess, isError, isFetching } = useGetUsers({
    search: debounceValue,
    page,
    limit: rowsPerPage,
  });
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: rowsPerPage,
  });

  console.log(data);

  const table = useReactTable({
    data: isSuccess ? data.users : [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: { pagination },
    autoResetAll: false,
  });

  let paginationButtons: React.ReactNode;

  if (isSuccess) {
    setTotalUsers(data.pagination.totalItems);
    totalPages = data.pagination.totalPages;
    paginationButtons = (
      <>
        <Button
          disabled={!data.pagination.hasPreviousPage}
          variant="outline"
          onClick={() => {
            setSearchParams({
              search: searchParams.get("search") || "",
              page: (page - 1).toString(),
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
              page: (page + 1).toString(),
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
        <SearchUserInput />
        <div className="flex items-center gap-x-8">
          <div className="flex items-center gap-x-2">
            <span className="text-muted-foreground">Sort By</span>
            <Select defaultValue="name" disabled={isLoading}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="date">Name (Z-A)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-x-2">
            <CustomButton variant="outline" icon={Download}>
              Download
            </CustomButton>
            <CustomButton icon={FileUp}>Export</CustomButton>
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
      {isSuccess && (
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header, i) => (
                  <TableHead key={header.id} className={cn({})}>
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
                    <TableCell key={cell.id}>
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
            Page {page} of {totalPages}
          </div>
          <div className="flex gap-x-1">{paginationButtons}</div>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
