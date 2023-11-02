import { useState } from "react";
import { Header } from "./components/Header";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <div
      className={`w-full min-h-screen px-6 py-8 ${
        isDarkMode ? "bg-[#141D2F]" : "bg-[#F6F8FF]"
      }`}
    >
      <div className="container mx-auto">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
};

export default App;
