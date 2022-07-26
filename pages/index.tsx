import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

// export const getServerSideProps = async () => {
//   const response = await fetch('http://localhost:3000/api/avo')
//   const { data }: TAPIAvoResponse = await response.json();

//   return {
//     props: {
//       productList: data,
//     },
//   }
// }

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/avo')
  const { data }: TAPIAvoResponse = await response.json();

  return {
    props: {
      productList: data,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  // const [productList, setProductList] = useState<TProduct[]>([])

  // useEffect(() => {
  //   window
  //     .fetch('/api/avo')
  //     .then((response) => response.json())
  //     .then(({ data }: TAPIAvoResponse) => {
  //       setProductList(data)
  //     })
  // }, [])

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
