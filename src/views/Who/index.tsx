import { FC, memo } from 'react';
import Header from '../../components/Header';
import Background from '../../components/Background';
import Footer from '../../components/Footer';
import {
  Container as StyledContainer,
  BioContainer,
  Title,
  Subtitle1,
  StyledTypography,
} from './styles';
import { Grid } from '@mui/material';

const Who: FC = () => {
  return (
    <>
      <Background />
      <Header />
      <StyledContainer>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <BioContainer>
              <Title>María Marín Domínguez</Title>
              <img src="/Mariapsiquico.jpg" alt="María" />

              <div>
                <StyledTypography variant="subtitle1">
                  - Licenciada en Psicología
                </StyledTypography>
                <StyledTypography variant="subtitle1">
                  - Máster en Terapia Cognitivo Conductual
                </StyledTypography>
              </div>

              <div>
                <Subtitle1>Sobre mí</Subtitle1>
                <StyledTypography  variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </StyledTypography >
              </div>

              <div>
                <Subtitle1>Orientación Teórica</Subtitle1>
                <StyledTypography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </StyledTypography>
              </div>

              <div>
                <Subtitle1>Formación Complementaria</Subtitle1>
                <StyledTypography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </StyledTypography>
              </div>

              <div>
                <Subtitle1>Experiencia Profesional</Subtitle1>
                <StyledTypography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </StyledTypography>
              </div>

              <div>
                <Subtitle1>Otros datos de Interés</Subtitle1>
                <StyledTypography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </StyledTypography>
              </div>
            </BioContainer>
          </Grid>

          <Grid item xs={12} md={6}>
            <BioContainer>
              <Title>Felix Valderrama </Title>
              <img src="/Felix.jpg" alt="Felix" />

              <div>
                <StyledTypography variant="subtitle1">
                  - Licenciada en Psicología
                </StyledTypography>
                <StyledTypography variant="subtitle1">
                  - Máster en Terapia Cognitivo Conductual
                </StyledTypography>
              </div>

              <div>
                <Subtitle1>Sobre mí</Subtitle1>

                <StyledTypography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </StyledTypography>
              </div>

              <div>
                <Subtitle1>Orientación Teórica</Subtitle1>

                <StyledTypography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </StyledTypography>
              </div>

              <div>
                <Subtitle1>Formación Complementaria</Subtitle1>

                <StyledTypography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </StyledTypography>
              </div>

              <div>
                <Subtitle1>Experiencia Profesional</Subtitle1>

                <StyledTypography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </StyledTypography>
              </div>

              <div>
                <Subtitle1>Otros datos de Interés</Subtitle1>

                <StyledTypography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </StyledTypography>
              </div>
            </BioContainer>
          </Grid>
        </Grid>
      </StyledContainer>

      <Footer />
    </>
  );
};

export default memo(Who);
