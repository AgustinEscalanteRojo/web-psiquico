import { FC, memo } from 'react';
import { Container, Text } from './styles';

const Footer: FC = () => {
  return (
    <Container>
      <Text>© Psiqu&co</Text>
    </Container>
  );
};

export default memo(Footer);
