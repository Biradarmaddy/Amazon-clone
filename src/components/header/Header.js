import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { logo } from "../../assets/index"
import { allItems } from "../../constants"
import { Link } from 'react-router-dom';
import SignIn from '../../pages/SignIn';
import { useSelector } from 'react-redux';


function Header() {

    const [showAll, setshowAll] = useState(false)
    const products = useSelector((state)=>state.amazonReducer.products)
    
    

    return (
        <div className='w-full sticky top-0 z-50'>

            <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4'>



                {/* Image */}
               <Link to='/'>
                <div className='headerHover'>
                    <img className='w-24 mt-2' src={logo} alt="" />
                </div>
                </Link>



                {/* Delivery */}

                <div className='headerHover hidden mdl:inline-flex'>
                    <LocationOnIcon />
                    <p className='text-sm text-lightText font-light flex flex-col'>Delivery {" "}
                        <span className='tex-sm font-semibold mt-1 text-whiteText'>oman</span></p>
                </div>



                {/*  Search Bar*/}

                <div className='h-10 rounded-md hidden lgl:flex flex-grow relative'>
                    <span onClick={() => setshowAll(!showAll)} className='w-14 h-full bg-gray-200 hover:bg-gray-400 border-2 cursor-pointer duration-300 text-sm text-amazon_blue flex items-center justify-center rounded-tl-md rounded-bl-md'>
                        All <span></span><ArrowDropDownIcon /></span>

                    {
                        showAll && (
                            <div className='absolute w-56 h-80 top-10 left-0 overflow-x-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50  '>
                                <ul className='absoulte w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50'>
                                    {
                                        allItems.map((item) => (
                                            <li className='cursor-pointer' key={item._id}>{item.title}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )
                    }
                    <input className='h-full text-base text-amazon_blue flex-grow outline-none border-none' type="text" />

                    <span className='w-14 h-full bg-amazon_yellow hover:bg-red-400 border-2 cursor-pointer duration-300 text-sm text-amazon_blue flex items-center justify-center rounded-tr-md rounded-br-md'><SearchIcon /></span>
                </div>



            {/* Sign- in  */}
             <Link to='./SignIn'>
             <div className='flex flex-col items-center justify-center headerHover'>
                <p className='text-sm text-lightText font-light'>Sign In, Please</p>

                <p className='text-sm font-semibold mt-1 text-whiteText hidden mdl:inline-flex'>
                    Accounts & Lists {" "}
                    <span><ArrowDropDownIcon/></span></p>
             </div>
             </Link>



             {/* Orders*/}

             <div className='flex flex-col items-center justify-center headerHover'>
                <p className='text-sm font-semibold mt-1 text-whiteText'>Orders</p>
                <p>& Returns</p>
             </div>

             
             {/* Cart */}
             <Link to='./Cart'>
              <div className='flex items-start justify-center headerHover relative'>
                <ShoppingCartCheckoutIcon/>
                <p>Cart{" "} <span className='absolute text-xs -top-1 left-4 font-semibold p-1 h-4 bg-[#f4a857] text-amazon_blue rounded-full flex justify-center items-center '>{products.length > 0 ?products.length:0}</span></p>
              </div>
              </Link>




            </div>

        </div>
    )
}

export default Header
