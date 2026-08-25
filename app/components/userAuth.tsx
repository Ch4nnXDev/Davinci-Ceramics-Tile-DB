import { createClient } from "../lib/Supabase/server";
import UserButton from "./signUpButton";

export default async function UserAuth() {

    const supabase = await createClient();

    const {data} = await supabase.auth.getUser();

    const isLogged = !!data.user;

    return (
        <UserButton isLoggedIn={isLogged} />
    )
    
}