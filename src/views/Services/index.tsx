import { FC, memo } from 'react';
import Header from '../../components/Header';
import Background from '../../components/Background';
import Footer from '../../components/Footer';
import { Container, Title, Text, ImageContainer, Image, TextImage } from './styles';

const Services: FC = () => {
  const images = [
    { src: '/pareja.png', alt: 'pareja', description: 'Terapia de pareja' },
    {
      src: '/individual.png',
      alt: 'individual',
      description: 'Terapia individual',
    },
    { src: '/familia.png', alt: 'familia', description: 'Terapia de familia' },
    {
      src: '/adicciones.png',
      alt: 'adicciones',
      description: 'Terapia de adicciones',
    },
    { src: '/genero.png', alt: 'género', description: 'Violencia de género' },
    {
      src: '/parental.png',
      alt: 'parental',
      description: 'Violencia filio parental',
    },
    {
      src: '/juvenil.png',
      alt: 'juvenil',
      description: 'Violencia infanto juvenil',
    },
  ];

  return (
    <>
      <Header />
      <Container>
        <Title>Servicios</Title>
        <Text>
          A continuación le mostramos los servicios que disponemos para nuestros
          pacientes, en los que nos enfocamos en cada especialidad, según las
          circunstancias:
        </Text>
        <ImageContainer>
          {images.map((image, index) => (
            <div key={index}>
              <Image src={image.src} alt={image.alt} />
              <TextImage>{image.description}</TextImage>
            </div>
          ))}
        </ImageContainer>
      </Container>
      <Background />
      <Footer />
    </>
  );
};

export default memo(Services);
