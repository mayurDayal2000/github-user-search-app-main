import { Intro } from "./content/Intro";

export const MainContent = ({ isDarkMode }) => {
  return (
    <section
      className={`my-4 px-6 pt-8 pb-12 md:p-10 xl:p-12 ${
        isDarkMode
          ? "bg-[#1E2A47]"
          : "bg-[#FEFEFE] shadow-[0_16px_30px_-10px_rgba(70,96,187,0.20)]"
      } rounded-2xl`}
    >
      <Intro isDarkMode={isDarkMode} />

      
    </section>
  );
};
