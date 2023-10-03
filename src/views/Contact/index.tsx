import { FC, memo } from 'react';
import Header from '../../components/Header';
import Background from '../../components/Background';
import Footer from '../../components/Footer';
import { Container, ContactInfo, Icon } from './styles';

const Contact: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Contacto</h1>
        <h3>María Marín Domínguez</h3>
        <ContactInfo>
          <Icon>Email:</Icon> maria@psiquico.com
        </ContactInfo>
        <ContactInfo>
          <Icon>Teléfono:</Icon> 666 666 666
        </ContactInfo>
        <ContactInfo>
        <Icon>Linkedin:</Icon> enlace linkedin
        </ContactInfo>
        <ContactInfo>
        <Icon>Twitter:</Icon> @marinpsicologa
        </ContactInfo>

        <h3>Felix Valderrama Díaz</h3>
        <ContactInfo>
          <Icon>Email:</Icon> felix@psiquico.com
        </ContactInfo>
        <ContactInfo>
          <Icon>Teléfono:</Icon> 777 777 777 
        </ContactInfo>
        <ContactInfo>
          <Icon>Linkedin:</Icon> enlace linkedin
        </ContactInfo>
        <ContactInfo>
          <Icon>Twitter:</Icon> @felixvalderrama
        </ContactInfo>

        
      </Container>
      <Background />
      <Footer />
    </>
  );
};

export default memo(Contact);
