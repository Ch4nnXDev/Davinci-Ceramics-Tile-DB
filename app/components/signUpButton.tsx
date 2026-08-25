'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {User, LogOutIcon} from 'lucide-react';
import {XIcon} from "lucide-react";

import createClient from '../lib/Supabase/client';
type UserProps = {
    isLoggedIn: boolean
}
export default function UserButton({isLoggedIn}: UserProps) {

    const router = useRouter();

    const supabase = createClient();

    const [clicked, setClicked] = useState(false);

    async function handleSubmit(e: React.SubmitEvent) {

        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const {data, error} = await supabase.auth.signInWithPassword({
            email,
            password
        });
        if (error) {
            console.log(error.message);
            return;
        }

        console.log("Logged in user:", data.user);

        setClicked(false);
        router.refresh();
    }

    async function handleLogOut() {

        const {error} = await supabase.auth.signOut();
        if (error) {
            console.log(error.message);
            return;
        }

        router.refresh();
        

    }


    return (

        <div className="w-15 h-15 rounded-full flex flex-row shadow-lg bg-gray-100 justify-center items-center hover:bg-white">
        
            {isLoggedIn ? (
                <button onClick={handleLogOut} className="p-20">
                    <LogOutIcon width={30} height={30} color="red"/>
                </button>

            ): (
                <button onClick={() => setClicked(true)} className="p-20">
                    <User width={30} height={30} color="black"/>
                </button>


            )}
           
      
       
          


          {clicked && (


            <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">

                <form
                    className="relative flex w-full max-w-md flex-col gap-5 rounded-xl bg-white p-6 shadow-xl sm:p-8"
                    onSubmit={handleSubmit}
                >


                    <button
                        type="button"
                        onClick={() => setClicked(false)}
                        className="absolute right-3 top-3 rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                    >
                        <XIcon size={20} />
                    </button>


                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="text"
                            required
                            className="w-full rounded-md border text-black border-gray-300 px-3 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black"
                        />
                    </div>


                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="password"
                            className="text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>

                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="w-full rounded-md border border-gray-300 text-black px-3 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black"
                        />
                    </div>


                    <button
                        type="submit"
                        className="w-full rounded-md bg-black px-4 py-3 font-medium text-white hover:bg-gray-800"
                    >
                        Login
                    </button>

                </form>

            </div>
                    
        )}
        </div>

        
    )

}