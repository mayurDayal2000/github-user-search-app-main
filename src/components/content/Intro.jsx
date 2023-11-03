export const Intro = ({ isDarkMode }) => {
  return (
    <>
      {/* Intro Section */}
      <div className="grid grid-cols-[68px,_repeat(4,_minmax(0,_1fr))] md:grid-cols-[118px,_repeat(4,_minmax(0,_1fr))] items-center gap-x-5 md:gap-x-10 gap-y-8 md:gap-y-6 xl:gap-y-5">
        <img
          src="https://avatars.githubusercontent.com/u/583231?v=4"
          alt="user profile picture"
          className="w-[4.25rem] h-[4.25rem] md:w-[7.375rem] md:h-[7.375rem] rounded-full"
        />

        <div className="col-span-4 xl:flex xl:justify-between flex-wrap xl:gap-y-5">
          <div className="mb-2">
            <h2
              className={`text-base md:text-[1.625rem] font-bold ${
                isDarkMode ? "text-[#fff]" : "text-[#2B3442]"
              }`}
            >
              The Octocat
            </h2>
            <h3 className="text-sm md:text-base  font-normal text-[#0079FF]">
              @octocat
            </h3>
          </div>

          <time
            className={`text-sm md:text-base font-normal ${
              isDarkMode ? "text-[#fff]" : "text-[#697C9A]"
            }`}
          >
            Joined 25 Jan 2011
          </time>

          <p
            className={`hidden xl:block text-sm md:text-base font-normal col-span-5 xl:col-span-4 xl:col-start-2  row-start-2 ${
              isDarkMode ? "text-[#fff]" : "text-[#4B6A9B]"
            }`}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
        </div>

        <p
          className={`xl:hidden text-sm md:text-base font-normal col-span-5 xl:col-span-4 xl:col-start-2  row-start-2 ${
            isDarkMode ? "text-[#fff]" : "text-[#4B6A9B]"
          }`}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
      </div>
    </>
  );
};
