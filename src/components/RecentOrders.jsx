import "tailwindcss/tailwind.css";

import "tailwindcss/tailwind.css";

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/women/47.jpg",
  "https://randomuser.me/api/portraits/men/48.jpg",
  "https://randomuser.me/api/portraits/women/49.jpg",
];

const recentOrders = [
  {
    customer: "Wade Warren",
    orderNo: "15476256",
    amount: "$124.00",
    status: "Delivered",
    avatar: avatars[0],
  },
  {
    customer: "Jane Cooper",
    orderNo: "48865768",
    amount: "$365.02",
    status: "Delivered",
    avatar: avatars[1],
  },
  {
    customer: "Guy Hawkins",
    orderNo: "78958215",
    amount: "$45.88",
    status: "Cancelled",
    avatar: avatars[2],
  },
  {
    customer: "Kristin Watson",
    orderNo: "20965732",
    amount: "$65.00",
    status: "Pending",
    avatar: avatars[3],
  },
  {
    customer: "Cody Fisher",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
    avatar: avatars[4],
  },
  {
    customer: "Savannah Nguyen",
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
    avatar: avatars[5],
  },
];

const RecentOrders = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="text-lg font-bold mb-4 text-white">Recent Orders</div>
      <div className="flex text-gray-400 text-sm mb-2">
        <div className="w-1/4">Customer</div>
        <div className="w-1/4">Order No.</div>
        <div className="w-1/4">Amount</div>
        <div className="w-1/4">Status</div>
      </div>
      {recentOrders.map((order, index) => (
        <div
          key={index}
          className="flex items-center text-sm bg-gray-700 p-4 mb-2 rounded-lg"
        >
          <div className="flex items-center w-1/4">
            <img
              src={order.avatar}
              alt={order.customer}
              className="w-8 h-8 rounded-full mr-2"
            />
            <div className="text-white">{order.customer}</div>
          </div>
          <div className="w-1/4 text-gray-400">{order.orderNo}</div>
          <div className="w-1/4 text-gray-400">{order.amount}</div>
          <div className="w-1/4">
            <span
              className={`px-2 py-1 rounded-full text-xs ${
                order.status === "Delivered"
                  ? "bg-green-900 text-green-300"
                  : order.status === "Cancelled"
                  ? "bg-red-900 text-red-300"
                  : "bg-yellow-900 text-yellow-300"
              }`}
            >
              {order.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentOrders;
