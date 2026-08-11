'use client'
import { Product } from "./../types/product";
import ProductCard from "./product";



export default function ProductGrid({products}: {products: Product[]}) {
    return (
        <section className="p-10 w-full">
            

                <div className="
                    max-w-7xl 
                    mx-auto
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    gap-8"
                >
                {products.map((product: Product) => (
                    <div key={product.name}>
                        <ProductCard product={product}/>

                    </div>
                    
                

            ))}

            </div>
        </section>
    )
}