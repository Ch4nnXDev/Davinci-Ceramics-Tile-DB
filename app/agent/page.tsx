'use client'
import {useState} from 'react';
import ChatBar from '../components/chatBar';
export default function AgentPage() {
    const [prompt, setPrompt] = useState("");
    return (
        <section className="flex flex-col h-screen bg-white">

            <ChatBar />

            

        </section>
    )
    
}