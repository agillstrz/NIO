import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import SetUpRouter from "./routes/SetUpRouter";
import QueryClientProviders from "./services/QueryClientProviders";
function App() {
  return (
    <>
      <ToastContainer
        className={`z-[9990]`}
        position="bottom-right"
        theme="dark"
      />
      <QueryClientProviders>
        <div className="font-Poppins">
          <SetUpRouter />
        </div>
      </QueryClientProviders>
    </>
  );
}

export default App;
