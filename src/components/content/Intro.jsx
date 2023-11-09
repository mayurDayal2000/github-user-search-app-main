export const Intro = () => {
  return (
    <>
      {/* Intro Section */}
      <div className='grid grid-cols-[68px,_repeat(4,_minmax(0,_1fr))] items-center gap-x-5 gap-y-8 md:grid-cols-[118px,_repeat(4,_minmax(0,_1fr))] md:gap-x-10 md:gap-y-6 xl:gap-y-5'>
        <img
          src='https://avatars.githubusercontent.com/u/583231?v=4'
          alt='user profile picture'
          className='h-[4.25rem] w-[4.25rem] rounded-full md:h-[7.375rem] md:w-[7.375rem]'
        />

        <div className='flex-wrap col-span-4 xl:flex xl:justify-between xl:gap-y-5'>
          <div className='mb-2'>
            <h2 className='text-base font-bold text-[#2B3442] dark:text-[#fff] md:text-[1.625rem]'>
              The Octocat
            </h2>
            <h3 className='text-sm font-normal text-[#0079FF] md:text-base'>
              @octocat
            </h3>
          </div>

          <time className='text-sm font-normal text-[#697C9A] dark:text-[#fff] md:text-base'>
            Joined 25 Jan 2011
          </time>

          <p className='col-span-5 row-start-2 hidden text-sm font-normal text-[#4B6A9B] dark:text-[#fff] md:text-base xl:col-span-4 xl:col-start-2 xl:block'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
        </div>

        <p className='col-span-5 row-start-2 text-sm font-normal text-[#4B6A9B] dark:text-[#fff] md:text-base xl:col-span-4 xl:col-start-2 xl:hidden'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
      </div>
    </>
  );
};
