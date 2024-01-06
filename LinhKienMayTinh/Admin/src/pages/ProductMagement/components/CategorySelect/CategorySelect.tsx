import { useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import path from 'src/constants/path'
import { QueryConfig } from 'src/hooks/useQueryConfig'
import { Category } from 'src/types/category.type'

interface Props {
  queryConfig: QueryConfig
  categories: Category[]
}

export default function CategorySelect({ queryConfig, categories }: Props) {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState(queryConfig.category)
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value
    setSelectedCategory(newCategory)
    navigate({
      pathname: path.productmagement,
      search: createSearchParams({
        ...queryConfig,
        category: newCategory
      }).toString()
    })
  }

  return (
    <div>
      <select
        id='category'
        className='bg-white border border-gray-300 rounded-md p-2 focus:outline-none'
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        {categories.map((categoryItem) => (
          <option key={categoryItem._id} value={categoryItem._id}>
            {categoryItem.name}
          </option>
        ))}
      </select>
    </div>
  )
}
