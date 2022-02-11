import { FC, useState, useEffect } from 'react';
// Components
import Header from './Header';
import SkyView from './SkyView';
import AboutUsSection from './AboutUsSection';
import ResourcesSection from './ResourcesSection';

const Home: FC = () => {
  const [activeHeader, setActiveHeader] = useState(false);

  useEffect(() => {
    const handleHeader = () => {
      if (window.scrollY > 1) {
        setActiveHeader(true);
      } else {
        setActiveHeader(false);
      }
    };

    window.addEventListener('scroll', handleHeader);
    return () => {
      window.addEventListener('scroll', handleHeader);
    };
  }, []);

  return (
    <>
      <Header active={activeHeader} fixed={true} />
      <SkyView />
      <AboutUsSection />
      <ResourcesSection />
    </>
  );
};

export default Home;
