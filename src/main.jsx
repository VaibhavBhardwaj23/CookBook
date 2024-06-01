import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AutProvider } from "./Context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AutProvider>
      <App />
    </AutProvider>
  
);
