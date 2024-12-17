export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactDetail {
  icon: JSX.Element;
  title: string;
  content: string | JSX.Element;
}