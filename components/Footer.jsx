import Link from "next/link"

export default function Footer() {
    return (
        <footer className="grid grid-cols-2 mt-14 pt-24 pl-28 pr-40 ">
            <div className="">
                <img src="images/logo.svg" alt="logo" />
                <p className="text-lg mt-5 font-normal">En PetFinder estamos para servirte encuentra <br />
                    a tu mascota perdida con la ayuda de nuestra <br />
                    app. </p>
                <div className="flex justify-start mt-16 gap-10">
                    <img src="images/redes 2.svg" alt="" />
                    <img src="images/Redes 2.svg" alt="" />
                    <img src="images/redes 4.svg" alt="" />
                    <img src="images/redes 5.svg" alt="" />
                </div>
                <p className="mt-14 text-sm font-semibold mb-12">@ 2023 All rigth reserved</p>

            </div>
            <div className=" flex justify-between font-bold text-base font-['Inter']">
                <div className="">PET FINDER
                    <ul className=" font-medium">
                        <li className="mt-5"><Link href="" scroll={false}>About us</Link></li>
                        <li className="mt-5"><Link href="" scroll={false}>contact us</Link></li>
                        <li className="mt-5"><Link href="" scroll={false}>FAQ</Link></li>
                    </ul>
                </div>

                <div className="ml-[80px]">LEGAL
                    <ul className="font-medium">
                        <li className="mt-5"><Link href="" scroll={false}>Terminos y Condiciones</Link></li>
                        <li className="mt-5"><Link href="" scroll={false}>Politica de Privacidad</Link></li>
                    </ul>
                </div>

                <div className="">CONTACT
                    <ul className="font-medium">
                        <li className="mt-5"><Link href="" scroll={false}>Support@petfinder.com</Link></li>
                    </ul>
                </div>

            </div>
        </footer>


    )
}   