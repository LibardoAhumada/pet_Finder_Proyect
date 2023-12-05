

export default function Donar() {
    return (
        <div className="bg-white max-w h-[60px] px-20 ">
            <div className="flex justify-between">
                <img src="images/logo.svg" alt="logo" className="py-2.5" />
                <p className="my-[15px] font-['Inter'] text-xs basis-3/4">
                    <span className="font-extrabold">¡Únete a nuestra causa!</span>¡Únete a nuestra causa! Tu generosidad marca la diferencia en la vida de las mascotas necesitadas.
                    Dona hoy para ayudarnos a continuar salvando vidas y reuniendo a las familias con sus seres queridos peludos.
                    Tu apoyo es vital para nuestra misión. Juntos, podemos hacer del mundo un lugar mejor para las mascotas.
                </p>
                <button className=" my-[10px] w-[127px] h-10 px-6 py-2 bg-orange-100 rounded-lg gap-4 flex justify-around text-center text-amber-600 text-base font-semibold font-['Inter'] leading-normal ">
                    <img src="images/pets_FILL0_wght400_GRAD0_opsz24 1.svg" alt="" />
                    Donar
                </button>
            </div>
        </div>

    )
}