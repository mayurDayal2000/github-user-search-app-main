import { useContext } from 'react';
import {
  LinkIcon,
  LocationIcon,
  OrganisationIcon,
  TwitterIcon,
} from '../../assets/SVGComponent';
import { FormContext } from '../SeachForm';

export const Profile = () => {
  const { location, twitter_username, blog, company } = useContext(FormContext);

  return (
    <>
      <div className='xl:ms-[160px]'>
        <div className='md:grid md:grid-cols-2 md:items-center'>
          <div className='mb-4 flex items-center gap-x-5 text-sm font-normal text-[#4B6A9B] dark:text-white md:mb-5 md:text-base'>
            <LocationIcon className='fill-current' />
            <address>{location ?? 'Not Available'}</address>
          </div>

          <div
            className={`text-smmd:text-base mb-4 flex items-center gap-x-5 font-normal text-[#4B6A9B] dark:text-white md:mb-5 ${
              !twitter_username && 'opacity-50'
            }`}
          >
            <TwitterIcon className='fill-current' />
            {twitter_username ? (
              <a
                href={twitter_username}
                target='_blank'
                rel='noopener noreferrer'
              >
                {twitter_username}
              </a>
            ) : (
              <span>Not Available</span>
            )}
          </div>
        </div>

        <div className='md:grid md:grid-cols-2 md:items-center'>
          <div
            className={`mb-4 flex items-center gap-x-5 text-sm font-normal text-[#4B6A9B] dark:text-white md:mb-5 md:text-base ${
              !blog && 'opacity-50'
            }`}
          >
            <LinkIcon className='fill-current' />
            {blog ? (
              <a href={blog} target='_blank' rel='noopener noreferrer'>
                View
              </a>
            ) : (
              <span>Not Available</span>
            )}
          </div>

          <div
            className={`flex items-center gap-x-5 text-sm font-normal text-[#4B6A9B] dark:text-white md:mb-5 md:text-base ${
              !company && 'opacity-50'
            }`}
          >
            <OrganisationIcon className='fill-current' />
            <p>{company ?? 'Not Available'}</p>
          </div>
        </div>
      </div>
    </>
  );
};
