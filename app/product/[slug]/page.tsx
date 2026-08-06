
import Image from "next/image";
import getProductBySlug from "@/app/lib/getProductBySlug";

export default async function Product({params} : {params: {slug: string}}) {

    
    
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    const checkApplicationImage = () => {
        if (product?.application_picture.includes("canva.com/design")) {
            const url = product?.application_picture.split("?")[0] + "?embed";
            return url;

        } else {
            return product?.application_picture;
        }
    };

    return (
        <section className="flex flex-col items-center justify-center min-h-screen py-2 bg-white text-black">
            <h1 className="text-4xl font-bold mb-4">Product: {product?.name}</h1>
            <div className="w-full rounded-lg shadow-md p-6 flex flex-col items-center">
                <Image alt="" width={500} height={500} src={product?.picture} />
            </div>
            <div className="w-full flex flex-col items-center mt-10">
                <h3>Size: {product?.size}</h3>
                
                <svg width="100" height="100"></svg>
                <h3>Color: {product?.color}</h3>
                <svg width="100" height="100"></svg>
                <h3>Material: {product?.material}</h3>
            </div>
            <div className="w-full flex flex-col items-center mt-10">
                <h3>Origin: {product?.origin}</h3>

            </div>

            <div className="w-full flex flex-col items-center mt-10">
                <h1 className="text-2xl font-bold mb-4">Application Images</h1>
                <Image alt="" width={500} height={500} src={checkApplicationImage()} />
            </div>

        
            
            
        </section>
    );

}