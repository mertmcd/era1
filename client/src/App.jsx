import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import CreateEventPage from "./pages/Create";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-event" element={<CreateEventPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
