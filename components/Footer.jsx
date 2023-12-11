import Link from "next/link"

export default function Footer() {
    return (
        <footer className="w-[360px] h-[840px] grid justify-center mt-[55px] pt-[25px] ">
            <div className="">
                <img src="images/logo.svg" alt="logo" className="mx-auto"/>
                <p className="mt-[59px] text-[14px] font-normal mx-[70px] text-justify">
                    En PetFinder estamos para servirte encuentra
                    a tu mascota perdida con la ayuda de nuestra
                    app. 
                </p>
                <div className="w-[143px] h-[44px] flex mt-[70px] gap-3 mx-[109px]">
                    <img src="images/redes 2.svg" alt="" className="w-[24px] h-[24px]"/>
                    <img src="images/Redes 2.svg" alt="" className="w-[24px] h-[24px]"/>
                    <img src="images/redes 4.svg" alt="" className="w-[24px] h-[24px]" />
                    <img src="images/redes 5.svg" alt="" className="w-[24px] h-[24px]" />
                </div>

            </div>
            <div className="mx-auto text-center lg:flex justify-between lg:font-bold lg:text-base lg:font-['Inter']">
                <div className="mt-[77px]">PET FINDER
                    <ul className=" lg:font-medium">
                        <li className="mt-5"><Link href="" scroll={false}>About us</Link></li>
                        <li className="mt-5"><Link href="" scroll={false}>contact us</Link></li>
                        <li className="mt-5"><Link href="" scroll={false}>FAQ</Link></li>
                    </ul>
                </div>

                <div className=" mt-[38px]">LEGAL
                    <ul className="font-medium">
                        <li className="mt-5"><Link href="" scroll={false}>Terminos y Condiciones</Link></li>
                        <li className="mt-5"><Link href="" scroll={false}>Politica de Privacidad</Link></li>
                    </ul>
                </div>

                <div className="mt-[38px]">CONTACT
                    <ul className="font-medium">
                        <li className="mt-5"><Link href="" scroll={false}>Support@petfinder.com</Link></li>
                    </ul>
                </div>
                <p className="mt-14 text-sm font-semibold mb-12">@ 2023 All rigth reserved</p>  
            </div>
        </footer>


    )
}   