import { useEffect, useState } from "react";

const Route = ({ pathname, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => setCurrentPath(window.location.pathname);

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener(onLocationChange);
    };
  }, []);

  return currentPath === pathname ? children : null;
};

export default Route;
