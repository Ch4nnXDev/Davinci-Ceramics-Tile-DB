'use client'
import { ArrowUp } from 'lucide-react';
import {useState} from "react";

export default function ChatBar() {
    const [prompt, setPrompt] = useState("");

    return (
        <form>
            <input
                type="text"
                placeholder="Enter a task or a query"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="bg-white border border-gray-300 rounded-md px-4 py-4 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"

            />
            <button className="p-10 rounded-lg bg-gray-400" >
                <ArrowUp 
                size={23}
                />

            </button>
        </form>

    )
    


    
}