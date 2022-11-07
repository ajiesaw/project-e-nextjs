import Navbar from "../../components/navbar"
import Counter from "../../components/counter"
import Color from "../../components/color"
import Size from "../../components/size"
import { product } from '../../data'
import Head from 'next/head'
import Link from "next/link";
import { useState } from "react";

export const getStaticProps = async ({ params }) => {
  const products = product.filter(p => p.id.toString() == params.id)
  return {
    props: {
      prod: products[0],
    },
  }
}

export const getStaticPaths = async () => {
  const paths = product.map(prod => ({
    params: { id: prod.id.toString() },
  }))
  return { paths, fallback: false }
}

const DetailProduct = ({ prod }) => {
const [color, setColor] = useState('blue')
const [size, setSize] = useState('5l')
  return (
    <div className="my-2 mx-3">

      <Head>
        <title>Shop. Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
    
      {/* Breadcrumbs */}
      <div className="flex flex-row px-2 py-4 space-x-2 items-center">
        <div className="cursor-pointer text-gray-900 hover:text-gray-600">
          <Link href="/">
            Home
          </Link>
        </div>
        <div className="cursor-default">
          /
        </div>
        <div className="truncate cursor-pointer capitalize text-gray-900 hover:text-gray-600">
        {prod.category}
        </div>
        <div className="cursor-default">
          /
        </div>
        <div className="truncate font-medium">
        {prod.title}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 px-2 py-4">
        {/* Gambar */}
        <div className="flex justify-center">
          <img
            src={prod.image}
            className="h-96 w-96 object-contain object-center"
          />
        </div>

        {/* Nama, Harga, Review, Deskripsi */}
        <div>
          <div className="">

            <div className="text-2xl font-medium py-2">
              {prod.title}
            </div>
            <div className="text-xl py-2">
              $ {prod.price}
            </div>
            <div class="flex items-center py-2">
              <svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <p class="ml-2 text-sm font-medium text-gray-900">{prod.rating.rate}</p>
              <p className="px-2">|</p>
              <p class="text-sm font-medium text-gray-900">{prod.rating.count} Reviews</p>
            </div>
            <div className="py-2">
              <p>
              {prod.description}
              </p>
            </div>

            <div className="border-b-2 py-2"></div>

            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              <Color />

              <Size />
            </div>

            <div className="flex py-6">
              <Counter />
              <button className="w-32 bg-gray-800 hover:bg-gray-600 active:bg-gray-900 rounded-md mx-4 text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailProduct