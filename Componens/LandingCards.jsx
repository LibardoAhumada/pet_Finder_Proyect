import React from 'react';
import Image from 'next/image';

const LandingCards = () => {
  return (
    <div className=" my-[42px] w-full px-[80] ">
      <div className='flex-col justify-center'>
        <div className='flex justify-center' >
        <h2  className='flex justify-center text-5xl font-mono font-bold text-center text-amber-600 w-[300px] h-[72px]'>Pet Finder</h2>
        </div>
      
      <div className='flex justify-center'>
      <h3 className='text-neutral-950 font-sans w-[380px] h-[51px] text-center flex ' >Encuentra a tu mascota perdida con la ayuda de nuestra app.</h3>
      </div>
      

      </div>
      
      <div className="h-[500px] w-[1200] flex flex-wrap justify-center m-[24px] bg-gradient-to-r from-yellow-400 to-yellow-400 bg-bottom bg-[length:1200px_300px] bg-no-repeat" >       
        <div className="container flex flex-col space-y-8 h-[400px] w-[350px] rounded-[32px] my-[12px] bg-slate-50 mx-6">
          <Image 
            src="/Images/landingcarditem1.svg"
            alt="Descripción "
            width={350}
            height={245}
          />
         <div>
         <div className='flex justify-start items-center'>
         <Image className='ml-8 mb-1'
            src="/Images/landingcard1item3.svg"
            alt="Descripción significativa de la imagen"
            width={40}
            height={40}/>
            <h5 className="container flex text-xl font-semibold w-auto ml-8">
          Busca
          </h5>
         </div>
            
            <p className="text-lg w-[302px] text-start ml-6 mb-[48]">Registra a tu mascota perdida con la ayuda de nuestra app.</p>

         </div>
          
          </div>
          <div className="container flex flex-col space-y-8 h-[400px] w-[350px] rounded-[32px] my-[12px]  bg-slate-50 mx-6">
          <Image bg-slate-200
            src="/Images/landingcard2item1.svg"
            alt="Descripción "
            width={350}
            height={248}
          />
         <div>
         <div className='flex justify-start items-center'>
         <Image className='ml-8 mb-1'
            src="/Images/landingcard1item3.svg"
            alt="Descripción significativa de la imagen"
            width={40}
            height={40}/>
            <h5 className="container flex text-xl font-semibold w-auto ml-8">
            Recibe Notificaciones
          </h5>
         </div>
            
            <p className="text-lg w-[302px] text-start ml-6 mb-[48]">Cuando reportes tu mascota perdida se emitiran alertas.</p>

         </div>
          
          </div>
          <div className="container flex flex-col space-y-8 h-[400px] w-[350px] rounded-[32px] my-[12px]  bg-slate-50 mx-6">
          <Image bg-slate-200
            src="/Images/landingcard3item1.svg"
            alt="Descripción "
            width={350}
            height={248}
          />
         <div>
         <div className='flex justify-start items-center'>
         <Image className='ml-8 mb-1'
            src="/Images/landingcard1item3.svg"
            alt="Descripción significativa de la imagen"
            width={40}
            height={40}/>
            <h5 className="container flex text-xl font-semibold w-auto ml-8">
            Contacta
          </h5>
         </div> 
            
            <p className="text-lg w-[302px] text-start ml-6 mb-[48]">Contacta con usuarios por chat, para recuperar tu mascota</p>

         </div>
          
          </div>
        </div>



        
      
    </div>








  );
};

export default LandingCards;
