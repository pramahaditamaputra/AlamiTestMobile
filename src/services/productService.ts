import createHttpClient from './httpClient';

const client = createHttpClient;

const productService = () => {
  return {
    getProductBySellerId: async (sellerId: number) => {
      const res = await client.get(
        `/listProductBySellerId?seller_id=${sellerId}`,
      );
      return res.data;
    },
    getProductBySearch: async (keyword: string) => {
      const res = await client.get(
        `/searchProductByKeyword?keyword=${keyword}`,
      );
      return res.data;
    },
    addProduct: async (product: object) => {
      const res = await client.post('/addProduct', product);
      return res.data;
    },
  };
};

export default productService();
