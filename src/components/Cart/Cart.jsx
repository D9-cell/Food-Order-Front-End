import React from 'react'
import CartItem from './CartItem'
import { Divider} from '@mui/material'
import AddressCard from './AddressCard'
import { Button, Card } from '@mui/material';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';


const items = [1,1]


function Cart() {
    
    const createOrderUsingSelectedAddress=()=>{
        
    }

    const handleOpenAddressModel = () => {

    }

  return (
    <div>
        <main className='lg:flex justify-between'>
            <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                {items.map((item) => <CartItem/>)}
                <Divider/>
                <div className="billDetails px-5 text-sm ">
                    <p className='font-extralight py-5'>Bill Details</p>
                    <div className='flex justify-between text-gray-400 pb-2'>
                        <p>Item Total</p>
                        <p>₹599</p>
                    </div>
                    <div className='flex justify-between text-gray-400 pb-2'>
                        <p>Deliver Fees</p>
                        <p>₹19</p>
                    </div>
                    <div className='flex justify-between text-gray-400 pb-2'>
                        <p>Platform Fees</p>
                        <p>₹9</p>
                    </div>
                    <div className='flex justify-between text-gray-400 pb-3'>
                        <p>GST and Restauran Charges</p>
                        <p>₹99</p>
                    </div>
                    <Divider/>
                    <div className='flex justify-between text-gray-400 pt-3'>
                        <p>Total pay</p>
                        <p>₹99</p>
                    </div>
                </div>    
            </section>
            <Divider orientation='vertical' flexItem/>
            <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                <div>
                    <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivey Address</h1>
                    <div className='flex gap-5 flex-wrap justify-center'>
                        {[1,1,1,1].map((item) => 
                            <AddressCard item={item} showButton={true} handleSelectAddress={createOrderUsingSelectedAddress}/>
                        )}
                        <Card className="flex gap-5 w-64 p-5">
                            <AddLocationAltIcon/>
                            <div className='space-y-3 text-gray-500 '>
                                <h1 className='font-semibold text-lg text-white'>Add New Address</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quam, 
                                    unde ratione amet delectus assumenda maiores debitis pariatur tenetur facere vero deleniti, 
                                    necessitatibus magni eos ut illum perferendis qui. Minima.
                                </p>
                               <Button variant="outlined" fullWidth onClick={handleOpenAddressModel}> Add </Button>
                            </div>

                        </Card>
                    </div>
                </div>

            </section>

        </main>
    </div>
  )
}

export default Cart