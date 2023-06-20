import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import SignUp from "./SignUp";
import ConfirmSignUp from "./ConfirmSignUp";
import Login from "./Login";

const app = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<SignUp />} />
      <Route path="/confirm-sign-up" element={<ConfirmSignUp />} />
      <Route path="/login" element={<Login />} />
    </>
  )
);

export default app;
