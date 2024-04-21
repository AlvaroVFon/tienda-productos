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
  async getProductsByName(names) {
    const response = await this.axiosInstance
      .get(`/products`)
      .then((response) => {
        return response.data.filter((product) =>
          product.title.toLowerCase().includes(names.toLowerCase())
        )
      })
      .catch((error) => {
        return error
      })
    console.log(response)
    return response
  }
}

const api = new FakeStoreApi('https://api.escuelajs.co/api/v1/')
export default api
