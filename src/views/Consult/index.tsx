import { FC, memo } from 'react';
import Header from '../../components/Header';
import Background from '../../components/Background';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { Container, Title, Text, ImageContainer, Image } from './styles';


const Consult: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>Consulta de Psicología</Title>
        <Text>
          Centro psicológico autorizado por la Consejería de Salud de la Junta
          de Andalucía con el nº de Registro 60556 <br />
          Avda. San Francisco Javier 9, planta 2, módulo 24, Sevilla
          <br />
          <Link to="/Contact">(Solicitar cita previa)</Link>
        </Text>
        <ImageContainer>
          <Image src="/Entrada.jpg" alt="Entrada" />
          <Image src="/Entrada2.jpg" alt="Entrada2" />
          <Image src="/Recepcion.jpg" alt="Recepcion1" />
          <Image src="/Cafe.jpg" alt="Cafe" />
          <Image src="/Sala1-1.jpg" alt="Sala1-1" />
          <Image src="/Sala1-2.jpg" alt="Sala1-2" />
          <Image src="/Sala1-3.jpg" alt="Sala1-3" />
          <Image src="/Sala1-4.jpg" alt="Sala1-4" />
          <Image src="/Pasillo1.jpg" alt="Pasillo1" />
          <Image src="/Pasillo2.jpg" alt="Pasillo2" />
          <Image src="/Sala2-1.jpg" alt="Sala2-1" />
          <Image src="/Sala2-2.jpg" alt="Sala2-2" />
        </ImageContainer>
      </Container>
      <Background />
      <Footer />
    </>
  );
};

export default memo(Consult);
