import React from 'react'
import { useSelector } from 'react-redux';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Cart() {
  const products = useSelector((state) => state.amazonReducer.products);
  //const [totalPrice, setTotalPrice]= useEffect(0)
 

  return (
    <div className='w-full bg-gray-100 p-4'>
      <div className='container mx-auto h-auto grid grid-cols-5 gap-8'>

        <div className='w-full h-full  bg-white px-4 col-span-4'>
          <div className='flex items-center justify-between border-b-[1px] border-b-gray-400 py-3'>
            <h2 className='text-3xl font-medium'>Shopping Cart</h2>
            <h4 className='text-xl font-semibold'>Subtitile</h4>
          </div>

          {/*products */}

          <div>
            {
              products.map((item) => (
                <div key={item.id} className='w-full border-b-[1px] border-b-gray-400 p-4 flex items-center gap-6'>

                  <div className='w-full flex items-center gap-6'>
                  <div className='w-1/5'>
                    <img className='w-full h-44 ' src={item.image} alt="Product Ing" />
                  </div>

                  <div className='w-3/5'>
                    <h2 className='font-semibold text-lg'>{item.title}</h2>
                    <p className='pr-10 text-sm'>{item.description.substring(0,100)}</p>
                    <p className='tex-base'>Unit Price{" "} <span className='font-semibold'>${item.price}</span></p>

                    <div className='bg-[#F0F2F2] flex justify-between items-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md'>
                      <p>Qty:</p>
                      <p className='cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300'>-</p>
                      <p>{item.quantity}</p>
                      <p className='cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300'>+</p>
                    </div>

                    <button className='bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300'>Delete Item</button>

                  </div>

                  <div>
                    <p className=' text-lg font-semibold'>${item.price * item.quantity}</p>

                  </div>


                  </div>

                </div>

              ))}
          </div>
          </div>
         
         <div className='w-full h-52 bg-white col-span-1 flex flex-col items-center justify-center p-4'>
             <div>
              <p className='flex gap-2 items-start text-sm' ><span><CheckCircleIcon className='bg-white text-green-500 rounded-full'/></span>{" "}
              Your Order is ready go to checkout button grab your orders...</p>

             </div>

             <div>
              <p className='font-semibold px-10 py-1 flex items-center justify-between'>
                Total: <span className='text-lg font-bold'>$1200</span></p>
             </div>

             <button className='bg-yellow-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-yellow-700 active:bg-yellow-900 duration-300'>Checkout</button>
         </div>


        </div>
      </div>


  )
}

export default Cart
