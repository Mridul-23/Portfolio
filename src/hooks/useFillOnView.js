import { useEffect, useRef, useState } from 'react';

const useFillOnView = () => {
  const ref = useRef();
  const [fill, setFill] = useState(false);

  useEffect(() => {
    let observer;
    if (ref.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setFill(true);
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(ref.current);
    }
    return () => observer && observer.disconnect();
  }, []);

  return [ref, fill];
};

export default useFillOnView;
