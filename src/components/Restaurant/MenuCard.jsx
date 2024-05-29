import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

const ingredients = [
    {
        category:"Nuts & Seeds",
        ingredient:["Cashews"]
    },
    {
        category:"Protein",
        ingredient:["Chicken","Mutton"]
    }
  
]

function MenuCard() {

    const handleCheckBoxChange = (value) => {
            console.log(value);
    }


  return (
    <div>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <div className='lg:flex items-center justify-between'>
                    <div className='lg:flex items-center lg:gap-5'>
                        <img className='w-[7rem] h-[7rem] object-cover' 
                           src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                        <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                            <p className='font-semibold text-xl'>Burger</p>
                            <p>₹499</p>
                            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                               Adipisci pariatur quia hic amet placeat excepturi aspernatur consectetur ullam, impedit id.</p>
                        </div>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
               <form>
                    <div className='flex gap-5 flex-wrap'>
                        {
                            ingredients.map((item) => 
                                <div>
                                    <p>{item.category}</p>
                                    <FormGroup>
                                        {
                                            item.ingredient.map((item2) => 
                                            <FormControlLabel control={<Checkbox onChange={() => handleCheckBoxChange(item2)}/>} label={item2} />)
                                        }
                                    </FormGroup>
                                </div>
                            )
                        }
                    </div>

                    <div className='pt-5 '>
                        <Button variant='contained' disabled={false} type='submit'>{true ? "Add to Cart":"Out of Stock"}</Button>
                    </div>
               </form>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default MenuCard