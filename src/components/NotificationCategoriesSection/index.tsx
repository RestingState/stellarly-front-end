import { FC, useEffect, useState } from 'react';
// Styles
import {
  CategoryContainer,
  Content,
  Field,
  Fields,
  SubTitle,
  Title,
  Wrapper,
  Sign
} from './NotificationCategoriesSection.styles';
// API
import { getSatellites } from '../../api/satellites';
// Types
import { ISatelliteServer } from '../../types/satellite';

const NotificationCategoriesSection: FC = () => {
  const [satellites, setSatellites] = useState<ISatelliteServer[]>();

  useEffect(() => {
    (async () => {
      try {
        const response = await getSatellites();
        setSatellites(response.data);
      } catch (e: any) {
        console.log(e);
      }
    })();
  });

  const handleSatelliteClick = (satellite: ISatelliteServer) => {
    console.log(satellite.satname);
  };

  return (
    <Wrapper>
      <Title>Chosen notification categories:</Title>
      <Content>
        <CategoryContainer>
          <SubTitle>Satellites:</SubTitle>
          <Fields>
            {satellites?.map((satellite) => (
              <Field
                key={satellite.norad_id}
                onClick={() => handleSatelliteClick(satellite)}
              >
                <Sign className="fas fa-plus" />
                {satellite.satname}
              </Field>
            ))}
          </Fields>
        </CategoryContainer>
      </Content>
    </Wrapper>
  );
};

export default NotificationCategoriesSection;
