import { Link } from 'react-router-dom';
import { menuItems } from './MenuItems';
import { MobileMenuProps } from './types';

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg">
      <div className="max-h-[85vh] overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.path} className="border-b border-gray-100 last:border-none">
            {item.isDropdownOnly ? (
              <div className="block px-6 py-4 text-gray-900 font-medium bg-gray-50">
                {item.title}
              </div>
            ) : (
              <Link
                to={item.path}
                onClick={onClose}
                className="block px-6 py-4 text-gray-900 hover:bg-gray-50 hover:text-[#912c30] 
                  transition-colors duration-300 font-medium"
              >
                {item.title}
              </Link>
            )}
            {item.submenu && (
              <div className="bg-gray-50 border-t border-gray-100">
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.path}
                    to={subItem.path}
                    onClick={onClose}
                    className="block px-8 py-3 text-gray-700 hover:text-[#912c30] 
                      transition-colors duration-300"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;