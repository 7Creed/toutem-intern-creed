const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">MyBrand</div>
      <ul className="flex gap-6 text-gray-700">
        <li>
          <a href="#" className="hover:text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
