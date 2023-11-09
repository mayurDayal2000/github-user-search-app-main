import useDarkToggler from '../Hooks/useDarkToggler';
import { MoonIcon, SunIcon } from '../assets/SVGComponent';

export const Header = () => {
  const [isDarkMode, toggleDarkMode] = useDarkToggler();

  return (
    <header className='flex items-center justify-between gap-x-2'>
      <h1 className='flex items-center justify-between gap-x-2 text-[1.625rem] font-bold text-[#222731] transition-colors duration-200 ease-in dark:text-[#fff]'>
        <a href='/'>devfinder</a>
      </h1>

      <button
        type='button'
        onClick={toggleDarkMode}
        className='flex items-center gap-x-4 text-[.8125rem] font-bold uppercase tracking-[.15rem] text-[#4B6A9B] transition-colors duration-200 ease-in hover:text-[#222731] dark:text-[#fff] dark:hover:text-[#90A4D4]'
      >
        <span>{isDarkMode ? 'Light' : 'Dark'}</span>
        {isDarkMode ? (
          <SunIcon className='transition-colors duration-200 ease-in fill-current' />
        ) : (
          <MoonIcon className='transition-colors duration-200 ease-in fill-current' />
        )}
      </button>
    </header>
  );
};
