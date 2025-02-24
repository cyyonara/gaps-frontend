export const getPage = (page: any): number => {
  const pageInNumber: number = parseInt(page as string);
  const parsedPage = isNaN(pageInNumber) || pageInNumber < 1 ? 1 : pageInNumber;

  return parsedPage;
};

export const rowsPerPageOptions = [10, 25, 50, 100];

export const getRowsPerPage = (selectedRowsPerPage: any): number => {
  const rowsPerPageInNumber = parseInt(selectedRowsPerPage as string);
  const parsedRowsPerPage =
    isNaN(rowsPerPageInNumber) ||
    rowsPerPageInNumber < 1 ||
    !rowsPerPageOptions.includes(rowsPerPageInNumber)
      ? 10
      : rowsPerPageInNumber;

  return parsedRowsPerPage;
};

export const sortingOptions = [
  { label: "Updated At (Newest to Oldest)", value: "updatedAt_desc" },
  { label: "Updated At (Oldest to Newest)", value: "updatedAt_asc" },
  { label: "Created At (Newest to Oldest)", value: "createdAt_desc" },
  { label: "Created At (Oldest to Newest)", value: "createdAt_asc" },
  { label: "Department Name (A-Z)", value: "name_asc" },
  { label: "Department Name (Z-A)", value: "name_desc" },
];

export const getSortingOption = (selectedSortingOption: any): string => {
  const sortingOption = sortingOptions.find((option) => option.value === selectedSortingOption);
  return sortingOption ? sortingOption.value : "updatedAt_desc";
};
