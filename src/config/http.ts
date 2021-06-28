import Axios from 'axios';

const instance = Axios.create({
    baseURL: process.env.API_ORIGIN,
});

const Http = {
    instance,
};

export default Http;
