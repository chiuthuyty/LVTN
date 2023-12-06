export default function Footer() {
  return (
    <footer className='py-16 bg-neutral-100'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <div className='lg:col-span-1 text-center'>
            <div>© 2023 Flyer. Tất cả các quyền được bảo lưu.</div>
          </div>
          <div className='lg:col-span-2 text-center'>
            <div>
              Quốc gia & Khu vực: Singapore | Indonesia | Thái Lan | Malaysia | Việt Nam | Philippines | Brazil | México
              | Colombia | Chile | Đài Loan
            </div>
          </div>
        </div>
        <div className='text-center text-sm mt-10'>
          <div>Công ty TNHH Flyer</div>
          <div className='mt-6'>Địa chỉ: 180 Đ. Cao Lỗ, Phường 4, Quận 8, Thành phố Hồ Chí Minh</div>
          <div className='md-2'>Chịu trách nhiệm Quản Lý Nội Dung: Chiu Thùy Tỷ liên hệ: 0933105264</div>
          <div className='md-2'>
            Mã số doanh nghiệp;: 12345678 do Sở kế hoạch & Đầu tư TP.Hồ Chí Minh cấp lần đầu: 10/10/2010
          </div>
          <div className='md-2'>©2010 - Bản quyền thuộc về Công ty TNHH Flyer</div>
        </div>
      </div>
    </footer>
  )
}
