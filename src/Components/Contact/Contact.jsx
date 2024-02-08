import React from 'react'
import contactpic from './contactimg.jpg'
function Contact() {
    return (
        <>
            {/* <div className='px-40'> */}
                <div className='lg:grid lg:grid-cols-2 gap-1 
                  sm:grid sm:grid-rows-2 
                  justify-center mx-50'>
                    <div className=' justify-center'>
                        <div className='px-5'>
                            <img src={contactpic} alt=""
                                className=' h-100% w-100%' />
                        </div>
                    </div>
                    <div className='grid grid-rows-2 '>
                        <h1 className='lg:text-6xl sm:text-lg  mb-4 font-bold px-8'>Get in Touch</h1>
                        <h3 className='mb-2 lg:text-justify sm:text-wrap font-semibold px-8'>Feel free to contact and express yourself.</h3>
                        <div className=' row-span-1 '>
                            <form action="" className=' rounded px-8 pt-0 pb-8 '>
                                <div>
                                    <label className='hidden text-justify'>Full Name</label><span class="text-red-500">*</span>
                                    <input type="text" placeholder='fullname..' required
                                        className='h-10 lg:w-72 sm:w-52 border-2 
                             p-2 mx-1 text-gray-700 text-sm font-bold mb-2' for="username" />
                                </div>
                                <div>
                                    <label className='hidden text-justify'>E-mail id</label><span class="text-red-500">*</span>
                                    <input type="text" placeholder='email..' required
                                        className='h-10 lg:w-72 sm:w-52 border-2 
                             p-2 mx-1 text-gray-700 text-sm font-bold mb-2' for="email" />
                                </div>
                                <div>
                                    <label className='hidden text-justify'>Message</label><span class="text-red-500">*</span>
                                    <textarea type="text" placeholder='message..' required
                                        className='h-40 lg:w-72 sm:w-52 border-2 whitespace-normal overflow-auto 
                             p-2 mx-1 text-gray-700 text-sm font-bold mb-2' for="message" />
                                </div>
                                <div className='px-3'>
                                    <button className=' bg-red-700 text-white 
                              rounded-md p-1 md:text-lg sm:text-sm 
                               hover:bg-red-400'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default Contact