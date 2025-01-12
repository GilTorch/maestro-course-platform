import Input from "@/app/ui/auth/input";
import MainHeading from "@/app/ui/auth/main-heading";

export default async function Page() {

    return <div>
        <MainHeading>KONEKTE</MainHeading> 
        <Input type="email" value="" placeholder="Imel" alt="Email input" />
        <Input type="password" value="" placeholder="Modpas" alt="Password input" />
        <Input type="password" value="" placeholder="Konfime modpas" alt="Confirm password input" />
    </div>
}