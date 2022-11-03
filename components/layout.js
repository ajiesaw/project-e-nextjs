import { useState } from "react";
import Link from "next/link";

const Layout = () => {
  const [lang, setLang] = useState(false);
  const [cur, setCur] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <>
    <div className="my-2 mx-3">
  
      {/*Bar*/}
      <div className="flex flex-row justify-between border-b-2 pb-2">
        <div className="flex flex-row divide-x">
          <div>
            <button onClick={()=>{setLang(!lang); setCur(false); setMenu(false)}} class="px-2 text-gray-900 peer focus:text-gray-500 hover:text-gray-500 transition-all duration-200">
              Language
            </button>
            {lang &&
              <div className="absolute bg-white left-2 top-10 shadow-xl rounded-lg">
                <ul className='py-3 px-3 flex flex-col'>
                  <li onClick={()=>setLang(false)} className='cursor-pointer p-1 rounded-md text-gray-900 hover:text-gray-500 text-center'>English</li>
                  <li onClick={()=>setLang(false)} className='cursor-pointer p-1 rounded-md text-gray-900 hover:text-gray-500 text-center'>Indonesia</li>
                </ul>
              </div>
            }
          </div>
          <div>
            <button onClick={()=>{setCur(!cur); setLang(false); setMenu(false)}} class="px-2 text-gray-900 peer focus:text-gray-500 hover:text-gray-500 transition-all duration-200">
              Currency
            </button>
            {cur &&
              <div className="absolute bg-white left-28 top-10 shadow-xl rounded-lg">
                <ul className='py-3 px-3 flex flex-col'>
                  <li onClick={()=>setCur(false)} className='cursor-pointer p-1 rounded-md text-gray-900 hover:text-gray-500 text-center'>USD</li>
                  <li onClick={()=>setCur(false)} className='cursor-pointer p-1 rounded-md text-gray-900 hover:text-gray-500 text-center'>IDR</li>
                </ul>
              </div>
            }
          </div>
          <div className="px-2">
            Call Us (123)4567890
          </div>
        </div>
        <div className="hidden md:flex md:justify-end md:px-2">
          Free delivery every Monday and thursday.
        </div>
      </div>

      {/*Navbar*/}
      <div className="flex flex-row justify-between border-b-2 py-4">
        <div className="cursor-pointer text-3xl font-black px-2">
          <Link href="/">
            Shop.
          </Link>
        </div>
        <div className="hidden self-center md:flex md:space-x-4 lg:flex-row lg:justify-center lg:space-x-8">
          <div className="cursor-pointer text-gray-900 hover:text-gray-500">
            <Link href="/">
              Home
            </Link>
          </div>
          <div className="cursor-pointer text-gray-900 hover:text-gray-500">Shop</div>
          <div className="cursor-pointer text-gray-900 hover:text-gray-500">Collection</div>
          <div className="cursor-pointer text-gray-900 hover:text-gray-500">Pages</div>
          <div className="cursor-pointer text-gray-900 hover:text-gray-500">Blog</div>
          <div className="cursor-pointer text-gray-900 hover:text-gray-500">About</div>
          <div className="cursor-pointer text-gray-900 hover:text-gray-500">Contact</div>
        </div>
        <div className="flex justify-end self-center space-x-4 lg:space-x-8 px-2">
        <div className="md:hidden relative">
            <button onClick={()=>{setMenu(!menu); setLang(false); setCur(false)}} className="px-2 text-gray-900 peer focus:text-gray-500 hover:text-gray-500 transition-all duration-200">
              Menu
            </button>
            {menu &&
              <div className="absolute bg-white -right-6 top-5 shadow-xl rounded-lg">
                <ul className='py-3 px-3 flex flex-col'>
                  <li onClick={()=>setMenu(false)} className='cursor-pointer p-1 rounded-md text-gray-900 hover:text-gray-500 text-center'>
                    <Link href="/">
                      Home
                    </Link>
                  </li>
                  <li onClick={()=>setMenu(false)} className='cursor-pointer p-1 rounded-md text-gray-900 hover:text-gray-500 text-center'>Shop</li>
                  <li onClick={()=>setMenu(false)} className='cursor-pointer p-1 rounded-md text-gray-900 hover:text-gray-500 text-center'>Collection</li>
                  <li onClick={()=>setMenu(false)} className='cursor-pointer p-1 rounded-md text-gray-900 hover:text-gray-500 text-center'>Pages</li>
                  <li onClick={()=>setMenu(false)} className='cursor-pointer p-1 rounded-md text-gray-900 hover:text-gray-500 text-center'>Blog</li>
                  <li onClick={()=>setMenu(false)} className='cursor-pointer p-1 rounded-md text-gray-900 hover:text-gray-500 text-center'>About</li>
                  <li onClick={()=>setMenu(false)} className='cursor-pointer p-1 rounded-md text-gray-900 hover:text-gray-500 text-center'>Contact</li>
                </ul>
              </div>
            }
          </div>
          <div className="cursor-pointer text-gray-900 hover:text-gray-500">Search</div>
          <div className="cursor-pointer text-gray-900 hover:text-gray-500">Cart</div>
          <div className="cursor-pointer text-gray-900 hover:text-gray-500">Account</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Layout
