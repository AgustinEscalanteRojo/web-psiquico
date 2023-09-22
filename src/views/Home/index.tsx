import { FC, memo } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container } from './styles';

const Home: FC = () => {
  return (
    <>
      <Header />
      <Container>Psiqu&co</Container>
      <Footer />
    </>
  );
};

export default memo(Home);
