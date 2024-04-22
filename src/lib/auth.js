import axios from 'axios'

class Auth {
  constructor(API_URL) {
    this.API_URL = API_URL
    this.axiosInstance = axios.create({
      baseURL: this.API_URL,
      headers: {
        Authorization: `Bearer {your acces token}}`,
      },
    })
  }
  async auth(
    user = {
      email: 'jhon@mail.com',
      password: 'changeme',
    }
  ) {
    const response = await this.axiosInstance.post(user)
    console.log(response)
    return response.data
  }
}
const auth = new Auth(`https://api.escuelajs.co/api/v1/auth/login`)
export default auth
