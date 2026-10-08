'use client'
import {useState, useEffect} from "react";
import createClient from "../lib/Supabase/client";
export default function Auth() {

    const [isLogged, setIsLogged] = useState<boolean | null>();

    useEffect(() => {

        const supabase = createClient()

        const getSession = async () => {
            const {data} = await supabase.auth.getSession();
            setIsLogged(!!data.session);
        }


        getSession();

      

        

        

    }, []);



}