import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useDynamicTitle = (defaultTitle) => {
  const location = useLocation();

  const routeTitles = {
    "/": "Home • Mridul",
    "/about": "Who Am I?",
    "/projects": "Proof of Work",
    "/tech-stack": "My Arsenal",
    "/certifications": "Scrolls of Wisdom",
    "/social": "Connect with Me",
    "*": "—404 Not Found—",
  };

  useEffect(() => {
    document.title = routeTitles[location.pathname] || defaultTitle;
  }, [location.pathname, defaultTitle]);
};

export default useDynamicTitle;