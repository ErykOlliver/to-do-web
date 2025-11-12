
const API_BASE_URL = import.meta.env.BASE_URL

export const API_ROUTES = {
    auth: {
        signin: '/auth/signin',
        signup: '/auth/signup',
    }
}

export  const buildUrl = (path: string) => `${API_BASE_URL}${path}`;
