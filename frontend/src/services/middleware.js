import Cookies from 'js-cookie';
export default {
    auth(to, from, next) {
        const token = Cookies.get('_admin_access_token');
        // console.log(token);
        if (!token) {
            next('login');
        }
        /* depois q ele validou o token, libera o acesso a rota */
        next();
    },

    redirectIfAuthenticated(to, from, next) {
        const token = Cookies.get('_admin_access_token');
        let n;
        if (token) {
            n = { name: 'admin' };
        }
        next(n);
    },
}