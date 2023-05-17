import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const IconPanel = () => {
  return (
    <div className="flex justify-center items-center border-2 rounded-lg p-4 space-x-4">
      <FaFacebook size={32} />
      <FaTwitter size={32} />
      <FaInstagram size={32} />
    </div>
  );
};

export default IconPanel;
