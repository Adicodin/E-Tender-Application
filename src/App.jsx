import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header";
import TenderDetails from "./pages/TenderDetails";
import BidForm from "./pages/BidForm";
import AppliedTenders from "./pages/AppliedTenders";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import CreateTender from "./pages/CreateTender";
import AppliedBids from "./pages/AppliedBids";

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/admin-login" element={<AdminLogin />}/>
        <Route path="/admin-dashboard" element={<AdminDashboard />}/>
        <Route path="/tender/:id" element={<TenderDetails />} />
        <Route path="/bidform/:id" element={<BidForm />} />
        <Route path="/applied-tenders" element={<AppliedTenders />} />
        <Route path="/create-tender" element={<CreateTender />} />
        <Route path="/applied-bids/:id" element={<AppliedBids />} />

      </Routes>
    </BrowserRouter>
  );
}
