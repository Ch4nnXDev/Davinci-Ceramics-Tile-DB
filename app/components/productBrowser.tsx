'use client';
import { Product } from "./../types/product";
import ProductGrid from "./productGrid";
import SearchBar from "./searchBar";
import {useState} from 'react';
import filterProducts from "../lib/filterProducts";

export default function ProductBrowser({products} : {products: Product[]}) {

    const [searchQ, setSearchQ] = useState("");
    const [visibleCount, setVisibleCount] = useState(20);
    

    const filteredProducts  = filterProducts(products, searchQ);

    const visibleProducts = filteredProducts.slice(0, visibleCount);


    return (
        <section className="bg-white">

            <SearchBar searchQ={searchQ} setSearchQ={setSearchQ} />


            <ProductGrid products={visibleProducts}/>

            <div className="ml-12">
                <button
                    className="mt-2 px-3 py-3 text-gray-700 border border-gray-500 rounded-lg hover:bg-gray-100"
                    onClick={() => setVisibleCount((prev) => prev + 20)}
                >
                    Load More
                </button>
            </div>


        </section>
    )


}