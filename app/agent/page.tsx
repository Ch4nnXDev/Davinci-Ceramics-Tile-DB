'use client'
import {useState} from 'react';
export default function AgentPage() {
    const [prompt, setPrompt] = useState("");
    return (
        <section className="flex flex-col h-screen bg-white">

            <form>
                <input 
                value="text"
                />

            </form>

        </section>
    )
    
}