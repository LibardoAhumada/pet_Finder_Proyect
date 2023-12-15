import Image from "next/image";

const LandingImg = () => {
  return (
    <div className="w-full overflow-auto relative my-40">
      <div className="dog-image-landing-first relative overflow-hidden flex justify-end" >
        <Image src="\Images\landing img portada.svg" alt="" width={420} height={320} className="absolute-right-6"/>
      </div>
      <div className="background-dog-image-first relative  ">
        <Image src="\Images\bacjground contacto 1.svg" className="" alt="" width={420} height={320} />
      </div>
    </div>
  );
};

export default LandingImg;
