import Input from "@/app/ui/auth/input";
import MainHeading from "@/app/ui/auth/main-heading";
import PrimaryButton from "@/app/ui/auth/PrimaryButton";

export default async function Page() {

    return <div>
        <MainHeading>CHANJE MODPAS</MainHeading> 
        <div className="mt-20">
            <div className="mt-8">
            <Input type="password" value="" placeholder="Modpas" alt="Password input" />
            </div>
            <div className="mt-8">
            <Input type="password" value="" placeholder="Konfime modpas" alt="Confirm password input" />
            </div>
        </div>
        <div className="mt-8">    
            <PrimaryButton>
                Chanje
            </PrimaryButton>
        </div>
    </div>
}