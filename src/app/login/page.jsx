'use client'
import axios from 'axios'
function LoginPage() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = {
      email: e.target[0].value,
      password: e.target[1].value,
    }
    const response = await axios
      .post('https://api.escuelajs.co/api/v1/auth/login', user)
      .then((response) => {
        if (response.status === 201) {
          document.cookie = `email=${user.email} token=${response.data.access_token}`
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <form
      className='flex flex-col justify-center items-center gap-4 p-4 h-96 '
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        className='bg-transparent border-b p-5 focus:outline-none text-white'
      />
      <input
        type='password'
        className='bg-transparent border-b p-5 focus:outline-none text-white'
      />

      <button>Submit</button>
    </form>
  )
}

export default LoginPage
