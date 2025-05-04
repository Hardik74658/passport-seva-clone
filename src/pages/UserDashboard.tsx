
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Dashboard from "@/components/Dashboard";

const UserDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
};

export default UserDashboard;
