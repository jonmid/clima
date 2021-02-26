import axios from 'axios';
import { BUSCAR } from '../types/climaType';

const APIKEY = 'f095fdbf29086604edb1642b008e2f50';

const busqueda = (data) => ({
  type: BUSCAR,
  data,
});

export const busquedaAsc = (nombre) => (dispatch) => {
  axios(`https://api.openweathermap.org/data/2.5/weather?q=${nombre}&units=metric&appid=${APIKEY}`).then((response) => dispatch(busqueda(response.data)));
};
