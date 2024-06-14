import { Toaster } from "react-hot-toast";
import RegisterModal from "./components/Modals/RegisterModal";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Toaster />
      <RegisterModal />
      <Navbar />
    </div>
  );
};

export default App;
