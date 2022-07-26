import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import { GetStaticProps } from 'next'

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

export const getStaticPaths = async () => {
  const response = await fetch('http://localhost:3000/api/avo')
  const { data }: TAPIAvoResponse = await response.json();

  const paths = data.map(elm => ({
    params: {
      id: elm.id
    }
  }))
  return {
    paths,
    // incremental static generation
    // 404 para todo lo que no esta en el array paths
    fallback: false
  }
}

export const getStaticProps: GetStaticProps= async ({ params }) => {
  const id = params?.id as string;
  const response = await fetch(`http://localhost:3000/api/avo/${id}`)
  const data: TProduct = await response.json();

  // if (query.id) {
  //   fetch(`/api/avo/${query.id}`)
  //     .then((response) => response.json())
  //     .then((data: TProduct) => {
  //       setProduct(data)
  //     })
  // }

  return {
    props: {
      product: data,
    },
  }
}

const ProductPage = ({ product }: { product: TProduct}) => {
  // const { query } = useRouter()
  // const [product, setProduct] = useState<TProduct | null>(null)

  // useEffect(() => {
  //   if (query.id) {
  //     fetch(`/api/avo/${query.id}`)
  //       .then((response) => response.json())
  //       .then((data: TProduct) => {
  //         setProduct(data)
  //       })
  //   }
  // }, [query.id])

  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
