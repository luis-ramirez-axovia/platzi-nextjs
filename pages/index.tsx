import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const apiAvo = 'api/avo'

const HomePage = () => {
  const [products, setProducts] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch(apiAvo)
      .then((response) => response.json())
      .then(({data}) => setProducts(data))
  }, [])

  return (
    <div>
      <div>Platzi and Next.js!</div>
      {products.map(prod => (
        <div>{prod.name}</div>
      ))}
    </div>
  )
}

export default HomePage
