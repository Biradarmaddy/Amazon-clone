import React from 'react'

function FooterTop() {
  return (
    <div className='w-full bg-white py-6'>

        <div className='w-full  py-8'>
             <div className='w-64 mx-auto text-center flex flex-col gap-1'>
                <p>Personalized Recommendations</p>
                <button className='w-full bg-slate-600 rounded-md cursor-pointer font-semibold hover:bg-amber-800 accent-orange-950'>Sign In </button>
                <p className='text-xs mt-1'>New Customer?{" "} <span>Start here.</span></p>

             </div>
        </div>
      
    </div>
  )
}

export default FooterTop
