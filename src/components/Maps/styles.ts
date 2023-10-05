import styled from 'styled-components';

export const MapContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

export const MapResponsive = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: 56.25%; /* 16:9 aspect ratio for responsive iframe */
  height: 0;

  @media (max-width: 768px) {
    padding-bottom: 75%; /* Adjust the aspect ratio for smaller screens */
  }
`;

export const MapIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

