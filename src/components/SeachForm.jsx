import { useState } from "react";
import { SearchIcon } from "../assets/SVGComponent";

export const SearchForm = ({ isDarkMode }) => {
  const [usrInput, setUsrInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(usrInput);
  };

  return (
    <main className="mt-9">
      <form
        className={`${
          isDarkMode
            ? "bg-[#1E2A47]"
            : "bg-[#FEFEFE] shadow-[0_16px_30px_-10px_rgba(70,96,187,0.20)]"
        } rounded-2xl p-2 ps-4 md:p-3 md:ps-8`}
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-between gap-x-2 md:gap-x-6">
          <div className="flex items-center gap-x-2 md:gap-x-6 grow">
            <SearchIcon />

            <input
              type="text"
              name="user"
              placeholder="Search GitHub username…"
              required
              className={`text-sm md:text-lg font-normal grow outline-none bg-transparent leading-[25px] caret-[#0079FF] ${
                isDarkMode
                  ? "placeholder:text-[#fff] text-[#fff]"
                  : "placeholder:text-[#4B6A9B] text-[#222731]"
              }`}
              value={usrInput}
              onChange={(event) => setUsrInput(event.target.value)}
            />
          </div>

          <button
            type="submit"
            className="px-4 py-3 md:px-6 rounded-lg bg-[#0079FF] hover:bg-[#60ABFF] text-sm md:text-base font-bold text-[#fff] transition-colors duration-200 ease-in"
          >
            Search
          </button>
        </div>
      </form>
    </main>
  );
};
