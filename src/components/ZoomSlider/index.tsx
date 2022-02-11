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

  return <CustomizedSlider min={1} max={5} step={1} onChange={handleChange} />;
};

export default ZoomSlider;
