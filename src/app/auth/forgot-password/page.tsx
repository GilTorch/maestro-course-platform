import Input from "@/app/ui/auth/input";
import MainHeading from "@/app/ui/auth/main-heading";
import Link from "next/link";
import PrimaryButton from "@/app/ui/auth/PrimaryButton";

export default async function Page() {

    return <div>
        <MainHeading>RESEVWA KÒD</MainHeading> 
        <div className="mt-20">
            <div className="mt-8">
                <Input type="email" value="" placeholder="Rantre imel ou" alt="Email input" />
            </div>
        </div>
        <div className="mt-8">
            <Link href={'/auth/login'} className="text-headerColor font-bodyFont underline">
                Ou sonje modpas ou? Konekte
            </Link>
        </div>
        <div className="mt-8">    
            <PrimaryButton>
                Voye kòd
            </PrimaryButton>
        </div>
    </div>
}