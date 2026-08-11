'use client';
import { Product } from "./../types/product";
import ProductGrid from "./productGrid";
import SearchBar from "./searchBar";
import {useState} from 'react';
import filterProducts from "../lib/filterProducts";

export default function ProductBrowser({products} : {products: Product[]}) {

    const [searchQ, setSearchQ] = useState("");

    const filteredProducts  = filterProducts(products, searchQ);

    return (
        <section className="bg-white">

            <SearchBar searchQ={searchQ} setSearchQ={setSearchQ} />

            <ProductGrid products={filteredProducts}/>
        </section>
    )


}