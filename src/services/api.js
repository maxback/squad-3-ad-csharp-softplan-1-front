import axios from 'axios';
import { getToken} from './auth.js';

const api = axios.create({ 
    baseURL: 'https://app-squad-3-ad-csharp.herokuapp.com/api'
});

//baseURL: 'https://app-squad-3-ad-csharp.herokuapp.com/api'

//    baseURL: 'http://localhost:3000/'

//    baseURL: 'https://localhost:5001/api'

    //tive que colcoar um proxi no arquivo package.json e deixei de chamar  https://localhost:5001/api
    //para chamar http://localhost:3000/
    //como sugerido em https://pt.stackoverflow.com/questions/349565/requisi%C3%A7%C3%A3o-com-axios-e-react-bloqueada-por-pol%C3%ADtica-cors


//baseado em https://blog.rocketseat.com.br/reactjs-autenticacao/ :
api.interceptors.request.use(async config => {
    const token = getToken();
    if(token) {
        config.headers.Autorization = `Bearer ${token}`;
    }

    return config;
})

export default api;
