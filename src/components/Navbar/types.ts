export interface MenuItem {
  title: string;
  path: string;
  isDropdownOnly?: boolean;
  submenu?: MenuItem[];
}

export interface DropdownProps {
  items: MenuItem[];
  isOpen: boolean;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}