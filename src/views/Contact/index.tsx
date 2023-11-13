import { FC, memo, useState, useRef } from 'react';
import Header from '../../components/Header';
import Background from '../../components/Background';
import Footer from '../../components/Footer';
import emailjs from '@emailjs/browser';

import {
  Container,
  Title,
  FormContainer,
  FormInput,
  FormTextArea,
  FormButton,
  MapsContainer,
  FormLabel,
  Text,
} from './styles';
import Maps from '../../components/Maps';

const Contact: FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Función para manejar el envío del formulario

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    // Crear un formulario HTML
    const form = e.currentTarget.querySelector('form');

    // Enviar el formulario utilizando emailjs
    if (form) {
      emailjs
        .sendForm(
          'service_arn3n19',
          'template_xi12acs',
          form,
          'XbHZNCI3zGtdc8BAg',
        )
        .then((response) => {
          console.log('Formulario enviado con éxito:', response);
        })
        .catch((error) => {
          console.error('Error al enviar el formulario:', error);
        });
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Title>Contacto</Title>
        <Text>
          Si quieres pedir una cita o deseas más información, puedes ponerte en
          contacto rellenando el siguiente formulario:
        </Text>
        <FormContainer onSubmit={handleSubmit}>
          <FormLabel>Nombre</FormLabel>
          <FormInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <FormLabel>Teléfono</FormLabel>
          <FormInput
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <FormLabel>Email</FormLabel>
          <FormInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FormLabel>Comentarios</FormLabel>
          <FormTextArea
            placeholder="Escribe tu mensaje aquí..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <FormButton type="submit">Enviar</FormButton>
        </FormContainer>
        <MapsContainer>
          <Maps />
        </MapsContainer>
      </Container>
      <Background />
      <Footer />
    </>
  );
};

export default memo(Contact);
