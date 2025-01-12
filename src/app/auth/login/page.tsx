import Input from "@/app/ui/auth/input";
import LineWithText from "@/app/ui/auth/LineWithText";
import MainHeading from "@/app/ui/auth/main-heading";
import Link from "next/link";
import SocialButton from "@/app/ui/auth/SocialButton";
import PrimaryButton from "@/app/ui/auth/PrimaryButton";

export default async function Page() {

    return <div>
        <MainHeading>KONEKTE</MainHeading> 
        <div className="mt-20">
            <div className="mt-8">
                <Input type="email" value="" placeholder="Imel" alt="Email input" />
            </div>
            <div className="mt-8" >
                <Input type="password" value="" placeholder="Modpas" alt="Password input" />
            </div>
        </div>
        <div className="mt-8 flex flex-col gap-3">
            <Link href={'/auth/forgot-password'} className="text-headerColor font-bodyFont underline">
                Mwen bliye modpas mwen
            </Link>
            <Link href={'/auth/signup'} className="text-headerColor font-bodyFont underline">
               Ou pa gen kont? Kreye youn
            </Link>
        </div>
        <div className="mt-8">    
            <PrimaryButton>
                Kreye yon kont
            </PrimaryButton>
        </div>
        <div className="mt-20 mb-20">
            <LineWithText />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <SocialButton src="/svg/google.svg" text="Konekte ak Google" />
            <SocialButton src="/svg/facebook.svg" text="Konekte ak Facebook" />
        </div>
    </div>
}