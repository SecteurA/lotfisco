export const Logo = ({ white = false }: { white?: boolean }) => {
  return (
    <img 
      src={white ? "https://i.postimg.cc/YCQx9kVn/Lotfisco-white.png" : "https://i.postimg.cc/YCQx9kVn/Lotfisco.png"}
      alt="Lotfisco Logo" 
      className="h-12 w-auto"
    />
  );
};

export default Logo;