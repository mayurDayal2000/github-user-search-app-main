import { Intro } from './content/Intro';
import { Profile } from './content/Profile';
import { Stats } from './content/Stats';

export const MainContent = () => {
  return (
    <section className='my-4 rounded-2xl bg-[#FEFEFE] px-6 pb-12 pt-8 shadow-[0_16px_30px_-10px_rgba(70,96,187,0.20)] dark:bg-[#1E2A47] dark:shadow-none md:p-10 xl:p-12'>
      <Intro />
      <Stats />
      <Profile />
    </section>
  );
};
