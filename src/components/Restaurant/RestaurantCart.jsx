import React from 'react'
import { Card,Chip, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function RestaurantCart() {
  return (
   <Card className='m-2 w-[18rem]'>
    <div className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}>
        <img className='w-full h-[10rem] rounded-t-md  object-cover' 
             src = "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=600"
             alt=""/>
        <Chip 
            size="medium"
            className="absolute top-2 left-2"
            color={true ? "success":"error"}
            label={true ? "open" : "closed"}
    /> 
    </div>
    <div className='p-4 textPart lg:flex w-full justify-between'>
        <div className='space-y-1'>
            <p className='font-semibold text-lg'>Indian Fast Food Center</p>
            <p className='text-gray-500 text-sm'>Craving it all...Drive into our menu</p>
        </div>
        <div>
            <IconButton>
                {true ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
            </IconButton>
        </div>
    </div>
   </Card>

  )
}

export default RestaurantCart