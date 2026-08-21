'use client';
import { PenToolIcon } from "lucide-react";
import { Save } from "lucide-react";
import { Product } from "../types/product";
import { useState } from "react";
import { useRouter } from "next/navigation";
type ProductInfoGrid = {
    product: Product | undefined;
}

export default function ProductInfoGrid({product}: ProductInfoGrid) {

    const router = useRouter();

    const [editing, setEditing] = useState(false);

    const [stock, setStock] = useState(product?.stock ?? 0);

    const submitToSheet = async (rowNo: number, stock: string |  number) => {
        
      

        const response = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json ",
            },
            body: JSON.stringify({
                rowNo: rowNo,
                value: stock

            }),
        });

        if (!response.ok) {

            throw new Error("Failed to update stock");
        }

     
        
    }

    const handleSave = async (stock: string | number) => {
        try {

            if (!product) return;
            
            setEditing(false);
            setStock(stock);
            await submitToSheet(product?.rowNo, stock);
            router.refresh();

        } catch (error) {
            console.log("Error Saving", error);
        }
        
    }

    return (

        <div className="w-full max-w-xl mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-base sm:text-lg">
            <div className="border-b pb-3">
                <span className="font-semibold">Size</span>
                <p className="text-gray-600">{product?.size}</p>
            </div>

            <div className="border-b pb-3">
                <span className="font-semibold">Color</span>
                <p className="text-gray-600">{product?.color}</p>
            </div>

            <div className="border-b pb-3">
                <span className="font-semibold">Material</span>
                <p className="text-gray-600">{product?.material}</p>
            </div>

            <div className="border-b pb-3">
                <span className="font-semibold">Origin</span>
                <p className="text-gray-600">{product?.origin}</p>
            </div>
            <div className="border-b pb-3">
                <span className="font-semibold">Stock</span>
                <div className="flex flex-row justify-between">

                    {editing ? (<input value={stock} onChange={(e) => setStock(e.target.value)} className="bg-gray-100 border-2"></input>) : (<p className="text-gray-600">{stock}</p>) }
                    
                    
                    {!editing && 
                    <button onClick={() => setEditing(true)}>

                        

                        <PenToolIcon height={20} width={20} />
                    </button>
                    }
                    

                </div>
                
            </div>
            <div>

                {editing && <button onClick={ async () => handleSave(stock)}><Save /></button>}

                
            </div>
        </div>
        );
}