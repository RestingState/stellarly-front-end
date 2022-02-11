import { FC } from 'react';
// Styles
import {
  Wrapper,
  Title,
  Content,
  Text,
  PositionTypes
} from './ResourcesSection.styles';

const ResourcesSection: FC = () => {
  return (
    <Wrapper>
      <Title position={PositionTypes.right}>
        <span>Resources</span>
      </Title>
      <Content>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Content>
    </Wrapper>
  );
};

export default ResourcesSection;
