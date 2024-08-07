import { Star } from "lucide-react";

const customerFeedback = [
  { name: "John Doe", rating: 5, comment: "Excellent service!" },
  {
    name: "Jane Smith",
    rating: 4,
    comment: "Very good, but could be improved.",
  },
  { name: "Alice Johnson", rating: 3, comment: "Average experience." },
  {
    name: "Jenny Wilson",
    rating: 5,
    comment:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger last time I visited which was also very good. They were very accommodating and gave great service.",
  },
];

const recentOrders = [
  {
    customer: "John Doe",
    orderNo: "12345",
    amount: "$120",
    status: "Delivered",
  },
  {
    customer: "Jane Smith",
    orderNo: "12346",
    amount: "$150",
    status: "Cancelled",
  },
  {
    customer: "Alice Johnson",
    orderNo: "12347",
    amount: "$100",
    status: "Pending",
  },
];

const statusStyles = {
  Delivered: "bg-green-900 text-green-300",
  Cancelled: "bg-red-900 text-red-300",
  Pending: "bg-yellow-900 text-yellow-300",
};

const RecentOrdersFeedback = () => (
  <div className="pt-16 pl-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-gray-800 rounded-lg p-4">
        <div className="text-lg font-bold mb-4">Recent Orders</div>
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="text-left">Customer</th>
              <th className="text-left">Order No.</th>
              <th className="text-left">Amount</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order, index) => (
              <tr key={index} className="text-sm">
                <td className="py-2 flex items-center">
                  <div className="w-8 h-8 bg-gray-600 rounded-full mr-2"></div>
                  {order.customer}
                </td>
                <td>{order.orderNo}</td>
                <td>{order.amount}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      statusStyles[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-gray-800 rounded-lg p-4">
        <div className="text-lg font-bold mb-4">Customers Feedback</div>
        <div className="space-y-4">
          {customerFeedback.map((feedback, index) => (
            <div key={index} className="flex items-start">
              <div className="w-10 h-10 bg-gray-600 rounded-full mr-3 flex-shrink-0"></div>
              <div>
                <div className="font-bold">{feedback.name}</div>
                <div className="flex text-yellow-400">
                  {[...Array(feedback.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-400">{feedback.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default RecentOrdersFeedback;
