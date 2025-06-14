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
          Bienvenido y bienvenida a Psiqui&co, tu centro de bienestar
          psicológico. En nuestro centro de psicología sanitaria, te brindamos
          un acompañamiento profesional y una atención personalizada para
          abordar tus inquietudes. Estaremos encantados de acompañarte en tu
          proceso de crecimiento y bienestar emocional.
        </Text>
        <SubText>
          Desde 2021, en Psiqui&co hemos acompañado a muchas personas en su
          proceso de bienestar, trabajando desde enfoques psicoterapéuticos
          basados en la evidencia científica y con un trato cercano y humano.
          Nuestro compromiso es ofrecer una atención respetuosa, personalizada y
          efectiva. Puedes conocer las experiencias de quienes han confiado en
          nosotras a través de las reseñas en Doctoralia.
        </SubText>
        <SubText>
          En nuestra web encontrarás toda la información sobre nuestro enfoque
          terapéutico, áreas de trabajo y cómo podemos ayudarte. ¡Te invitamos a
          descubrir que sí es posible sentirte mejor y cuidar de tu salud mental
          con acompañamiento profesional!
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
