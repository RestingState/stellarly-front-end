import { FC } from 'react';
// Styles
import { CustomizedSlider } from './ZoomSlider.MUI.styles';
// Hooks
import { useActions } from '../../hooks/useAction';

const ZoomSlider: FC = () => {
  const { setZoom } = useActions();

  const handleChange = (event: any) => {
    setZoom(event.target.value);
  };

  return <CustomizedSlider min={1} max={15} step={0.05} onChange={handleChange} />;
};

export default ZoomSlider;
