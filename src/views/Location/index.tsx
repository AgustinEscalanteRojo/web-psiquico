import { FC, memo } from 'react';
import Header from '../../components/Header';
import Background from '../../components/Background';
import Footer from '../../components/Footer';
import { Container } from './styles';

const Location: FC = () => {
  return (
    <>
      <Header />
      <Container></Container>
      <Background />
      <Footer />
    </>
  );
};

export default memo(Location);