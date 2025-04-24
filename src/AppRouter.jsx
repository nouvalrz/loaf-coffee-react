import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import AboutUsPage from "./pages/AboutUsPage";

function AppRouter() {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/facilities" element={<FacilitiesPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRouter;
