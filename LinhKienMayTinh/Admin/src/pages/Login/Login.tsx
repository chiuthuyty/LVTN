import { useNavigate } from 'react-router-dom'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import path from 'src/constants/path'

export default function Login() {
  const navigate = useNavigate()
  const onSumbit = () => {
    navigate(path.dashboard)
  }
  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' noValidate>
              <div className='text-2xl'>Đăng nhập</div>
              <Input name='email' type='email' className='mt-8' placeholder='Email' />
              <Input name='password' type='password' className='mt-2' placeholder='Password' autoComplete='on' />
              <div className='mt-3'>
                <Button
                  type='submit'
                  onClick={onSumbit}
                  className='w-full  py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600 flex justify-center items-center'
                >
                  Đăng nhập
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
