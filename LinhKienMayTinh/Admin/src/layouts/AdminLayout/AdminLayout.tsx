import { Outlet } from 'react-router-dom'
import AdminSideNav from 'src/components/AdminSideNav'

export default function AdminLayout() {
  return (
    <div className='bg-neutral-100 text-sm text-gray-600'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-12'>
          <div className='md:col-span-3 lg:col-span-2'>
            <AdminSideNav />
          </div>
          <div className='md:col-span-9 lq:col-span-10'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
