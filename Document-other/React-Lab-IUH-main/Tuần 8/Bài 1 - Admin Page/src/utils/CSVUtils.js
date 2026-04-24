import { saveAs } from "file-saver";
import Papa from "papaparse";

export const exportToCSV = (data, filename) => {
  const csvData = data.map((item) => ({
    name: item.name,
    company: item.company_name,
    order_value: item.order_value,
    order_date: new Date(item.order_date).toLocaleDateString(),
    status: item.status,
  }));
  const csv = Papa.unparse(csvData);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  saveAs(blob, filename);
};

export const importFromCSV = (file, onSuccess) => {
  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: (result) => {
      onSuccess(result.data);
    },
    error: (error) => {
      console.error("Xảy ra lỗi trong lúc đọc file:", error);
    },
  });
};
