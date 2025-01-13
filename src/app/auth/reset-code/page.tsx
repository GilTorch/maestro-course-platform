import Input from "@/app/ui/auth/input";
import MainHeading from "@/app/ui/auth/main-heading";
import Link from "next/link";
import PrimaryButton from "@/app/ui/auth/PrimaryButton";

export default async function Page() {

    return <div>
        <MainHeading>RANTRE KÒD</MainHeading> 
        <div className="mt-20">
            <div className="mt-8">
                <Input type="text" value="" placeholder="Rantre kod ou resevwa a" alt="reset code input" />
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