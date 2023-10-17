import styled from 'styled-components';

export const MapContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

export const MapTitle = styled.h2`
  margin-bottom: 0;
`;

export const MapText = styled.p`
  margin: 0; /* Ajusta el margen de los párrafos */
`;

export const MapResponsive = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: 56.25%;
  height: 0;
  margin-top: 10px;

  @media (max-width: 768px) {
    padding-bottom: 75%;
  }
`;

export const MapIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

