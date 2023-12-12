import Link from "next/link"

export default function Footer() {
    return (
        <footer className="grid justify-center first-line: mt-[55px] pt-[25px] md:grid-cols-2 md:mt-[27px] lg:mt-[56px] lg:pl-[130px]">
            <div className=" md:ml-[30px]">
                <img src="images/logo.svg" alt="logo" className="mx-auto md:ml-[30px] md:mt-[20px] lg:mt-[81px]"/>
                <p className="mt-[59px] text-[14px] font-normal mx-[70px] md:ml-[30px] md:mt-[15px] md:text-[10px] lg:mt-[19px] lg:text-sm lg:mr-[307px]">
                    En PetFinder estamos para servirte encuentra
                    a tu mascota perdida con la ayuda de nuestra
                    app. 
                </p>
                <div className="w-[143px] h-[44px] flex mt-[70px] gap-3 mx-[109px] md:ml-[30px] md:mt-[26px] lg:mt-[65px] lg:w-[280px] lg:h-[40px] lg:gap-[40px]">
                    <img src="images/redes 2.svg" alt="" className="w-[24px] h-[24px] md:w-[20px] md:h-[20px] lg:w-[40px] lg:h-[40px] "/>
                    <img src="images/Redes 2.svg" alt="" className="w-[24px] h-[24px] md:w-[20px] md:h-[20px] lg:w-[40px] lg:h-[40px]"/>
                    <img src="images/redes 4.svg" alt="" className="w-[24px] h-[24px] md:w-[20px] md:h-[20px] lg:w-[40px] lg:h-[40px]" />
                    <img src="images/redes 5.svg" alt="" className="w-[24px] h-[24px] md:w-[20px] md:h-[20px] lg:w-[40px] lg:h-[40px]" />
                </div>
                <div className=" sm:block hidden md:block lg:mt-[68px]">
                    <p className="mt-[26px] text-sm font-semibold mb-12 md:content-end md:text-[10px] md:ml-[30px] lg:text-sm">
                    @ 2023 All rigth reserved
                    </p>
                </div>               

            </div>
            <div className="mx-auto text-center text-[14px] font-bold 
            md:flex md:mr-[40px] flex-row lg:mt-[81px] lg:ml-0 lg:mr-[155px] lg:flex justify-between lg:font-bold lg:font-['Inter'] ">
                
                <div className=" text-[14px] mt-[77px] md:text-[10px] md:font-bold md:mt-[26px] md:text-start md:mr-[39px] lg:text-[14px]">
                    PET FINDER
                    <ul className="mt-[26px] font-medium lg:text-[14px]">
                        <li className="mt-5 "><Link href="" scroll={false}>About us</Link></li>
                        <li className="mt-5"><Link href="" scroll={false}>contact us</Link></li>
                        <li className="mt-5"><Link href="" scroll={false}>FAQ</Link></li>
                    </ul>
                </div>

                <div className=" mt-[38px] md:text-[10px] md:font-bold md:mt-[26px] md:mr-[31px] lg:text-[14px]">
                    LEGAL
                    <ul className="mt-[26px] font-medium">
                        <li className="mt-5"><Link href="" scroll={false}>Terminos y Condiciones</Link></li>
                        <li className="mt-5"><Link href="" scroll={false}>Politica de Privacidad</Link></li>
                    </ul>
                </div>

                <div className="mt-[38px] md:text-[10px] md:mt-[26px] lg:text-[14px]">
                    CONTACT
                    <ul className="mt-[26px] font-medium">
                        <li className="mt-5"><Link href="" scroll={false}>Support@petfinder.com</Link></li>
                    </ul>
                </div>
                <div className="content-end mb-[20px] md:hidden block">
                    <p className="mt-[26px] text-sm font-semibold mb-12 md:content-end">@ 2023 All rigth reserved</p>
                </div>                  
            </div>
        </footer>


    )
}   