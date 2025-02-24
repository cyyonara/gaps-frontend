import UsersTable from "@/components/users/UsersTable";
import AddUsersDialog from "@/components/users/AddUserDialog";
import { useState } from "react";

const Users = () => {
  const [totalUsers, setTotalUsers] = useState<number>(0);

  return (
    <div className="flex flex-col">
      <div className="mb-12 flex items-center justify-between">
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-3">
            <h1 className="text-3xl font-bold text-primary">Users</h1>
            <div className="rounded-full bg-primary/10 px-3 py-[6px] text-xs text-primary">
              {totalUsers} total
            </div>
          </div>
          <p className="text-muted-foreground">Here you will see the list of users.</p>
        </div>
        <AddUsersDialog />
      </div>
      <UsersTable setTotalUsers={(total: number) => setTotalUsers(total)} />
    </div>
  );
};

export default Users;
