import { useState } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Component");

  const data: { [key: string]: string } = {
    component:
      "Component là thành phần cơ bản của React, giúp chia UI thành các phần nhỏ có thể tái sử dụng. Mỗi component có thể là một function component hoặc class component, nhận props làm đầu vào và trả về JSX để hiển thị giao diện.",
    state:
      "State là dữ liệu nội bộ của component, giúp React quản lý và cập nhật giao diện khi dữ liệu thay đổi. State chỉ có thể thay đổi bên trong component bằng cách sử dụng useState hoặc this.setState.",
    jsx: "JSX là cú pháp mở rộng của JavaScript, giúp viết UI dễ dàng hơn bằng cách kết hợp HTML và JS trong cùng một file. JSX không phải là HTML thuần, mà sẽ được Babel dịch thành React.createElement().",
    props:
      "Props (properties) là cách React truyền dữ liệu từ component cha xuống component con. Props là immutable (không thể thay đổi trong component con) và giúp component hoạt động linh hoạt hơn.",
  };

  return (
    <div className="w-2/3 mx-auto min-h-[200px] border-2 border-gray-300 rounded-lg shadow-lg my-12">
      <div className="border-b-2 border-gray-300">
        <button
          className={`p-4 hover:bg-blue-300 hover:text-white ${
            activeTab === "Component" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => setActiveTab("Component")}
        >
          Component
        </button>
        <button
          className={`p-4 hover:bg-blue-300 hover:text-white ${
            activeTab === "State" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => setActiveTab("State")}
        >
          State
        </button>
        <button
          className={`p-4 hover:bg-blue-300 hover:text-white ${
            activeTab === "JSX" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => setActiveTab("JSX")}
        >
          JSX
        </button>
        <button
          className={`p-4 hover:bg-blue-300 hover:text-white ${
            activeTab === "Props" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => setActiveTab("Props")}
        >
          Props
        </button>
      </div>
      <div className="px-4 py-2">
        <p>{data[activeTab.toLowerCase()]}</p>
      </div>
    </div>
  );
};

export default Tab;
