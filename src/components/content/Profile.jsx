import {
  LinkIcon,
  LocationIcon,
  OrganisationIcon,
  TwitterIcon,
} from "../../assets/SVGComponent";

export const Profile = ({ isDarkMode }) => {
  return (
    <>
      <div className="xl:ms-[160px]">
        <div className="md:grid md:grid-cols-2 md:items-center">
          <div
            className={` flex items-center gap-x-5 text-sm md:text-base font-normal mb-4 md:mb-5 ${
              isDarkMode ? "text-white" : "text-[#4B6A9B]"
            }`}
          >
            <LocationIcon className="fill-current" />
            <address>San Francisco</address>
          </div>

          <div
            className={`flex items-center gap-x-5 text-smmd:text-base font-normal mb-4 md:mb-5 ${
              isDarkMode ? "text-white" : "text-[#4B6A9B]"
            }`}
          >
            <LinkIcon className="fill-current" />
            <a
              href="https://github.blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.blog
            </a>
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 md:items-center">
          <div
            className={`flex items-center gap-x-5 text-sm mb-4 md:mb-0 md:text-base font-normal opacity-50 ${
              isDarkMode ? "text-white" : "text-[#4B6A9B]"
            }`}
          >
            <TwitterIcon className="fill-current" />
            <a href="#" target="_blank" rel="noopener noreferrer">
              Not Available
            </a>
          </div>

          <div
            className={`flex items-center gap-x-5 text-sm md:text-base font-normal ${
              isDarkMode ? "text-white" : "text-[#4B6A9B]"
            }`}
          >
            <OrganisationIcon className="fill-current" />
            <p>@github</p>
          </div>
        </div>
      </div>
    </>
  );
};
