import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../auth/LoginPage";
import SignUpPage from "../auth/SignUpPage";
import DoctorAppointmentsListPage from "../pages/doctor/DoctorAppointmentsListPage";
import PatientInfoPage from "../pages/patient/PatientInfoPage";
import Layout from "../components/Global/Layout";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route
          path="/dashboard"
          element={<Layout page={<DoctorAppointmentsListPage />} />}
        />
        <Route path="/patients/:patientId" element={<PatientInfoPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
