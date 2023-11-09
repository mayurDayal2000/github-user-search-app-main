export const Stats = () => {
  return (
    <>
      {/* Stats Section */}
      <div className='my-6 rounded-lg bg-[#F6F8FF] p-2 dark:bg-[#141D2F] md:my-8 md:px-8 md:py-4 xl:ms-[160px]'>
        <ul className='flex items-center'>
          <li className='flex flex-1 basis-full cursor-pointer flex-col items-center justify-center gap-y-2 rounded-sm p-2 text-xs font-normal text-[#4B6A9B] hover:bg-[#141D2F] hover:bg-opacity-20 dark:text-[#fff] dark:hover:bg-[#F6F8FF] md:text-sm'>
            <span>Repos</span>
            <strong className='text-base font-bold md:text-xl'>8</strong>
          </li>

          <li className='flex flex-1 basis-full cursor-pointer flex-col items-center justify-center gap-y-2 rounded-sm p-2 text-xs font-normal text-[#4B6A9B] hover:bg-[#141D2F] hover:bg-opacity-20 dark:text-[#fff] dark:hover:bg-[#F6F8FF] md:text-sm'>
            <span>Followers</span>
            <strong className='text-base font-bold md:text-xl'>3938</strong>
          </li>

          <li className='flex flex-1 basis-full cursor-pointer flex-col items-center justify-center gap-y-2 rounded-sm p-2 text-xs font-normal text-[#4B6A9B] hover:bg-[#141D2F] hover:bg-opacity-20 dark:text-[#fff] dark:hover:bg-[#F6F8FF] md:text-sm'>
            <span>Following</span>
            <strong className='text-base font-bold md:text-xl'>9</strong>
          </li>
        </ul>
      </div>
    </>
  );
};
