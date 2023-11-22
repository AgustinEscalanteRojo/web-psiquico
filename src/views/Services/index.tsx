import { FC, memo } from 'react';
import Header from '../../components/Header';
import Background from '../../components/Background';
import Footer from '../../components/Footer';
import { Container, Title, Text, ImageContainer, Image } from './styles';

const Services: FC = () => {
  const images = [
    { src: '/pareja.jpeg', alt: 'pareja', description: 'Terapia de pareja' },
    {
      src: '/individual.jpeg',
      alt: 'individual',
      description: 'Terapia individual',
    },
    { src: '/familia.jpeg', alt: 'familia', description: 'Terapia de familia' },
    {
      src: '/adicciones.jpeg',
      alt: 'adicciones',
      description: 'Terapia de adicciones',
    },
    { src: '/genero.jpeg', alt: 'género', description: 'Violencia de género' },
    {
      src: '/parental.png',
      alt: 'parental',
      description: 'Violencia filio parental',
    },
    {
      src: '/juvenil.jpeg',
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
          pacientes:
        </Text>
        <ImageContainer>
          {images.map((image, index) => (
            <div key={index}>
              <Image src={image.src} alt={image.alt} />
              <Text>{image.description}</Text>
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
