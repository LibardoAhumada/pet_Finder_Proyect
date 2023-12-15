import Image from "next/image"

const FirstText = () => {
  return (
    <div className="flex flex-col space-x">
        <div className="flex space-x-5">
            <div className="Title mr-14">
                <p className="text-orange font-extrabold font-Montserrat 
                 text-4xl ml-7 mt-14 md:text-5xl lg:text-6xl">Pet Finder</p>        
            </div>
            <div className="Logo self-center block md:hidden">
                <Image src="\Images\logo.svg" alt="IconLogo" width={40} height={40} />
            </div>
        </div>
        <div>
            <p className="reason-text flex font-Montserrat 
            text-p800 text-xs ml-8 mt-5 font-semibold md:text-2xl lg:text-3xl">Porque cada mascota merece volver a casa</p>
        </div>
        <div>
            <p className="find-Text font-inter text-xs ml-8 mt-3 md:flex md:text-base lg:text-xl ">Encuentra a tu mascota perdida con la ayuda de nuestra app</p>
        </div>

    </div>
  )
}

export default FirstText