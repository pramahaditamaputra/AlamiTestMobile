import createHttpClient from './httpClient';

const client = createHttpClient;

const sellerService = () => {
  return {
    addSeller: async (seller: object) => {
      const res = await client.post('/addSeller', seller);
      return res.data;
    },
  };
};

export default sellerService();
