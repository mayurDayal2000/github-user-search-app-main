import { MoonIcon, SunIcon } from "../assets/SVGComponent";

export const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="flex items-center justify-between gap-x-2">
      <h1
        className={`${
          isDarkMode ? "text-[#fff]" : "text-[#222731]"
        } transition-colors duration-200 ease-in text-[1.625rem] font-bold`}
      >
        <a href="/">devfinder</a>
      </h1>

      <button
        type="button"
        onClick={toggleDarkMode}
        className={`flex items-center gap-x-4 ${
          isDarkMode
            ? "text-[#fff] hover:text-[#90A4D4]"
            : "text-[#4B6A9B] hover:text-[#222731]"
        } transition-colors duration-200 ease-in text-[.8125rem] font-bold uppercase tracking-[.15rem] `}
      >
        <span>{isDarkMode ? "Light" : "Dark"}</span>
        {isDarkMode ? (
          <SunIcon className="fill-current transition-colors duration-200 ease-in" />
        ) : (
          <MoonIcon className="fill-current transition-colors duration-200 ease-in" />
        )}
      </button>
    </header>
  );
};
