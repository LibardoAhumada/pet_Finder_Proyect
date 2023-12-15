import Image from 'next/image';
import { useState } from 'react';


const Navbar = () => {
  const[navbar,setNavbar]=useState(false)
  return (
    <div>
      <div className="Desktop-Navbar hidden md:flex items-center justify-end space-x-6 shadow-navbar-bottom h-[60px] ">
      
        <div className="logo flex-grow ml-20">
          <Image src="\Images\logo.svg" alt="IconLogo" width={40} height={40} />
          
        </div>
        <ul className="menu flex space-x-6 ml-auto ">
          <li className="menu-item"><a href="#">Conócenos</a></li>
          <li className="menu-item"><a href="#">Historias de Éxito</a></li>
          <li className="menu-item"><a href="#">Contacto</a></li>
          
        </ul>
        <div className=''>
          <button className="login-button  bg-orange text-white 
          mx-1 px-6 py-2 w-28 h-10 rounded-lg" > Ingresar</button>
        </div>
      </div>

      <div className='Mobile-Navbar md:hidden flex h-[36px] shadow-navbar-bottom'>
        <div className='Hamburger-icon flex align-bottom' onClick={()=> setNavbar(!navbar)}> 
            
          {navbar ? (
            <Image src="\Images\cross-svgrepo-com.svg" className='ml-8' width={40} height={40} alt="logoclose"/>
          ):(<Image className='ml-9 flex self-center ' 
           src="\Images\burger-menu-svgrepo-com.svg" alt="Icon" width={28} height={28} /> 

          )}
        </div>
      </div>
      <div className={`sidemenu-mobile flex-1 justify-self-center 
      pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "p-12 md:p-0 block" : "hidden"}`}>
          <ul className='h-screen md:h-auto items-center justify-center md:flex'>
           <div className='block md:hidden'>
            <li className='pb-6 text-xl py-2 md:px6 text-center border-b-2 md:border-b-0'>
              {/* <link href="#Conocenos" onClick={()=> setNavbar(!navbar)} /> */}
              Conócenos
            </li>
            <li className='pb-6 text-xl py-2 px6 text-center border-b-2 md:border-b-0'>
              {/* <link href="#Historia de Exito" onClick={()=> setNavbar(!navbar)} /> */}
              Historia de Exito
            </li>
            <li className='pb-6 text-xl py-2 px6 text-center border-b-2 md:border-b-0'>
              {/* <link href="#Contacto" onClick={()=> setNavbar(!navbar)} /> */}
              Contacto
            </li>
           </div>
           
          </ul>
            
      </div>
    </div>
  );
};

export default Navbar;