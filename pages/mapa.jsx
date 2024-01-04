import Dashboard from "./Components/Dashboard";
import Image from "next/image";




export default function mapa() {
    return (
        <>
            <nav> <Dashboard /> </nav>
            <main className="text-[12px] font-medium p-2 md:text-[18px]">
                <h1 className="mt-[100px] ml-[80px] text-[40px] font-extrabold font-['monserrat'] text-orange">
                    Pet Finder
                </h1>
                <h2 className="mt-[21px] ml-[130px] text-[40px] font-extrabold font-['monserrat']">
                Selecciona distancia de busqueda 
                </h2>
                <p className="mt-[21px] ml-[37px] mr-[55px] md:mt-[70px] lg:ml-[130px] lg:mt-[24px] lg:text-[20px]">Trate de se lo mas exacto posible al agregar
                    la posible distancia que pudiera estar tu
                    mascota en la seccion de "Distancia"
                </p>
                <p className="mt-[29px] ml-[104px] mr-[11px] text-right indent-0 p-2 md:mt-[70px] lg:text-start lg:ml-[130px] lg:mt-[24px]"> En caso de su mascota pudiera moverse
                    mucho, le recomendamos poner la
                    cantidad
                    maxima de distancia
                </p>

                <div className="mt-[23px] mx-[28px] md:mx-[59px] md:mt-[108px] lg:flex ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15100.729108004743!2d-96.97461449999999!3d18.87899315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1703218717197!5m2!1ses-419!2smx"
                        width="306" height="167" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="md:w-[626px] md:h-[345px] lg:w-[800px] lg:h-[600px]"></iframe>
                    
                    <section className=" lg:ml-[174px]">
                    <p className="text-[24px] font-bold mt-10 text-center">
                    Coloca el puntero en zona de Busqueda
                    </p>
                    <div className="flex-col text-center mt-[22px] lg:mt-[50px] ">
                        <label className=" text-sm font-medium leading-6">Codigo Postal</label>
                            <div class=" ">
                                <select class="w-[243px] h-[35px] rounded-lg border-0 bg-orange pr-7 sm:text-sm">
                                    <option>94500</option>
                                    <option>89500</option>
                                    <option>10253</option>
                                </select>
                            </div>
                    </div>

                    <div className="flex-col text-center mt-10 ">
                        <label className="text-sm font-medium leading-6">Estado</label>
                           <div class=" ">
                                <select class="w-[243px] h-[35px] rounded-lg border-0 bg-orange pr-7 sm:text-sm">
                                    <option>veracruz</option>
                                    <option>monterrey</option>
                                    <option>CDMX</option>
                                </select>
                            </div>
                    </div>
                    <div className="flex-col text-center mt-10 ">
                        <label className="text-sm font-medium leading-6">Colonia</label>
                            <div class=" ">
                                <select class="w-[243px] h-[35px] rounded-md border-0 bg-orange pr-7 sm:text-sm">
                                    <option>Obrera</option>
                                    <option>carranza</option>
                                    <option>juarez</option>
                                </select>
                            </div>
                    </div>
                    <div className="flex-col text-center mt-10 ">
                        <label className="text-sm font-medium leading-6">Distancia</label>
                            <div class=" ">
                                <select class="w-[243px] h-[35px] rounded-md border-0 bg-orange pr-7 sm:text-sm">
                                    <option>20km</option>
                                    <option>30km</option>
                                    <option>50km</option>
                                </select>
                            </div>
                    </div>
                    <div className=" mt-[52px] text-center">
                        <button className=" w-[91px] h-[20px] md:w-[170px] md:h-[61px] lg:w-[243px] lg:h-[35px] 
                        text-base font-semibold font-['Inter'] bg-orange rounded-md border-0 text-white md:rounded-full">
                            siguente
                        </button>
                    </div>
                </section>    
                </div>

                

            </main>
        </>
    )
};