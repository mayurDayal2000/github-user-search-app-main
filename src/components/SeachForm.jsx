import { createContext, useEffect, useState } from 'react';
import { SearchIcon } from '../assets/SVGComponent';
import { MainContent } from './MainContent';
import { Octokit } from 'octokit';
import Lottie from 'lottie-react';
import animationData from '../assets/github_loader.json';

export const FormContext = createContext(null);

export const SearchForm = () => {
  const [usrInput, setUsrInput] = useState('');
  const [usrData, setUsrData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsrData = async (username) => {
    setIsLoading(true);

    try {
      const octokit = new Octokit();
      const response = await octokit.request(`GET /users/${username}`);
      setUsrData(response.data);
    } catch (err) {
      setUsrData(null);
    } finally {
      setIsLoading(false);
    }
  };

  // fetch default user data on mount
  useEffect(() => {
    fetchUsrData('octocat');
  }, []);

  // fetch user data on form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchUsrData(usrInput);
  };

  return (
    <FormContext.Provider value={usrData}>
      <main className='mt-9'>
        <form
          className='rounded-2xl bg-[#FEFEFE] p-2 ps-4 shadow-[0_16px_30px_-10px_rgba(70,96,187,0.20)] dark:bg-[#1E2A47] dark:shadow-none md:p-3 md:ps-8'
          onSubmit={handleSubmit}
        >
          <div className='flex items-center justify-between gap-x-2 md:gap-x-6'>
            <div className='flex items-center grow gap-x-2 md:gap-x-6'>
              <SearchIcon />

              <input
                type='text'
                name='user'
                placeholder='Search GitHub username…'
                required
                className='grow bg-transparent text-sm font-normal leading-[25px] text-[#222731] caret-[#0079FF] outline-none placeholder:text-[#4B6A9B] dark:text-[#fff] dark:placeholder:text-[#fff] md:text-lg'
                value={usrInput}
                onChange={(event) => setUsrInput(event.target.value)}
              />
            </div>

            <button
              type='submit'
              className='rounded-lg bg-[#0079FF] px-4 py-3 text-sm font-bold text-[#fff] transition-colors duration-200 ease-in hover:bg-[#60ABFF] md:px-6 md:text-base'
            >
              Search
            </button>
          </div>
        </form>

        {isLoading ? (
          <div className='w-full min-h-[280px] flex items-center justify-center'>
            <Lottie animationData={animationData} loop={true} />
          </div>
        ) : (
          usrData && <MainContent />
        )}
      </main>
    </FormContext.Provider>
  );
};
