import { useState } from "react";
import { Header } from "./components/Header";
import { SearchForm } from "./components/SeachForm";

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

        <SearchForm isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default App;
