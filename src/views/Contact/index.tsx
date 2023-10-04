import { FC, memo } from 'react';
import Header from '../../components/Header';
import Background from '../../components/Background';
import Footer from '../../components/Footer';
import { RiTwitterXFill } from 'react-icons/ri';
import { BsFillTelephoneForwardFill, BsLinkedin } from 'react-icons/bs';
import { MdAttachEmail } from 'react-icons/md';
import { Container, ContactInfo, Icon } from './styles';

const Contact: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Contacto</h1>
        <h3>María Marín Domínguez</h3>
        <ContactInfo>
          <MdAttachEmail />
          Email: maria@psiquico.com
        </ContactInfo>
        <ContactInfo>
          <BsFillTelephoneForwardFill />
          Teléfono: 666 666 666
        </ContactInfo>
        <ContactInfo>
          <BsLinkedin /> Linkedin: enlace linkedin
        </ContactInfo>
        <ContactInfo>
          <RiTwitterXFill /> Twitter: @marinpsicologa
        </ContactInfo>

        <h3>Felix Valderrama Díaz</h3>
        <ContactInfo>
        <MdAttachEmail />
          Email: felix@psiquico.com</ContactInfo>
        <ContactInfo>
        <BsFillTelephoneForwardFill />
          Teléfono: 777 777 777</ContactInfo>
        <ContactInfo>
          <BsLinkedin />
          Linkedin: enlace linkedin
        </ContactInfo>
        <ContactInfo>
          <RiTwitterXFill />
          Twitter: @felixvalderrama
        </ContactInfo>
      </Container>
      <Background />
      <Footer />
    </>
  );
};

export default memo(Contact);
