import { Link } from 'react-router-dom';
import { DropdownProps } from './types';

export const DropdownMenu = ({ items, isOpen }: DropdownProps) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-b-lg py-2">
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#912c30]"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default DropdownMenu;