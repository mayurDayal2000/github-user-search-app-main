import { useContext } from 'react';
import { FormContext } from '../SeachForm';

export const Stats = () => {
  const { public_repos, followers, following } = useContext(FormContext);

  return (
    <>
      {/* Stats Section */}
      <div className='my-6 rounded-lg bg-[#F6F8FF] p-2 dark:bg-[#141D2F] md:my-8 md:px-8 md:py-4 xl:ms-[160px]'>
        <ul className='flex items-center'>
          <li className='flex flex-1 basis-full cursor-pointer flex-col items-center justify-center gap-y-2 rounded-sm p-2 text-xs font-normal text-[#4B6A9B] dark:text-[#fff] md:text-sm'>
            <span>Repos</span>
            <strong className='text-base font-bold md:text-xl'>
              {public_repos}
            </strong>
          </li>

          <li className='flex flex-1 basis-full cursor-pointer flex-col items-center justify-center gap-y-2 rounded-sm p-2 text-xs font-normal text-[#4B6A9B] dark:text-[#fff] md:text-sm'>
            <span>Followers</span>
            <strong className='text-base font-bold md:text-xl'>
              {followers}
            </strong>
          </li>

          <li className='flex flex-1 basis-full cursor-pointer flex-col items-center justify-center gap-y-2 rounded-sm p-2 text-xs font-normal text-[#4B6A9B] dark:text-[#fff] md:text-sm'>
            <span>Following</span>
            <strong className='text-base font-bold md:text-xl'>
              {following}
            </strong>
          </li>
        </ul>
      </div>
    </>
  );
};
