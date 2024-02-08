import React from 'react'
import myself from './myself.jpg'
function Resume() {
    return (
        <>
            <div className='lg:grid lg:grid-cols-3 shadow-xl bg-white 
                         sm:grid  h-fit
                         text-gray-800 text-pretty'>
                <div className=' sm:row-span-1 lg:col-span-1 bg-blue-100 pb-10 '>
                    <div className=''>
                        <div className='p-4 justify-center mt-5 ml-10'>
                            <img src={myself} alt=""
                                className='lg:h-40 lg:w-36 sm:h-16 w-16 rounded-full' />
                        </div>
                    </div>
                    <div className='ml-4 py-1 mt-8'>
                        <div className='flex gap-2 px-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                            </svg>Kolkata , India
                        </div>
                        <div className='flex gap-2 px-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                            </svg> tiwarisunaina333@gmail.com
                        </div>
                        <div className='flex gap-2 px-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg> 8240926727
                        </div>
                    </div>
                    <div className='ml-4 mt-5 px-4'>
                        <div className='mt-2'>
                            <h1 className='uppercase font-bold text-lg'>Education</h1>
                        </div>
                        <div className='mt-2'>
                            <h1 className='font-semibold text-md'>Bachelor of Technology(2020-2024)</h1>
                            <p className='text-sm'>RCC Institute of Information Technology,Kolkata</p>
                            <p className='text-xs'>9.22 CGPA(till 6th Semester)</p>
                        </div>
                        <div className='mt-2'>
                            <h1 className='font-semibold text-md'>Higher Secondary(2018-2019)</h1>
                            <p className='text-sm'>Saltlake Shiksha Niketan,Kolkata</p>
                            <p className='text-xs'>78.6%</p>
                        </div>
                        <div className='mt-2'>
                            <h1 className='font-semibold text-md'>High School(2017 pass-out)</h1>
                            <p className='text-sm'>Vaishno Devi Academy(H.S.)</p>
                            <p className='text-xs'>89.4%</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-2 px-5'>
                    <div className=' uppercase lg:text-4xl sm:text-xl font-bold'>
                        <h1 className=' text-justify py-5 pl-2'>Sunaina Tiwari</h1>
                    </div>
                    <div>
                        <hr className=' h-0.5 my-1 border-1 bg-gray-500' />
                    </div>
                    <div className=' text-pretty'>
                        <h3 className=' sm:text-wrap lg:text-justify mb-2 text-md text-gray-800'>
                            Hello, I am Sunaina Tiwari currently in 4th Year(8th sem)
                            pursuing Bachelor of Technology in Electronics & Communication Engineering
                            from RCC Institute of Information Technology.
                        </h3>
                        <h3 className=' text-justify text-md text-gray-800'>
                            I am Hardworking, interested in software development ,Web Development and currently looking for
                            opportunities to increase my knowledge and experience.
                        </h3>
                    </div>
                    <div className='mt-5'>
                        <h1 className='text-lg font-semibold uppercase
                         sm:text-wrap '>Technical skills</h1>
                        <ul className='px-4'>
                            <li className=' list-disc list-outside'>
                                <h3 className='text-md'>Programming Languages:
                                    <span className='ml-2 text-md'>JAVA,C,OOPs,DBMS,MySQL</span>
                                </h3>
                            </li>
                            <li className=' list-disc list-outside'>
                                <h3 className='text-md'>Web Technologies:
                                    <span className='ml-2 text-md'>Javascript,HTML,CSS,Tailwind CSS,ReactJS</span>
                                </h3>
                            </li>
                        </ul>
                    </div>
                    <div className='mt-5'>
                        <h1 className='text-lg font-semibold uppercase'>Projects</h1>
                        <h3>
                            <ul className='px-4'>
                                <li className=' list-disc list-outside text-md'>Myportfolio
                                    <span className='pl-1'>
                                        <a href="#" className='text-blue-600 underline'>Link</a>
                                    </span>
                                </li>
                                <li className=' list-disc list-outside text-md'>ABC
                                    <span className='pl-1'>
                                        <a href="#" className='text-blue-600 underline'>Link</a>
                                    </span>
                                </li>
                                <li className=' list-disc list-outside text-md'>Restaurent App
                                    <span className='pl-1'>
                                        <a href="#" className='text-blue-600 underline'>Link</a>
                                    </span>
                                </li>

                            </ul>
                        </h3>
                    </div>
                    <div className='mt-5 pb-4'>
                        <h1 className='text-lg font-semibold uppercase' > hobbies and interests</h1>
                        <ul className='px-4'>
                            <li className=' list-disc list-outside text-md'>
                                Playing Badminton
                            </li>
                            <li className=' list-disc list-outside text-md'>
                                Reading Books
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume