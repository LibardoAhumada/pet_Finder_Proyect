

export default function Donar() {
    return (
        <div className="mx-auto lg:flex-row bg-white lg:max-w lg:h-[60px] lg:px-20 md:pl-[23px] ">
            <div className="flex lg:flex justify-between ">
                <img src="images/logo.svg" alt="logo" className="w-[40px] h-[40px] my-2.5 mx-[23px] md:ml-[23px] lg:py-2.5" />
                <p className="text-[8px] font-['Inter'] text-justify mr-[6px] md:text-[10px] lg:my-[15px]  lg:text-xs lg:basis-3/4">
                    <span className="font-extrabold">¡Únete a nuestra causa!</span>Tu generosidad marca la diferencia en la vida de las mascotas necesitadas.
                    Dona hoy para ayudarnos a continuar salvando vidas y reuniendo a las familias con sus seres queridos peludos.
                    Tu apoyo es vital para nuestra misión. Juntos, podemos hacer del mundo un lugar mejor para las mascotas.
                </p>
                <button className="hidden sm:block lg:my-[10px] lg:[127px] lg:h-10 lg:px-6 lg:py-2 bg-orange-100 rounded-lg gap-4 lg:flex justify-around lg:text-center text-amber-600 lg:text-base lg:font-semibold font-['Inter']">
                    <img src="images/pets_FILL0_wght400_GRAD0_opsz24 1.svg" alt="" className="" />
                    Donar
                </button>
                <div className=" lg:hidden block my-[18px] mr-[10px] md:justify-start md:w-[95px] md:h-[30px]">
                    <button className="w-[50px] bg-orange-100 rounded-lg gap-4 text-center text-amber-600 text-[13px] md:text-[16px] font-semibold font-['Inter'] md:w-[95px] md:h-[30px]">
                        Donar
                    </button>
                </div>
            </div>

        </div>

    )
}