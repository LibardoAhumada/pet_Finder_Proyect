import Dashboard from "./Components/Dashboard";
import Image from "next/image";




export default function mapa() {
    return (
        <>
            <nav> <Dashboard /> </nav>
            <main className="text-[12px] font-medium p-2 md:text-[18px]">
                <p className="mt-[21px] ml-[37px] mr-[55px] md:mt-[70px] lg:ml-[130px] lg:text-[20px]">Trate de se lo mas exacto posible al agregar
                    la posible distancia que pudiera estar tu
                    mascota en la seccion de "Distancia"
                </p>
                <p className="mt-[29px] ml-[104px] mr-[11px] text-right indent-0 p-2 md:mt-[70px] lg:text-start lg:ml-[130px]"> En caso de su mascota pudiera moverse
                    mucho, le recomendamos poner la
                    cantidad
                    maxima de distancia
                </p>

                <div className="mt-[23px] mx-[28px] md:mx-[59px] md:mt-[108px] lg:flex ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15100.729108004743!2d-96.97461449999999!3d18.87899315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1703218717197!5m2!1ses-419!2smx"
                        width="306" height="167" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="md:w-[626px] md:h-[345px] lg:w-[800px] lg:h-[600px]"></iframe>
                    
                    <section className="lg:ml-[174px]">
                    <div className="mt-[22px] flex justify-center gap-7 md:mt-[70px]">
                        <label className="ml-[30px] text-sm font-medium leading-6 text-gray-900">Codigo Postal</label>
                        <div class="">
                            <div class=" ">
                                <select class=" rounded-md border-0 bg-orange py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                    <option>94500</option>
                                    <option>89500</option>
                                    <option>10253</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[22px] flex justify-center gap-7">
                        <label className="ml-[30px] text-sm font-medium leading-6 text-gray-900">Estado</label>
                        <div class="">
                            <div class=" ">
                                <select class=" rounded-md border-0 bg-orange py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                    <option>veracruz</option>
                                    <option>monterrey</option>
                                    <option>CDMX</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[22px] flex justify-center gap-7">
                        <label className="ml-[30px] text-sm font-medium leading-6 text-gray-900">Colonia</label>
                        <div class="">
                            <div class=" ">
                                <select class=" rounded-md border-0 bg-orange py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                    <option>Obrera</option>
                                    <option>carranza</option>
                                    <option>juarez</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[22px] flex justify-center gap-7">
                        <label className="ml-[30px] text-sm font-medium leading-6 text-gray-900">Distancia</label>
                        <div class="">
                            <div class=" ">
                                <select class=" rounded-md border-0 bg-orange py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                    <option>20km</option>
                                    <option>30km</option>
                                    <option>50km</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-[52px] flex justify-center  ">
                        <button className=" max-w-min text-center text-base font-semibold font-['Inter'] bg-orange rounded-md border-0 md:w-[170px] md:h-[61px]">

                            siguente
                        </button>
                    </div>
                </section>    
                </div>

                

            </main>
        </>
    )
};