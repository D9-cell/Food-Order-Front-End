import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Button, Card } from '@mui/material';

function AddressCard({item,showButton,handleSelectAddress}) {

  return (
    <Card className="flex gap-5 w-64 p-5">
        <HomeIcon/>
        <div className='space-y-3 text-gray-500 '>
             <h1 className='font-semibold text-lg text-white'>Home</h1>
             <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quam, 
                unde ratione amet delectus assumenda maiores debitis pariatur tenetur facere vero deleniti, 
                necessitatibus magni eos ut illum perferendis qui. Minima.
             </p>
             {showButton && (<Button variant="outlined" fullWidth onClick={() => handleSelectAddress(item)}>Select</Button>)}
        </div>
    </Card>
  )
}

export default AddressCard