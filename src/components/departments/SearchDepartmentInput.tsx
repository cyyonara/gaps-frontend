import CustomInput from "@/components/common/CustomInput";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { memo } from "react";

const SearchDepartmentInput = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  return (
    <CustomInput
      icon={Search}
      placeholder="Search department..."
      value={search}
      onChange={(e) =>
        setSearchParams({
          search: e.target.value,
          page: "1",
          limit: searchParams.get("limit") || "10",
          sortBy: searchParams.get("sortBy") || "",
        })
      }
    />
  );
});

export default SearchDepartmentInput;
