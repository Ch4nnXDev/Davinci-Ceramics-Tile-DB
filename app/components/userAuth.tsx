import { createClient } from "../lib/Supabase/server";
import UserButton from "./signUpButton";

export default async function UserAuth() {

    const supabase = await createClient();

    const {data} = await supabase.auth.getClaims();

    const isLogged = !!data?.claims?.sub;

    return (
        <UserButton isLoggedIn={isLogged} />
    )
    
}