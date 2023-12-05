import image from "next/link"

export default function Landing() {
    return (
        <section className="md:flex-row mt-14 mx-auto w-[1195px] h-[426px] bg-gradient-to-r from-amber-500 to-yellow-600 rounded-[32px]">
            <div className="flex justify-end sm:grid-flow-col">    
                <div className=" max-w-5xl mx-auto text-white" >
                    <h1 className="text-2xl pt-24 font-bold md:text-xl">¡Unete a nuestra causa!</h1>
                    <p className="max-w-xl text-lg mt-4 font-normal md:text-xl">
                        Tu generosidad marca la diferencia en la vida de las mascotas
                        necesitadas. Dona hoy para ayudarnos a continuar salvando vidas y
                        reuniendo a las familias con sus seres queridos peludos. Tu apoyo es
                        vital para nuestra misión. Juntos, podemos hacer del mundo un lugar
                        mejor para las mascotas.
                    </p>
                    <div className="my-8 w-[127px] h-10 px-6 py-2 bg-orange-100 rounded-lg ">
                        <button className="gap-4 flex justify-around text-center text-amber-600 text-base font-semibold font-['Inter'] leading-normal ">
                            <img src="images/pets_FILL0_wght400_GRAD0_opsz24 1.svg" alt="" />
                            Donar
                        </button>
                    </div>                    
                </div>
                <img src="images/Footer SVG 3.svg" alt="" className="" />
            </div>
        </section>

        
    )
}