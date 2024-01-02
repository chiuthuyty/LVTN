import React, { ChangeEvent, useEffect, useState } from 'react'
import axios from 'axios'


interface City {
  Id: string
  Name: string
  Districts: District[]
}

interface District {
  Id: string
  Name: string
  Wards: Ward[]
}

interface Ward {
  Id: string
  Name: string
}

const AddressSelector: React.FC = () => {
  const [cities, setCities] = useState<City[]>([])
  const [selectedCity, setSelectedCity] = useState<string>('')
  const [districts, setDistricts] = useState<District[]>([])
  const [selectedDistrict, setSelectedDistrict] = useState<string>('')
  const [wards, setWards] = useState<Ward[]>([])
  const [selectedWard, setSelectedWard] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<City[]>(
          'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json'
        )
        setCities(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const handleCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCityId = event.target.value
    setSelectedCity(selectedCityId)
    setSelectedDistrict('')
    setSelectedWard('')

    const selectedCityData = cities.find((city) => city.Id === selectedCityId)
    setDistricts(selectedCityData ? selectedCityData.Districts : [])
  }

  const handleDistrictChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedDistrictId = event.target.value
    setSelectedDistrict(selectedDistrictId)
    setSelectedWard('')

    const selectedDistrictData = districts.find((district) => district.Id === selectedDistrictId)
    setWards(selectedDistrictData ? selectedDistrictData.Wards : [])
  }

  const handleWardChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedWard(event.target.value)
  }

  return (
    <div className='flex flex-col'>
      <div className='mt-2 flex flex-wrap flex-col sm:flex-row'>
        <div className='sm:w-[100%] sm:pl-5'>
          <div className='flex justify-between'>
            <select
              className='h-10 w-[32%] rounded-sm border border-black/10 hover:border-orange cursor-pointer'
              value={selectedCity}
              onChange={handleCityChange}
            >
              <option value='' disabled>
                Chọn tỉnh thành
              </option>
              {cities.map((city) => (
                <option key={city.Id} value={city.Id}>
                  {city.Name}
                </option>
              ))}
            </select>

            <select
              className='h-10 w-[32%] rounded-sm border border-black/10 hover:border-orange cursor-pointer'
              value={selectedDistrict}
              onChange={handleDistrictChange}
              disabled={!selectedCity}
            >
              <option value=''>Chọn quận huyện</option>
              {districts.map((district) => (
                <option key={district.Id} value={district.Id}>
                  {district.Name}
                </option>
              ))}
            </select>

            <select
              className='h-10 w-[32%] rounded-sm border border-black/10 hover:border-orange cursor-pointer'
              value={selectedWard}
              onChange={handleWardChange}
              disabled={!selectedDistrict}
            >
              <option value=''>Chọn phường xã</option>
              {wards.map((ward) => (
                <option key={ward.Id} value={ward.Id}>
                  {ward.Name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddressSelector
