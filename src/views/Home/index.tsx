import { memo } from 'react';
import Header from '../../components/Header';
import Background from '../../components/Background';
import Footer from '../../components/Footer';
import { StyledContainer, Text, SubText } from './styles';
import { MapsContainer } from './styles';
import Maps from '../../components/Maps';

const Home = () => {
  return (
    <>
      <Header />
      <StyledContainer>
        <Text>
          ¡Bienvenido a Psiquico, tu oasis de bienestar personal! Somos María
          Marín y Félix Valderrama, dos psicólogos apasionados comprometidos con
          tu salud mental. En nuestro rincón terapéutico, te brindamos un
          acompañamiento personalizado para abordar tus inquietudes.
        </Text>
        <SubText>
          Fundamos Psiquico en 2021, fusionando nuestra experiencia y
          especialización en áreas como terapia de pareja y tratamiento de
          adicciones. Respaldados por un método que ha dejado a numerosos
          clientes satisfechos (puedes ver sus reseñas en "Doctoralia"),
          garantizamos la calidad y el mejor servicio psicológico que mereces.
        </SubText>
        <SubText>
          Te invitamos a explorar nuestra web, donde encontrarás información
          detallada sobre cómo podemos ayudarte y nuestro enfoque en el proceso
          terapéutico. ¡Adelante, descubre el poder de tu bienestar junto a
          nosotros!
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
