import { PenToolIcon } from "lucide-react";
import { Product } from "../types/product";

type ProductInfoGrid = {
    product: Product | undefined;
}

export default function ProductInfoGrid({product}: ProductInfoGrid) {

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
                    <p className="text-gray-600">{product?.stock}</p>
                    <button>
                        <PenToolIcon height={20} width={20} />
                    </button>

                </div>
                
            </div>
        </div>
        );
}