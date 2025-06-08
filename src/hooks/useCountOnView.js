import { useEffect, useRef, useState } from 'react';

const useCountOnView = (endValue) => {
  const ref = useRef();
  const [count, setCount] = useState(0);

  useEffect(() => {
    let observer;
    let started = false;

    if (ref.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !started) {
            started = true;
            let start = 0;
            const duration = 1500;
            const increment = endValue / (duration / 30);
            const timer = setInterval(() => {
              start += increment;
              if (start >= endValue) {
                clearInterval(timer);
                setCount(endValue);
              } else {
                setCount(Math.floor(start));
              }
            }, 30);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(ref.current);
    }

    return () => observer && observer.disconnect();
  }, [endValue]);

  return [ref, count];
};

export default useCountOnView;
