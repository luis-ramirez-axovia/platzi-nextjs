import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const apiAvo = 'api/avo'

const HomeDetailsPage = () => {
  const [product, setProduct] = useState<TProduct>();
  const { query: { id } } = useRouter();

  useEffect(() => {
    window
      .fetch(`${apiAvo}/${id}`)
      .then((response) => response.json() )
      .then((prod) => setProduct(prod))
  }, [])

  return (
    <div>
      <Navbar />
      <div>Producto by ID:</div>
      <div>{product?.name}</div>
    </div>
  )
}

export default HomeDetailsPage
