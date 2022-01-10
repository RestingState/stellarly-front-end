import React, { useState } from "react";
// Styles
import {
  Wrapper,
  Content,
  CloseBtn,
  Property,
  MultiProperty,
} from "./SkyViewInfoMenu.styles";
// Components
import InputSection from "../InputSection";

const SkyViewInfoMenu = ({ active, closeSettingsMenu }) => {
  // const [data, setData] = useState({ x: 0, y: 0, latitude: 0, longitude: 0 });

  // const handleData = () => {};

  return (
    <Wrapper active={active}>
      <CloseBtn className="fas fa-times" onClick={closeSettingsMenu} />
      <Content>
        {/* <MultiProperty>
          <h3>Coordinates</h3>
          <InputSection title='x:' value={data.x} onChange={handleData} />
          <InputSection title='y:' value={data.y} onChange={handleData} />
        </MultiProperty>
        <Property>
          <InputSection
            title='Latitude:'
            value={data.latitude}
            onChange={handleData}
          />
        </Property>
        <Property>
          <InputSection
            title='Longitude:'
            value={data.latitude}
            onChange={handleData}
          />
        </Property> */}
      </Content>
    </Wrapper>
  );
};

export default SkyViewInfoMenu;
