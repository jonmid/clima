import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { busquedaAsc } from './redux/actions/climaActions';
import './App.css';

const App = () => {
  const resultado = useSelector((state) => state.climaReducer); //Selecciona el reducer
  const dispatch = useDispatch(); // Inicializa el dispatch

  useEffect(() => {
    dispatch(busquedaAsc('pasto')); // Ejecuta la Action al inicializar el componente
    // eslint-disable-next-line
  }, []);

  const buscarClima = (e) => {
    e.preventDefault();
    dispatch(busquedaAsc(e.target.ciudad.value)); // Ejecuta la Action con el dispatch
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <form onSubmit={buscarClima}>
          <input type='text' name='ciudad' />
          &nbsp;
          <button>Buscar</button>
        </form>
        <br />
        <table border='1'>
          <thead>
            <tr>
              <td>Ciudad</td>
              <td>Sensacion Termica</td>
              <td>Humedad</td>
              <td>Presion</td>
              <td>Temperatura</td>
              <td>Max</td>
              <td>Min</td>
            </tr>
          </thead>
          <tbody>
            {resultado.map((item) => {
              return (
                <tr key={Math.random()}>
                  <td>{item.name}</td>
                  <td>{item.main.feels_like}</td>
                  <td>{item.main.humidity}</td>
                  <td>{item.main.pressure}</td>
                  <td>{item.main.temp}</td>
                  <td>{item.main.temp_max}</td>
                  <td>{item.main.temp_min}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
};

export default App;
