import { PencilIcon } from "lucide-react";

export const columns = (handleStartEdit) => [
  {
    name: "Customer Name",
    selector: (row) => row.name,
    sortable: true,
    cell: (row) => (
      <span className="font-medium text-gray-800">{row.name}</span>
    ),
  },
  {
    name: "Company",
    selector: (row) => row.company_name,
    sortable: true,
    cell: (row) => <span className="text-gray-600">{row.company_name}</span>,
  },
  {
    name: "Order Value",
    selector: (row) => row.order_value,
    sortable: true,
    cell: (row) => (
      <span className="text-pink-500 font-semibold">${row.order_value}</span>
    ),
  },
  {
    name: "Order Date",
    selector: (row) => new Date(row.order_date).toLocaleDateString(),
    sortable: true,
    cell: (row) => (
      <span className="text-gray-600">
        {new Date(row.order_date).toLocaleDateString()}
      </span>
    ),
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
    cell: (row) => (
      <span
        className={`px-2 py-1 rounded-full text-sm font-medium ${
          row.status === "New"
            ? "bg-blue-100 text-blue-600"
            : row.status === "In-progress"
            ? "bg-yellow-100 text-yellow-600"
            : "bg-green-100 text-green-600"
        }`}
      >
        {row.status}
      </span>
    ),
  },
  {
    name: "Edit",
    cell: (row) => (
      <button
        onClick={() => handleStartEdit(row)}
        className="p-1 hover:text-pink-600 cursor-pointer"
      >
        <PencilIcon className="w-5 h-5" />
      </button>
    ),
    ignoreRowClick: true,
  },
];
