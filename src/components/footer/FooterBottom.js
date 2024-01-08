import React from 'react'

function FooterBottom() {
    return (

        <div className='w-full bg-amazon_light text-white '>

            <div className='w-full border-b-[1px] border-gray-600 py-10'>
                <div className='max-w-5xl mx-auto text-gray-300'>

                    <div className='w-full text-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 cursor-pointer'>
                        <div>
                            <h3 className='font-semibold mb-3 test-base text-white'>Know About Us </h3>
                            <ul className='flex flex-col gap-2 '>
                                <li>Careers</li>
                                <li>Blogs</li>
                                <li>About Amazon</li>
                                <li>Investor Relationship</li>
                                <li>Amazon devices</li>
                                <li>Services</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='font-semibold mb-3 test-base text-white'>Connect with Us </h3>
                            <ul className='flex flex-col gap-2 '>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='font-semibold mb-3 test-base text-white'> Make Money with Us </h3>
                            <ul className='flex flex-col gap-2 '>
                                <li>Sell on Amazon</li>
                                <li>Amazon Global Selling</li>
                                <li>About Amazon</li>
                                <li>Become an Affiliatep</li>
                                <li>Fulfilment by Amazon</li>
                                <li>Advertise Your Products</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='font-semibold mb-3 test-base text-white'> Let Us Help You </h3>
                            <ul className='flex flex-col gap-2 '>
                                <li>Your Account</li>
                                <li>Blogs</li>
                                <li>Returns Centre</li>
                                <li>100% Purchase Protection</li>
                                <li>Amazon App Download</li>
                                <li>Help</li>
                            </ul>
                        </div>
                    </div>


                </div>

            </div>



        </div>
    )
}

export default FooterBottom
