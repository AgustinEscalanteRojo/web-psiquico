import { FC, memo } from 'react';
import Header from '../../components/Header';
import Background from '../../components/Background';
import Footer from '../../components/Footer';
import { Container, Title, Text, ImageContainer, Image, TextImage } from './styles';

const Training: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>Formación</Title>
        <Text>
          A continuación le mostramos los servicios que disponemos para nuestros
          pacientes, en los que nos enfocamos en cada especialidad, según las
          circunstancias:
        </Text>
        <ImageContainer>
        </ImageContainer>
      </Container>
      <Background />
      <Footer />
    </>
  );
};

export default memo(Training);
