import React, { FC, memo, useState, useRef } from 'react';
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
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current === null) {
      return;
    }
    emailjs
      .sendForm(
        'service_arn3n19',
        'template_xi12acs',
        form.current,
        'XbHZNCI3zGtdc8BAg',
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setIsFormSubmitted(false);
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

        {isFormSubmitted ? (
          <div>¡Formulario enviado correctamente!</div>
        ) : (
        <FormContainer ref={form} onSubmit={sendEmail}>
          <FormLabel>Nombre</FormLabel>
          <FormInput
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <FormLabel>Email</FormLabel>
          <FormInput
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FormLabel>Teléfono</FormLabel>
          <FormInput
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <FormLabel>Mensaje</FormLabel>
          <FormTextArea
            name="message"
            placeholder="Escribe tu mensaje aquí..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <FormButton type="submit" value="Send">Enviar</FormButton>
          {/* <FormButton onClick={resetForm}>Reiniciar formulario</FormButton> */}
        </FormContainer>

        )}

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
