
import Image from "next/image";
import getProductBySlug from "@/app/lib/getProductBySlug";

export default async function Product({params} : {params: {slug: string}}) {

    

    const { slug } = await params;
    const product = await getProductBySlug(slug);

    
    return (
        <section className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">Product: {product?.name}</h1>
            <div className="w-full bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <Image alt="" width={500} height={500} src={product?.picture} />
            </div>
            <div className="w-full flex flex-col items-center mt-10">
                <h3>Size</h3>
                <svg width="100" height="100"></svg>
                <h3>Color</h3>
                <svg width="100" height="100"></svg>
                <h3>Sheet Size</h3>
                <svg width="100" height="100"></svg>

            </div>

            <div className="w-full flex flex-col items-center mt-10">
                <h1>Application Images</h1>
                <Image alt="" width={500} height={500} src={product?.application_picture} />
            </div>

        
            
            
        </section>
    );

}