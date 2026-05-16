import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./authRoutes";
import { EmployeeRoutes } from "./EmployeeRefound";

export function Routes() {
  return (
    <BrowserRouter>
      <EmployeeRoutes />
    </BrowserRouter>
  );
}
