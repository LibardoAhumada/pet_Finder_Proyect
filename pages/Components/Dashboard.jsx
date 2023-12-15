import Image from "next/image"
import { useState } from "react"

const NavbarAccount = () => {
  const [navbarAccount, setNavbarAccount] = useState(false)
  return (
    <div>
      <div className="navbar-dashboard">


        <div className='Mobile-NavbarAccount flex h-[36px] md:h-[60px] shadow-navbar-bottom lg:w-[1440px] lg:h-[60] '>
          <div className='Hamburger-icon flex align-bottom' onClick={() => setNavbarAccount(!navbarAccount)}>

            {navbarAccount ? (
              <Image src="\Images\cross-svgrepo-com.svg" className='ml-8 md:h-10 md:w-10 mt-2' width={40} height={40} alt="logoclose" />
            ) : (<Image className='ml-9 flex self-center md:h-10 md:w-10'
              src="\Images\burger-menu-svgrepo-com.svg" alt="Icon" width={28} height={28} />

            )}
          </div>
          <div className="mx-auto flex items-center justify-center space-x-12">
            
            <div className="hidden md:block bg-orange w-32 h-11 rounded-lg lg:w-[170px] lg:h-[40px]">
              <p className="text-white text-center text-[16px] font-Inter lg:hidden">
                38
              </p>
              <p className="text-white text-center text-[16px] font-Inter lg:hidden">
                Encontrados
              </p>
              <p className="text-white text-center text-[16px] font-Inter hidden lg:block lg:mt-2 lg:font-semibold">
                Añadir Mascota
              </p>
            </div>
            <Image src="\Images\logo.svg" alt="IconLogo" width={24} height={24} className="md:h-10 md:w-10" />
            <div className="hidden md:block bg-orange w-32 h-11 rounded-lg lg:w-[170px] lg:h-[40px]">
              <p className="text-white text-center text-[16px] font-Inter lg:hidden">
                50
              </p>
              <p className="text-white text-center text-[16px] font-Inter lg:hidden">
                En Busqueda
              </p>
              <p className="text-white text-center text-[16px] font-Inter hidden lg:block lg:mt-2 lg:font-semibold">
                Reportar Mascota
              </p>
            </div>

          </div>

          

          <div className="flex justify-center mb-1 space-x-2 items-center">
            <Image src="\Images\logo.svg" alt="IconLogo" width={24} height={24} className="md:h-10 md:w-10" />
            <Image src="\Images\logo.svg" alt="IconLogo" width={24} height={24} className="md:h-10 md:w-10" />
          </div>

        </div>
        <div className={`sidemenu-mobile flex-1 justify-self-center 
      pb-3 mt-8 lg:block md:pb-0 md:mt-0 ${navbarAccount ? "p-12 md:p-0 block" : "hidden"}`}>
          <ul className='h-screen md:h-auto items-center justify-center md:flex'>
            <div className='block lg:hidden'>
              <li className='pb-6 text-xl py-2 md:px6 text-center border-b-2 lg:border-b-0'>
                {/* <link href="#Cambiar contraseña" onClick={()=> setNavbarAccount(!navbar)} /> */}
                Cambiar contraseña
              </li>
              <li className='pb-6 text-xl py-2 px6 text-center border-b-2 lg:border-b-0'>
                {/* <link href="#Cambiar correo" onClick={()=> setNavbarAccount(!navbar)} /> */}
                Cambiar correo
              </li>
              <li className='pb-6 text-xl py-2 px6 text-center border-b-2 lg:border-b-0'>
                {/* <link href="#Editar mis mascotas a encontrar" onClick={()=> setNavbarAccount(!navbar)} /> */}
                Editar mis mascotas a encontrar
              </li>
              <li className='pb-6 text-xl py-2 md:px6 text-center border-b-2 lg:border-b-0'>
                {/* <link href="#Editar mis busquedas" onClick={()=> setNavbarAccount(!navbar)} /> */}
                Editar mis busquedas
              </li>
              <li className='pb-6 text-xl py-2 px6 text-center border-b-2 lg:border-b-0'>
                {/* <link href="#Politicas y Privacidad" onClick={()=> setNavbarAccount(!navbar)} /> */}
                Politicas y Privacidad
              </li>
              <li className='pb-6 text-xl py-2 px6 text-center border-b-2 lg:border-b-0'>
                {/* <link href="#Liga tu tarjeta a tu cuenta PetFinder" onClick={()=> setNavbarAccount(!navbar)} /> */}
                Liga tu tarjeta a tu cuenta PetFinder
              </li>
              <li className='pb-6 text-xl py-2 px6 text-center border-b-2 lg:border-b-0'>
                {/* <link href="#Salir" onClick={()=> setNavbarAccount(!navbar)} /> */}
                Salir
              </li>

            </div>

          </ul>

        </div>



      </div>



    </div>
  )
}

export default NavbarAccount