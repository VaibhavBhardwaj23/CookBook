import { useAuthProvider } from "../Context/AuthContext";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { isAuth, handleLogin } = useAuthProvider();
  // const navigate = useNavigate();
  useEffect(
    function () {
      if (!isAuth) handleLogin();
    },
    [isAuth, handleLogin]
  );

  return isAuth ? children : null;
}
