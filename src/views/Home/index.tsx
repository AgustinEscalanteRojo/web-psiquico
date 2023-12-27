import { memo } from 'react';
import Header from '../../components/Header';
import Background from '../../components/Background';
import Footer from '../../components/Footer';
import { StyledContainer, Text, SubText, MapsContainer, Image } from './styles';
import Maps from '../../components/Maps';

const Home = () => {
  return (
    <>
      <Header />
      <StyledContainer>
        <Image src="/Logo.jpg" alt="Logo" />
        <Text>
          Bienvenido a Psiqui&co, tu centro de bienestar psicológico! Somos
          María Marín y Félix Valderrama, dos psicólogos apasionados
          comprometidos con la salud mental. En nuestro centro de psicología
          sanitaria, te brindamos un acompañamiento personalizado para abordar
          tus inquietudes.
        </Text>
        <SubText>
          Fundamos Psiqui&co en 2021, fusionando nuestra experiencia y
          especialización en psicología general sanitaria. Respaldados por un
          método que ha dejado a numerosos clientes satisfechos (puedes ver sus
          reseñas en "Doctoralia"), garantizamos la calidad y el mejor servicio
          psicológico que mereces
        </SubText>
        <SubText>
          Te invitamos a explorar nuestra web, donde encontrarás información
          detallada sobre cómo podemos ayudarte y nuestro enfoque en el proceso
          terapéutico. ¡Adelante, descubre que puedes encontrar de tu bienestar
          psicológico junto a nosotros!
        </SubText>
        <MapsContainer>
          <Maps />
        </MapsContainer>
      </StyledContainer>
      <Background />
      <Footer />
    </>
  );
};

export default memo(Home);
