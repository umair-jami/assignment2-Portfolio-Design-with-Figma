import React from 'react'
import saleImg from '../../assets/sale.png'
import Image from 'next/image'
import { Poppins } from 'next/font/google';
import { Button } from '@/components/ui/button';
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  });
export default function Offers() {
  return (
    <section id='offers' className='container lg:h-[calc(100vh-4rem)] h-auto w-full max-w-6xl px-6 py-12 lg:mt-[150px]'>
        <div className='bg-linear h-full flex'>
            <div className='h-full w-[50%]'>
                <Image src={saleImg} alt="sale" className='h-[100%]'/>
            </div>
            <div className='ml-7 h-full mt-10 flex flex-col gap-4'>
                <h1 className={`text-3xl bg-white w-[43%] px-3 ${poppins.className}`}  style={{fontWeight:900}}>PAYDAY</h1>
                <h1 className={`text-3xl ${poppins.className}`}  style={{fontWeight:900}}>SALE NOW</h1>
                <p className={`${poppins.className}`} style={{fontWeight:300}}>Spend minimal $100 get <br /> 30% off
                voucher code for your next purchase</p>
                <p className={`${poppins.className}`} style={{fontWeight:800}}>1 June - 10 June 2025</p>
                <p className={`${poppins.className}`} style={{fontWeight:300}}>*Terms & Conditions apply</p>
                <Button variant="outline" className='bg-black text-white w-24'>SHOP NOW</Button>

            </div>
        </div>
    </section>
  )
}
