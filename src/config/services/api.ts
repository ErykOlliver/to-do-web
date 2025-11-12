
const API_BASE_URL = import.meta.env.API_BASE_URL || "http://localhost:3000"

export const API_ROUTES = {
    auth: {
        signin: '/auth/signin',
        signup: '/auth/signup',
    }
}

export const buildUrl = (path: string) => `${API_BASE_URL}${path}`;
