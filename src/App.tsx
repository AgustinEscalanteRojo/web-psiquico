import React, { useEffect } from 'react';
import './App.css';
import Router from './containers/Router';

function App() {
  useEffect(() => {
    // Cambiar el título al montar el componente
    document.title = 'Psiqui&co';
    // Asegurarse de restablecer el título al desmontar el componente
    return () => {
      document.title = 'Título Original'; // Puedes restaurar el título original aquí
    };
  }, []);

  return <Router />;
}

export default App;


// import './App.css';
// import Router from './containers/Router'

// function App() {
//   return (
//     <Router />
//   );
// }

// export default App;