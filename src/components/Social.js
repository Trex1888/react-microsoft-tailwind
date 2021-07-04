import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

function Social() {
  return (
    <div className="flex items-center py-5 px-8 xl:pl-20">
      <div className="mr-5">
        <h4 className="semi-bold text-1xl md:text-3xl">Follow Microsoft</h4>
      </div>
      <div className="flex">
        <FaFacebookF className="mr-2 text-2xl md:text-3xl text-blue-900" />
        <FaTwitter className="mr-2 text-2xl md:text-3xl text-blue-700" />
        <FaLinkedin className="text-2xl md:text-3xl text-blue-900" />
      </div>
    </div>
  );
}

export default Social;
