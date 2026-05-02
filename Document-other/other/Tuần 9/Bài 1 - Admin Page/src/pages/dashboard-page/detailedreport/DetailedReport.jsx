import React, { useCallback, useReducer } from "react";
import {
  fetchCustomer,
  saveCustomer,
  updateCustomer,
} from "../../../services/CustomerService";
import { Download, FileUp, SquareChartGantt } from "lucide-react";
import DataTable from "react-data-table-component";
import { columns } from "./DataTableConfig";
import { Loading } from "../../../components/Loading";
import useFetch from "../../../hooks/useFetch";
import { Modal } from "../../../components/Modal";
import CustomerForm from "../../../components/CustomerForm";
import { exportToCSV, importFromCSV } from "../../../utils/CSVUtils";

const initialState = {
  action: "none",
  edittingCustomer: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { action: "add", edittingCustomer: null };
    case "UPDATE":
      return { action: "update", edittingCustomer: action.payload };
    case "CLOSE":
      return { action: "none", edittingCustomer: null };
    default:
      return state;
  }
}

export const DetailedReport = () => {
  const stableFetchCustomer = useCallback(fetchCustomer, []);
  const { data, isLoading, refetch, toggleLoading } =
    useFetch(stableFetchCustomer);

  const [state, dispatch] = useReducer(reducer, initialState);

  const closeModal = () => dispatch({ type: "CLOSE" });

  const handleStartUpdate = (row) => dispatch({ type: "UPDATE", payload: row });

  const handleStartCreate = () => dispatch({ type: "ADD" });

  const onUpdateCustomer = async (id, newCustomer) => {
    await updateCustomer(id, newCustomer);
    refetch();
    closeModal();
  };

  const onSaveCustomer = async (newCustomer) => {
    await saveCustomer(newCustomer);
    refetch();
    closeModal();
  };

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      importFromCSV(file, async (importedData) => {
        try {
          toggleLoading();

          const promises = importedData.map((customer) => {
            return saveCustomer(customer);
          });
          const results = await Promise.all(promises);

          results.forEach((result, index) => {
            if (result) {
              console.log("Đã lưu khách hàng:", importedData[index].name);
            } else {
              console.warn(
                "Không thể lưu khách hàng:",
                importedData[index].name
              );
            }
          });

          refetch();
        } catch (e) {
          console.error("Lỗi khi lưu danh sách khách hàng:", e);
        }
      });
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center space-x-4">
          <SquareChartGantt className="text-pink-500 text-xl" />
          <h1 className="text-xl font-bold">Detailed Report</h1>
        </div>
        {!isLoading && (
          <div className="flex space-x-2">
            <button
              onClick={handleStartCreate}
              className="size-12 bg-green-500 hover:bg-green-600 text-center rounded-lg text-2xl font-bold text-white cursor-pointer"
            >
              +
            </button>
            <button
              onClick={() => exportToCSV(data, "customers.csv")}
              className="flex space-x-4 items-center bg-blue-600 hover:bg-blue-700 text-center rounded-lg text-lg font-bold text-white cursor-pointer px-4"
            >
              <Download />
              <p>Export CSV</p>
            </button>
            <label className="flex space-x-4 items-center bg-green-600 hover:bg-green-700 text-center rounded-lg text-lg font-bold text-white cursor-pointer px-4">
              <FileUp />
              <p>Import CSV</p>
              <input
                type="file"
                accept=".csv"
                onChange={handleImport}
                className="hidden"
              />
            </label>
          </div>
        )}
      </div>

      {/* Đang Fetch */}
      {isLoading && (
        <div className="flex justify-center items-center">
          <Loading />
        </div>
      )}

      {/* Hoàn thành Fetch */}
      {!isLoading && (
        <DataTable
          columns={columns(handleStartUpdate)}
          data={data}
          pagination
          highlightOnHover
          striped
        />
      )}

      {state.action !== "none" && (
        <Modal title={"Customer Form"} onClose={closeModal}>
          <CustomerForm
            initialData={state.edittingCustomer}
            onSave={
              state.action === "update" ? onUpdateCustomer : onSaveCustomer
            }
            action={state.action}
          />
        </Modal>
      )}
    </>
  );
};
