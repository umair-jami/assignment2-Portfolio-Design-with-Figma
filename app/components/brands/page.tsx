import React from 'react';
import b1 from '../../assets/levis.png';
import b2 from '../../assets/lacoste.png';
import b3 from '../../assets/obey.png';
import b4 from '../../assets/h&m.png';
import b5 from '../../assets/shopify.png';
import b6 from '../../assets/amazon.png';
import Image from 'next/image';

export default function Brands() {
  return (
    <section className="h-auto w-full bg-yellow py-4">
      <div className="container h-full flex flex-wrap justify-center gap-4 md:gap-8 lg:justify-around items-center bg-yellow">
        <Image src={b1} alt="Levis" className="w-16 md:w-20 lg:w-24" />
        <Image src={b2} alt="Lacoste" className="w-16 md:w-20 lg:w-24" />
        <Image src={b3} alt="Obey" className="w-16 md:w-20 lg:w-24" />
        <Image src={b4} alt="H&M" className="w-16 md:w-20 lg:w-24" />
        <Image src={b5} alt="Shopify" className="w-16 md:w-20 lg:w-24" />
        <Image src={b6} alt="Amazon" className="w-16 md:w-20 lg:w-24" />
      </div>
    </section>
  );
}
