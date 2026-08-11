'use client';
import { useState } from 'react';
export default function SearchBar() {
    const [inputValue, setInputValue] = useState('');
    return (
        <section>
            <div className="flex justify-center">
                <input
                    type="text"
                    placeholder="Enter products, brands, or categories..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </section>
    );
}