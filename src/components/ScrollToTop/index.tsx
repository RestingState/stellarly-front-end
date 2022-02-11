import { FC, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router';

interface ScrollToTopProps {
  children: ReactNode;
}

const ScrollToTop: FC = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
