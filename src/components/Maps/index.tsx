import React from 'react';
import { MapContainer, MapResponsive, MapIframe } from './styles'; // Asegúrate de ajustar la ruta correcta

function Maps() {
  return (
    <MapContainer>
      <h2>Ubicación</h2>
      <p>Avda. San Francisco Javier 9, planta 2, módulo 24, Sevilla</p>
      <MapResponsive>
        <MapIframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.3471404179145!2d-5.9762050848649055!3d37.381621979832914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126f580d12b267%3A0x1a574dfacc8752bc!2sAv.%20San%20Francisco%20Javier%2C%209%2C%2041018%20Sevilla!5e0!3m2!1ses!2ses!4v1677602133098!5m2!1ses!2ses"
          width="100%"
          height="0"
          allowFullScreen={true}
          loading="lazy"
        />
      </MapResponsive>
    </MapContainer>
  );
}

export default Maps;

