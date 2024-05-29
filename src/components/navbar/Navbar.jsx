import React from 'react'

import {IconButton,Avatar,Badge} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import * as colors from '@mui/material/colors';
import "./Navbar.css"



export const Navbar = () => {
    return (
        <div className='px-5 z-50 py-[.8rem] bg-[#3a78c5] lg:px-20 flex justify-between' >
            
            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                <li className='logo font-semibold text-gray-300 text-2xl'> 
                    Food Order 
                </li>
            </div>
          

            <div className='flex items-center space-x-2 lg:space-x-10'>
                
                <div className=''>
                     <IconButton>
                        <SearchIcon sx={{fontSize:"1.5rem", width: 27, height: 27 }}/>
                     </IconButton>
                </div>

                <div className=''>
                     <IconButton>
                     <Avatar sx={{ bgcolor: "white", color: colors.blue[400], width: 27, height: 27 }}>D</Avatar>

                     </IconButton>
                </div>

                <div className=''>
                     <IconButton>
                        <Badge color="secondary" badgeContent={3}>
                            <ShoppingCartIcon sx={{color:"white", width: 27, height: 27 }}/>
                        </Badge>
                     </IconButton>
                </div>
            </div>
            
        </div>
    )
}