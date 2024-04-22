import axios from 'axios'
class UnplashApi {
  constructor(API_URL) {
    ;(this.API_URL = API_URL),
      (this.axiosInstance = axios.create({
        baseURL: this.API_URL,
      }))
  }
  async get() {
    const response = await this.axiosInstance.get()
    console.log(response)
    return response.data
  }
}
const imgageApi = new UnplashApi(`https://api-ninjas.com/randomimage`)
export default imgageApi
