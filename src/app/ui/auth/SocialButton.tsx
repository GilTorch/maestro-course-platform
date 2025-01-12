import Image from "next/image"

type SocialButtonProps = {
    text: string; 
    src: string;
    onClick?: () => void;
}

const SocialButton = ({ text, src, onClick }: SocialButtonProps) => {
  return <button onClick={onClick} className="w-full border p-3 relative">
    <div className="ml-2 absolute">
        <Image src={src} width={24} height={24} alt="Google logo" />
    </div>
    <span className="w-full text-center">
       {text}
    </span>
  </button>
}

export default SocialButton