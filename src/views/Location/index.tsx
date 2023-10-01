import { FC, memo } from 'react';
import Header from '../../components/Header';
import Background from '../../components/Background';
import Footer from '../../components/Footer';
import Maps from '../../components/Maps';
import { Container, MapsContainer } from './styles';

const Location: FC = () => {
  return (
    <>
      <Background />
      <Header />
      <Container>
        <MapsContainer>
          <Maps />
        </MapsContainer>
      </Container>

      <Footer />
    </>
  );
};

export default memo(Location);
