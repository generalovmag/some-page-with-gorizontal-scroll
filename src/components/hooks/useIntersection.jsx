import { useState, useEffect } from "react";

const useIntersection = (element) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const options = {
      threshold: 1
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },options
    );

    element.current && observer.observe(element.current);

    return () => observer.unobserve(element.current);
  }, []);

  return isVisible;
};

export default useIntersection;
