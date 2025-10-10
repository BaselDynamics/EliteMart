import { Routes, Route } from "react-router-dom";
import Login from "../components/common/auth/Login";
import VerifyEmail from "../components/common/auth/VerifyEmail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
    </Routes>
  );
};

export default AppRoutes;
