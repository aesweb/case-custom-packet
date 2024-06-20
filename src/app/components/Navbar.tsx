import { FaRegUser } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

function Navbar() {
  return (
    <header className="flex justify-center gap-24 items-center container mx-auto py-6 text-md text-gray-700">
      <div>
        <img src="logo.svg" alt="" />
      </div>
      <ul className="flex gap-10">
        <li>Urunler</li>
        <li>Biz Kimiz?</li>
        <li>Bagis Kulturu</li>
        <li>Regl Testi! </li>
        <li>Kendi Paketini Olustur</li>
      </ul>

      <div className="gap-6 flex pl-16">
        <FiShoppingCart size={20} />
        <FaRegUser size={20} />
      </div>
    </header>
  );
}

export default Navbar;
