import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./authRoutes";
import { Loading } from "../components/Loading";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";

const isLoading = true;

export function Routes() {
  if (isLoading) {
    return <Loading />;
  }
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
}
