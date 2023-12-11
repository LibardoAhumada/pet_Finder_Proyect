import image from "next/link"

export default function Landing() {
    return (
        <section className="w-[360px] h-[558px] md:w-[768px] md:h-[200px] md:mt-3.5 md:pl-[99px] md:grid-cols lg:mx-32 lg:mt-14 px-[30px] bg-gradient-to-r from-amber-500 to-yellow-600 rounded-[32px] lg:pl-[120px] lg:w-[1195px] lg:h-[426px] lg:flex ">
            <div className="md:flex flex-row">
                <div className=" max-w-5xl mx-auto text-white" >
                    <h1 className="pt-[14px] text-2xl md:text-[20px] lg:pt-[100px] lg:text-[32px] lg:font-bold">¡Unete a nuestra causa!</h1>
                    <p className=" text-base-[18] max-w-xl md:mt-2 md:text-left lg:text-lg mt-4 font-normal lg:pt-[16px]">
                        Tu generosidad marca la diferencia en la vida de las mascotas
                        necesitadas. Dona hoy para ayudarnos a continuar salvando vidas y
                        reuniendo a las familias con sus seres queridos peludos. Tu apoyo es
                        vital para nuestra misión. Juntos, podemos hacer del mundo un lugar
                        mejor para las mascotas.
                    </p>

                </div>
                <section className="flex flex-col justify-center items-center md:flex-row lg:grid content-end">
                    <div className="my-3 ml-[120px] lg:flex align-bottom ">
                    <img src="images/Footer SVG 3.svg" alt=" " className="md:w-[150px] md:h-[165px] hidden md:block lg:w-[425px] lg:h-[425px] " />
                    <img src="images/Footer SVG 1.svg " className="w-[164px] h-[88px] origin-top-left rotate-[14deg] lg:hidden block" alt="" />
                </div>

                <div className="mt-[120px] w-[132px] h-[50px] px-6 py-[13px] bg-orange-100 rounded-lg md:w-[75px] md:h-[25px] lg:w-[131px] lg:h-[50px] lg:mt-[33px] lg:flex justify-start lg:mb-[50px]">
                    <button className="gap-4 flex justify-around text-center text-amber-600 text-base font-semibold font-['Inter'] leading-normal md:px-0 lg:w-[131px] lg:h-[50px">
                        <img src="images/pets_FILL0_wght400_GRAD0_opsz24 1.svg" alt="" className="md:w-[20px] md:h-[20px] md:text-[12px]"/>
                        Donar
                    </button>
                </div>
                </section>          

            </div>
        </section>


    )
}