const Route = ({ pathname, children }) => {
  return window.location.pathname === pathname ? children : null;
};

export default Route;
