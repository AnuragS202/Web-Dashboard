import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const StatsItem = ({ icon, title, value, change }) => (
  <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
    <div className="flex items-center justify-center space-x-2 mb-2">
      <span className="text-xl">{icon}</span>
      <span className="text-gray-400 text-sm">{title}</span>
    </div>
    <div className="text-center">
      <span className="text-white text-2xl font-bold">{value}</span>
      <span
        className={`ml-2 text-sm ${
          change >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {change >= 0 ? "+" : ""}
        {change}%
      </span>
    </div>
  </div>
);

const StatsNetProfit = () => {
  const stats = [
    { icon: "🛒", title: "Total Orders", value: "75", change: 3 },
    { icon: "🚚", title: "Total Delivered", value: "70", change: -3 },
    { icon: "❌", title: "Total Cancelled", value: "05", change: 3 },
    { icon: "💰", title: "Total Revenue", value: "$12k", change: -3 },
  ];

  return (
    <div className="bg-gray-900 p-4 md:p-6 rounded-xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatsItem key={index} {...stat} />
        ))}
      </div>
      <div className="mt-4 md:mt-6 bg-gray-800 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-gray-400 text-sm">Net Profit</span>
          <div className="mt-1">
            <span className="text-white text-3xl font-bold">$6759.25</span>
            <span className="ml-2 text-sm text-green-500">+3%</span>
          </div>
        </div>
        <div className="w-24 h-24 d">
          <CircularProgressbar
            value={70}
            text={`${70}%`}
            styles={{
              path: { stroke: "#3b82f6" },
              text: { fill: "#fff", fontSize: "24px" },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StatsNetProfit;
