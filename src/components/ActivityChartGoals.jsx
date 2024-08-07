const activityData = [
  { name: "1", value: 4 },
  { name: "3", value: 3 },
  { name: "5", value: 7 },
  { name: "7", value: 2 },
  { name: "9", value: 5 },
  { name: "11", value: 3 },
  { name: "13", value: 4 },
  { name: "15", value: 5 },
  { name: "17", value: 6 },
  { name: "19", value: 9 },
  { name: "21", value: 11 },
  { name: "23", value: 8 },
  { name: "25", value: 7 },
  { name: "27", value: 5 },
];

import { ChevronRight } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ActivityChartGoals = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
      <div className="flex-1 bg-gray-800 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-bold text-white">Activity</div>
          <select className="bg-gray-700 rounded px-2 py-1 text-sm text-white">
            <option>Weekly</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={activityData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-gray-800 rounded-lg p-4 w-full lg:w-auto">
        <div className="space-y-4">
          {[
            { label: "Goals", color: "bg-red-500" },
            { label: "Popular Dishes", color: "bg-blue-500" },
            { label: "Menus", color: "bg-teal-500" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center text-white"
            >
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 ${item.color} rounded-full mr-3 flex items-center justify-center`}
                >
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <span>{item.label}</span>
              </div>
              <ChevronRight className="w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityChartGoals;
