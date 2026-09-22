
'use client';

import ProductCard from '../components/product';
import type { Product } from '../types/product';
import { ArrowUp } from 'lucide-react';
import { FormEvent, useState } from 'react';

type Message = {
    role: 'user' | 'assistant';
    content: string;
    products?: Product[];
};

export default function ChatBar() {
    const [prompt, setPrompt] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);

    async function sendMessage(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const message = prompt.trim();

        if (!message || loading) {
            return;
        }

        setPrompt('');

        // Add user's message immediately
        setMessages((previous) => [
            ...previous,
            {
                role: 'user',
                content: message,
            },
        ]);

        setLoading(true);

        try {
            const response = await fetch('/api/agent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to get agent response');
            }

            const data = await response.json();

            // Add agent response + products
            setMessages((previous) => [
                ...previous,
                {
                    role: 'assistant',
                    content: data.response,
                    products: data.products ?? [],
                },
            ]);
        } catch (error) {
            console.error('Agent request failed:', error);

            setMessages((previous) => [
                ...previous,
                {
                    role: 'assistant',
                    content: 'Something went wrong. Please try again.',
                },
            ]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="flex h-screen flex-col bg-white">

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-8">
                <div className="mx-auto w-full max-w-5xl space-y-8">

                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={
                                message.role === 'user'
                                    ? 'flex justify-end'
                                    : 'flex justify-start'
                            }
                        >
                            <div
                                className={
                                    message.role === 'user'
                                        ? 'max-w-[75%] rounded-2xl bg-black px-4 py-3 text-white'
                                        : 'w-full text-gray-900'
                                }
                            >

                                {/* Message text */}
                                <p className="whitespace-pre-wrap">
                                    {message.content}
                                </p>

                                {/* Products returned by the agent */}
                                {message.products &&
                                    message.products.length > 0 && (
                                        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                            {message.products.map(
                                                (product, productIndex) => (
                                                    <ProductCard
                                                        key={
                                                            product.slug ??
                                                            `${product.name}-${productIndex}`
                                                        }
                                                        product={product}
                                                    />
                                                )
                                            )}
                                        </div>
                                    )}

                            </div>
                        </div>
                    ))}

                    {/* Loading state */}
                    {loading && (
                        <div className="flex justify-start">
                            <div className="rounded-2xl bg-gray-100 px-4 py-3 text-sm text-gray-500">
                                Searching the catalogue...
                            </div>
                        </div>
                    )}

                </div>
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 bg-white p-4">
                <form
                    onSubmit={sendMessage}
                    className="mx-auto flex w-full max-w-3xl items-end gap-2 rounded-2xl border border-gray-300 bg-white p-2 shadow-sm"
                >
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={(e) => {
                            if (
                                e.key === 'Enter' &&
                                !e.shiftKey
                            ) {
                                e.preventDefault();
                                e.currentTarget.form?.requestSubmit();
                            }
                        }}
                        placeholder="Ask about tiles..."
                        rows={1}
                        className="max-h-32 min-h-12 flex-1 resize-none bg-transparent px-3 py-3 text-black outline-none"
                    />

                    <button
                        type="submit"
                        disabled={!prompt.trim() || loading}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
                    >
                        <ArrowUp size={20} />
                    </button>
                </form>
            </div>

        </section>
    );
}

