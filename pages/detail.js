import Link from "next/link";
import Layout from "../components/layout";
import Head from 'next/head'

export default function Detail() {

  return (
    <div className="my-2 mx-3">

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout />
    
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
        <div className="cursor-pointer capitalize text-gray-900 hover:text-gray-600">
        men's clothing
        </div>
        <div className="cursor-default">
          /
        </div>
        <div className="font-medium">
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 px-2 py-4">
        {/* Gambar */}
        <div className="flex justify-center">
          <img
            src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
            className="w-1/2 py-2"
          />
        </div>

        {/* Nama, Harga, Review, Deskripsi */}
        <div>
          <div className="">

            <div className="text-2xl font-medium py-2">
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </div>
            <div className="text-xl py-2">
              $ 109.95
            </div>
            <div class="flex items-center py-2">
              <svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <p class="ml-2 text-sm font-medium text-gray-900">3.9</p>
              <p className="px-2">|</p>
              <p class="text-sm font-medium text-gray-900">120 Reviews</p>
            </div>
            <div className="py-2">
              <p>
              Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
              </p>
            </div>

            <div className="border-b-2 py-2"></div>

            <div className="grid grid-cols-2 pt-4">
              <div>
                <p className="py-2">Color</p>
                  <div className="flex space-x-3">
                    <button className="w-7 h-7 bg-blue-900 rounded-full ring-gray-400 hover:ring-2 hover:ring-offset-1 focus:ring-2 focus:ring-offset-1"></button>
                    <button className="w-7 h-7 bg-red-900 rounded-full ring-gray-400 hover:ring-2 hover:ring-offset-1 focus:ring-2 focus:ring-offset-1"></button>
                    <button className="w-7 h-7 bg-green-900 rounded-full ring-gray-400 hover:ring-2 hover:ring-offset-1 focus:ring-2 focus:ring-offset-1"></button>
                    <button className="w-7 h-7 bg-yellow-900 rounded-full ring-gray-400 hover:ring-2 hover:ring-offset-1 focus:ring-2 focus:ring-offset-1"></button>
                    <button className="w-7 h-7 bg-purple-900 rounded-full ring-gray-400 hover:ring-2 hover:ring-offset-1 focus:ring-2 focus:ring-offset-1"></button>
                  </div>
              </div>
              <div>
                <p className="py-2">Size</p>
                  <div className="flex space-x-3">
                    <button className="w-7 h-7 bg-gray-100 rounded-md ring-gray-400 text-sm hover:ring-2 hover:ring-offset-1 focus:ring-2 focus:ring-offset-1">5L</button>
                    <button className="w-7 h-7 bg-gray-100 rounded-md ring-gray-400 text-sm hover:ring-2 hover:ring-offset-1 focus:ring-2 focus:ring-offset-1">8L</button>
                    <button className="w-7 h-7 bg-gray-100 rounded-md ring-gray-400 text-sm hover:ring-2 hover:ring-offset-1 focus:ring-2 focus:ring-offset-1">10L</button>
                    <button className="w-7 h-7 bg-gray-100 rounded-md ring-gray-400 text-sm hover:ring-2 hover:ring-offset-1 focus:ring-2 focus:ring-offset-1">13L</button>
                    <button className="w-7 h-7 bg-gray-100 rounded-md ring-gray-400 text-sm hover:ring-2 hover:ring-offset-1 focus:ring-2 focus:ring-offset-1">15L</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
