import { useState } from 'react';
import { Header } from './components/Header';
import { SearchForm } from './components/SeachForm';

const App = () => {
  return (
    <div className='w-full min-h-screen px-6 py-8 xl:flex xl:items-center dark:bg-[#141D2F] bg-[#F6F8FF]'>
      <div className='w-full mx-auto md:max-w-xl xl:max-w-3xl'>
        <Header />

        <SearchForm />
      </div>
    </div>
  );
};

export default App;
