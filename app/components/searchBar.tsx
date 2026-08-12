'use client';

type SearchBarProps = {
    searchQ: string
    setSearchQ: (value: string) => void;
}
export default function SearchBar({searchQ, setSearchQ} : SearchBarProps) {
    return (
        <section>
            <div className="flex justify-center">
                <input
                    type="text"
                    placeholder="Enter products, brands, or categories..."
                    value={searchQ}
                    onChange={(e) => setSearchQ(e.target.value)}
                    className="bg-white border border-gray-300 rounded-md px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                />
            </div>
        </section>
    );
}

