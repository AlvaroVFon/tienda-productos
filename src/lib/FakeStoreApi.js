import axios from 'axios'
class FakeStoreApi {
  constructor(API_URL) {
    this.API_URL = API_URL
    this.axiosInstance = axios.create({
      baseURL: this.API_URL,
    })
  }
  async getProducts() {
    const response = await this.axiosInstance.get('/products')

    return response.data
  }
  async getProductById(id) {
    const response = await this.axiosInstance
      .get(`/products/${id}`)
      .catch((error) => {
        return error
      })
    return response.data
  }
}

const api = new FakeStoreApi('https://fakestoreapi.com')
export default api
