import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useDynamicTitle = ({
  defaultTitle
}) => {
  const location = useLocation();

  const routeTitles = {
    "/": "Home • Mridul",
    "/about": "Who Am I?",
    "/projects": "Proof of Work",
    "/tech-stack": "My Arsenal",
    "/certifications": "Scrolls of Wisdom",
    "/social": "Connect with Me",
    "/contact": "Ping me!",
    "*": "—404 Not Found—",
  };

  useEffect(() => {
    const currentPath = location.pathname;

    const matchedRoute = Object.keys(routeTitles).find((route) => {
      // Handle dynamic routes like /anime/details/:id
      if (route.includes(":")) {
        const dynamicPattern = new RegExp(
          `^${route.replace(/:\w+/g, "[^/]+")}$`
        );
        return dynamicPattern.test(currentPath);
      }
      return route === currentPath;
    });

    document.title = routeTitles[matchedRoute] || defaultTitle;
  }, [location.pathname]);
};

export default useDynamicTitle;