import {
  LinkIcon,
  LocationIcon,
  OrganisationIcon,
  TwitterIcon,
} from '../../assets/SVGComponent';

export const Profile = () => {
  return (
    <>
      <div className='xl:ms-[160px]'>
        <div className='md:grid md:grid-cols-2 md:items-center'>
          <div className='mb-4 flex items-center gap-x-5 text-sm font-normal text-[#4B6A9B] dark:text-white md:mb-5 md:text-base'>
            <LocationIcon className='fill-current' />
            <address>San Francisco</address>
          </div>

          <div className='text-smmd:text-base mb-4 flex items-center gap-x-5 font-normal text-[#4B6A9B] dark:text-white md:mb-5'>
            <LinkIcon className='fill-current' />
            <a
              href='https://github.blog'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://github.blog
            </a>
          </div>
        </div>

        <div className='md:grid md:grid-cols-2 md:items-center'>
          <div className='mb-4 flex items-center gap-x-5 text-sm font-normal text-[#4B6A9B] dark:text-white md:mb-5 md:text-base'>
            <TwitterIcon className='fill-current' />
            <a href='#' target='_blank' rel='noopener noreferrer'>
              Not Available
            </a>
          </div>

          <div className='flex items-center gap-x-5 text-sm font-normal text-[#4B6A9B] dark:text-white md:mb-5 md:text-base'>
            <OrganisationIcon className='fill-current' />
            <p>@github</p>
          </div>
        </div>
      </div>
    </>
  );
};
