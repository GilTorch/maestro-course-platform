import Image from "next/image"

 const sidenav = () => (
    <div  className="h-full gradient bg-gradient-to-b from-black to-[#F45100] flex items-center justify-center">
        <Image alt="Maestro Logo" width={514} height={456} src='/svg/music.svg' />
    </div>
 )

export default sidenav