export const Stats = ({isDarkMode}) => {
  return (
    <>
      {/* Stats Section */}
      <div
        className={`my-6 md:my-8 rounded-lg p-2 md:px-8 md:py-4 xl:ms-[160px] ${
          isDarkMode ? "bg-[#141D2F]" : "bg-[#F6F8FF]"
        }`}
      >
        <ul className="flex items-center">
          <li
            className={`flex flex-col items-center justify-center gap-y-2 p-2 text-xs md:text-sm font-normal cursor-pointer flex-1 basis-full rounded-sm hover:bg-opacity-20 ${
              isDarkMode
                ? "text-[#fff] hover:bg-[#F6F8FF]"
                : "text-[#4B6A9B] hover:bg-[#141D2F]"
            }`}
          >
            <span>Repos</span>
            <strong className="text-base md:text-xl font-bold">8</strong>
          </li>

          <li
            className={`flex flex-col items-center justify-center gap-y-2 p-2 text-xs md:text-sm font-normal cursor-pointer flex-1 basis-full rounded-sm hover:bg-opacity-20 ${
              isDarkMode
                ? "text-[#fff] hover:bg-[#F6F8FF]"
                : "text-[#4B6A9B] hover:bg-[#141D2F]"
            }`}
          >
            <span>Followers</span>
            <strong className="text-base md:text-xl font-bold">3938</strong>
          </li>

          <li
            className={`flex flex-col items-center justify-center gap-y-2 p-2 text-xs md:text-sm font-normal cursor-pointer flex-1 basis-full rounded-sm hover:bg-opacity-20 ${
              isDarkMode
                ? "text-[#fff] hover:bg-[#F6F8FF]"
                : "text-[#4B6A9B] hover:bg-[#141D2F]"
            }`}
          >
            <span>Following</span>
            <strong className="text-base md:text-xl font-bold">9</strong>
          </li>
        </ul>
      </div>
    </>
  );
};
