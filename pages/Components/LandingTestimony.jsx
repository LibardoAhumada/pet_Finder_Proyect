import React from 'react';
import Image from 'next/image';
import TestimonyCarousel from './TestimonyCarrousel';

const Testimony = ({ title, description, imageSrc, altText }) => {
  return (
    <section className='w-[360px] h-[596px] md:w-[auto] md:h-[248px] lg:w-[auto] lg-[408px]'>

      <div className='bg-orange-200 flex flex-col'>

      <h3 className='w-[308px] text-4xl md:text-[28px] lg:text-5xl text-yellow-500 font-extrabold'>Que Dicen Nuestro Clientes</h3>

      <p className=' font-sans text-xl md:text-lg text-left text-yellow-700 font-medium m-6'>
                Como voluntario en el rescate de animales, Pet Finder se ha convertido en mi herramienta esencial.
                La plataforma facilita la conexión entre mascotas perdidas y dueños preocupados.
                Cada vez que veo una reunión exitosa, siento que estoy contribuyendo a algo significativo.
                Estoy agradecido por ser parte de esta comunidad que realmente marca la diferencia.
              </p>
              <div className='star_Icon flex items-center mt-4'>
                <Image
                  src="/Images/Group 1000001948.svg"
                  alt="Descripción"
                  width={152}
                  height={24}
                />                        
              </div>
                

              <div className='flex justify-around'>
              <h6 className='font-sans text-[12px] italic  text-yellow-700 font-semibold  mt-[160px] flex' >
                - Libardo Ahumada
              </h6> 
            <Image
              src="/Images/landingtestimoniales1.svg"
              alt="Descripción"
              width={264}
              height={324}
            />     
          
          </div>
        </div>
       
    </section>
  );
};

export default Testimony;
