import React, { useCallback } from "react";
import { fetchCustomer } from "../../services/CustomerService";
import useFetch from "../../hooks/useFetch";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { SquareChartGantt } from "lucide-react";
import { Loading } from "../../components/Loading";

const COLORS = ["#8884d8", "#82ca9d", "#FF156D"];

// Hàm xử lý dữ liệu cho Bar Chart (trạng thái đơn hàng)
const getBarChartData = (data) => {
  const statusCount = data.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(statusCount).map((key) => ({
    name: key,
    value: statusCount[key],
  }));
};

// Hàm xử lý dữ liệu cho Line Chart (giá trị đơn hàng theo ngày)
const getLineChartData = (data) => {
  const groupedData = data.reduce((acc, item) => {
    try {
      // Kiểm tra nếu không có order_date hoặc không hợp lệ
      if (!item.order_date) return acc;

      const dateObj = new Date(item.order_date);

      // Kiểm tra xem đối tượng Date có hợp lệ hay không
      if (isNaN(dateObj.getTime())) {
        console.warn("Invalid date format:", item.order_date);
        return acc;
      }

      // Chuyển đổi định dạng ngày và bỏ đi giờ phút giây
      const date = dateObj.toISOString().split("T")[0];
      acc[date] = (acc[date] || 0) + parseFloat(item.order_value);
      return acc;
    } catch (error) {
      console.error("Error processing date:", item.order_date, error);
      return acc;
    }
  }, {});

  return Object.keys(groupedData).map((date) => ({
    date: date,
    value: groupedData[date],
  }));
};

export const AnalyticsPage = () => {
  const stableFetchCustomer = useCallback(fetchCustomer, []);
  const { data, isLoading } = useFetch(stableFetchCustomer);

  // Xử lý dữ liệu biểu đồ
  const barData = getBarChartData(data);
  const lineData = getLineChartData(data);

  return (
    <div className="min-h-screen flex flex-col space-y-4 py-12 px-4">
      {isLoading ? (
        <div className="min-h-screen flex justify-center">
          <Loading />
        </div>
      ) : (
        <>
          <div className="flex flex-row items-center space-x-4">
            <SquareChartGantt className="text-pink-500 text-xl" />
            <h1 className="text-xl font-bold">Number of Orders by Status</h1>
          </div>
          <ResponsiveContainer width="50%" height={300} className="mx-auto">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>

          <div className="flex flex-row items-center space-x-4">
            <SquareChartGantt className="text-pink-500 text-xl" />
            <h1 className="text-xl font-bold">
              Order Value Fluctuation Over Time
            </h1>
          </div>
          <ResponsiveContainer width="70%" height={300} className="mx-auto">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#FF156D" />
            </LineChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};
