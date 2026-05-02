import { useState } from "react";
import logo from "./assets/logo.jpeg";

type investLog = {
  year: number;
  amount: number;
};

function App() {
  const [initInvestment, setInitInvestment] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [desiredAmount, setDesiredAmount] = useState(0);
  const [logs, setLogs] = useState<investLog[]>([]);

  const calculate = () => {
    const tempLogs: investLog[] = [];
    let amount = initInvestment;
    let year = 1;
    while (amount < desiredAmount) {
      const interest = amount * (interestRate / 100);
      amount += interest;

      tempLogs.push({ year: year + 1, amount: Math.round(amount * 100) / 100 });
      year = year + 1;
    }
    setLogs(tempLogs);
  };

  return (
    <div className="flex flex-col space-y-4 justify-center items-center h-screen">
      <img src={logo} alt="" className="w-[500px]" />
      <h3 className="text-5xl">MÁY TÍNH ĐẦU TƯ</h3>
      <div className="grid grid-cols-1 gap-4 border-2 border-gray-300 p-12 rounded-lg w-2/5">
        <div className="flex items-center space-x-4">
          <label htmlFor="" className="w-full">
            Tiền đầu vào
          </label>
          <input
            type="number"
            className="border border-black rounded-3xl text-black py-4 px-2 w-full"
            onChange={(e) => setInitInvestment(Number(e.target.value))}
          />
        </div>

        <div className="flex items-center space-x-4">
          <label htmlFor="" className="w-full">
            Tỉ suất lợi nhuận
          </label>
          <input
            type="number"
            className="border border-black rounded-3xl text-black py-4 px-2 w-full"
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
        </div>

        <div className="flex items-center space-x-4">
          <label htmlFor="" className="w-full">
            Tiền mong muốn
          </label>
          <input
            type="number"
            className="border border-black rounded-3xl text-black py-4 px-12  w-full"
            onChange={(e) => setDesiredAmount(Number(e.target.value))}
          />
        </div>
      </div>
      <button
        className="w-1/3 bg-red-500 text-white text-lg py-4 px-2 rounded-lg hover:bg-red-700 "
        onClick={calculate}
      >
        Tính Toán
      </button>
      {logs ? (
        <table className="w-1/3 text-center border-2 border-gray-300">
          <thead>
            <tr>
              <th>Year</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr>
                <td>{log.year}</td>
                <td>{log.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
