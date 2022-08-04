import axios from 'axios';

interface IHttpClient {
  baseUrl: string;
}

const httpClient = (params: IHttpClient) => {
  const {baseUrl} = params;

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  axiosInstance.interceptors.response.use(
    response => {
      return response;
    },
    async error => {
      throw error;
    },
  );
  return axiosInstance;
};

const client = httpClient({
  baseUrl: 'https://dev.dummy-api.alamisharia.co.id',
});

const createHttpClient = () => {
  return client;
};

export default createHttpClient();
