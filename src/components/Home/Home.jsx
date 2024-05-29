import React from 'react'
import './Home.css'
import MultiItemCariusel from './MultiItemCariusel'
import RestaurantCart from '../Restaurant/RestaurantCart'

const restaurant = [1,1,1,1,1,1,1,1]
function Home() {
  return (
    <div className='pb-10'>
        <section className='banner -z-50 relative flex flex-col items-center'>
        
        <div className='w-[50vw] z-10 text-center'>
            <p className='text-2xl lg:text-6xl font-bold py-5'>Online Food Order</p>
            <p className='text-gray-300 text-xl lg:text-4xl'>Taste the Convenience: Food, Fast, and Delivered.</p>
        </div>

        <div className='cover absolute top-0 left-0 right-0 '> 


        </div>

        <div className='fadout'>


        </div>

        </section>
        <section className='p-10 lg:py-10 lg:px-20'>
          <p className='text-2xl font-semibold text-blue-400 py-3 pb-10'>Top Meals</p>
          <MultiItemCariusel/>
        </section>
        <section className='px-3 lg:px-20 pt-10'>
          <h1 className='text-2xl font-semibold text-blue-400 pb-8'>Order From Out Handpicked Favorites</h1>
          <div className='flex flex-wrap items-center justify-around gap-2'>
            {
              restaurant.map((item) => (
                <RestaurantCart />
              ))
            }
          </div>
        </section>
    </div>
  )
}

export default Home