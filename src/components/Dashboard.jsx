import TopBar from "../components/TopBar";
import ActivityChartGoals from "./ActivityChartGoals";
import Sidebar from "./Sidebar";
import RecentOrders from "../components/RecentOrders";
import CustomerFeedback from "../components/CustomerFeedback";
import StatsNetProfit from "./StatsNetProfit";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 ml-16">
        <TopBar />
        <main className="max-w-7xl mx-auto p-6">
          <div className="space-y-6">
            <StatsNetProfit />
            <ActivityChartGoals />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecentOrders />
              <CustomerFeedback />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
