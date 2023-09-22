import { FC, memo } from 'react';
import Footer from '../../components/Footer';
import { Container } from './styles';

const Home: FC = () => {
  return (
    <>
      <Container>Psiqu&co</Container>
      <Footer />
    </>
  );
};

export default memo(Home);
