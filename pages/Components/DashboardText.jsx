import Image from "next/image"

function DashboardText() {
    return (
        <div>
            <div className="flex space-x-3 mt-8 ml-6">
                <p className="text-2xl font-Inter md:text-[28px]">
                    Mis Mascotas a encontrar
                </p>
                <Image src="\Images\question-mark-outline-svgrepo-com.svg" className="md:w-[28px] md:h-[28px]" alt="IconLogo" width={14} height={14} />
            </div>

            <div className="bg-FFECD1 w-36 h-7 ml-6 mt-4 md:w-60 md:h-12 font-Inter font-bold rounded flex">
                <p className="text-xxs md:text-[12px] md:mt-2 ml-1 text-center ">
                    Agrega a tu mascota a encontrar dandole click al boton +
                </p>
            </div>
            <div className="plus-icon  ml-16 mt-20 md:ml-36">
                
                <div className="first-row-plus-icon flex space-x-52 md:space-x-72">

                    <div>
                        <Image src="\Images\plus-svgrepo-com.svg" className="md:w-[52px] md:h-[52px]" alt="IconLogo" width={20} height={20} />
                    </div>
                    <div>
                        <Image src="\Images\plus-svgrepo-com.svg" className="md:w-[52px] md:h-[52px]" alt="IconLogo" width={20} height={20} />
                    </div>

                </div>
                <div className="second-row-plus-icon mt-40 flex space-x-52 md:space-x-72">
                    <div>
                        <Image src="\Images\plus-svgrepo-com.svg" className="md:w-[52px] md:h-[52px]" alt="IconLogo" width={20} height={20} />
                    </div>
                    <div>
                        <Image src="\Images\plus-svgrepo-com.svg" className="md:w-[52px] md:h-[52px]" alt="IconLogo" width={20} height={20} />
                    </div>

                </div>

            </div>

            <div className="flex space-x-3 mt-24 ml-6">
                <p className="text-lg font-Inter md:text-[28px]">
                    Mis Busquedas
                </p>
                <Image src="\Images\question-mark-outline-svgrepo-com.svg" className="md:w-[28px] md:h-[28px]" alt="IconLogo" width={14} height={14} />
            </div>

            <div className="bg-FFECD1 w-36 h-7 ml-6 mt-4 font-Inter font-bold rounded md:w-60 md:h-12 flex">
                <p className="text-xxs ml-1 text-center md:text-[12px] md:mt-2">
                    Agrega una mascota encontrada dandole click al boton +
                </p>
            </div>
            <div className="plus-icon  ml-16 mt-20 md:ml-36">
                <div className="first-row-plus-icon flex space-x-52 md:space-x-72">

                    <div>
                        <Image src="\Images\plus-svgrepo-com.svg" className="md:w-[52px] md:h-[52px]" alt="IconLogo" width={20} height={20} />
                    </div>
                    <div>
                        <Image src="\Images\plus-svgrepo-com.svg" className="md:w-[52px] md:h-[52px]" alt="IconLogo" width={20} height={20} />
                    </div>

                </div>
                <div className="second-row-plus-icon mt-40 flex space-x-52 md:space-x-72">
                    <div>
                        <Image src="\Images\plus-svgrepo-com.svg" className="md:w-[52px] md:h-[52px]" alt="IconLogo" width={20} height={20} />
                    </div>
                    <div>
                        <Image src="\Images\plus-svgrepo-com.svg" className="md:w-[52px] md:h-[52px]" alt="IconLogo" width={20} height={20} />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default DashboardText