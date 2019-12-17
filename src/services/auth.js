export const TOKEN_LOGIN_CENTRAL_ERROS = "@centralerros-AuthToken";
export  const TOKEN_LOGIN_ID_USUARIO = "@centralerros-UsuarioIdUsuario";
export  const TOKEN_LOGIN_TOKEN_USUARIO = "@centralerros-UsuarioToken";

export  const isAutenticated = () => localStorage.getItem(TOKEN_LOGIN_CENTRAL_ERROS) != null;
export  const getToken = () => localStorage.getItem(TOKEN_LOGIN_CENTRAL_ERROS);
export  const getIdUsuario = () => isAutenticated() ?localStorage.getItem(TOKEN_LOGIN_ID_USUARIO) : -1;
export  const setIdUsuario = id => localStorage.setItem(TOKEN_LOGIN_ID_USUARIO, id);
export  const getTokenUsuario = () => localStorage.getItem(TOKEN_LOGIN_TOKEN_USUARIO);
export  const setTokenUsuario = token => localStorage.setItem(TOKEN_LOGIN_TOKEN_USUARIO, token);
export  const login = token => {
    localStorage.setItem(TOKEN_LOGIN_CENTRAL_ERROS, token);
};

export  const logout = () => {
    localStorage.removeItem(TOKEN_LOGIN_ID_USUARIO);
    localStorage.removeItem(TOKEN_LOGIN_CENTRAL_ERROS);
    localStorage.removeItem(TOKEN_LOGIN_TOKEN_USUARIO);
}

//baseado em https://blog.rocketseat.com.br/reactjs-autenticacao/