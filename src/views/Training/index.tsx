import { FC, memo } from 'react';
import Header from '../../components/Header';
import Background from '../../components/Background';
import Footer from '../../components/Footer';
import {
  Container,
  Title,
  Text,
  ImageContainer,
  Image,
  TextImage,
} from './styles';

const Training: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>Formación</Title>
        <Text>
          Estamos emocionadas de compartir que se ha completado con éxito el
          primer taller práctico ofrecido por el centro de Psicología Psiqui&co
          y Serendipia.icu sobre "Intervención en conducta suicida y
          autolesiones en la consulta psicológica". Este curso, impartido
          magistralmente por el experto en intervención en conducta suicida,
          Daniel Jesús López Vega de @Serendipia.icu y papageno.es, ha sido una
          experiencia enriquecedora. Durante el programa, exploramos de manera
          exhaustiva estrategias y enfoques fundamentales para abordar la
          delicada temática de la conducta suicida y las autolesiones en el
          ámbito de la consulta psicológica. La información recibida fue
          excepcional y nos proporcionó herramientas prácticas y teóricas para
          comprender, evaluar y gestionar estas situaciones de manera más
          efectiva. La pasión y experiencia de Daniel Jesús López Vega se
          reflejaron claramente en su enseñanza, brindándonos una perspectiva
          valiosa y actualizada sobre la intervención en conducta suicida.
          Estamos agradecidas por la oportunidad de aprender de un profesional
          tan calificado. Este curso no solo cumplió, sino que superó nuestras
          expectativas. Y esperamos que a los próximos talleres acudamos
          profesionales tan cualificadas como María Marín Domínguez, Virginia
          Fernández Becerra, @NievesGutierrez, @reyescasaresordoñez,
          @RocíoBolloMarín, @EloPuentedura, @BelénPeñalbaGutierrez y Félix
          Valderrama Díaz ¡Esperamos aplicar lo aprendido en la práctica
          profesional y contribuir al bienestar de nuestr@s pacientes!
          hashtag#Psicología hashtag#IntervenciónSuicida hashtag#Autolesiones
          hashtag#AprendizajeContinuo hashtag#PsicologíaClínica
        </Text>
        <ImageContainer></ImageContainer>
      </Container>
      <Background />
      <Footer />
    </>
  );
};

export default memo(Training);
