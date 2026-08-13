
import Image from "next/image";
import getProductBySlug from "@/app/lib/getProductBySlug";

export const dynamic = "force-dynamic";

export default async function Product({params} : {params: {slug: string}}) {

    
    
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    const isCanva = product?.application_picture.includes("canva.com/design");

    const checkApplicationImage = () => {
        if (isCanva) {
            const url = product?.application_picture.split("?")[0] + "?embed";
            return url;

        } else {
            return product?.application_picture;
        }
    };

    return (


        <section className="min-h-screen bg-white text-gray-900 font-sans px-5 sm:px-8 lg:px-12 py-10">
            <div className="max-w-6xl mx-auto flex flex-col items-center">


                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-center mb-8 mt-10">
                    Product: {product?.name}
                </h1>

                <div className="w-full flex justify-center rounded-xl p-2 sm:p-10">
                    <Image
                        alt=""
                        width={500}
                        height={500}
                        src={product?.picture}
                        className="object-contain w-full max-w-md rounded-xl"
                    />
                </div>


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
                </div>


                <div className="w-full mt-16">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                        Application Images
                    </h2>

                    <div className="w-full flex justify-center rounded-xl overflow-hidden bg-gray-50 p-4 sm:p-6">
                        {isCanva ? (
                            <iframe
                                src={checkApplicationImage()}
                                width="100%"
                                height="800"
                                className="w-full max-w-5xl rounded-lg"
                            />
                        ) : (
                            <Image
                                alt=""
                                width={1000}
                                height={1000}
                                quality={100}
                                src={product?.application_picture}
                                className="w-full max-w-5xl object-contain"
                            />
                        )}
                    </div>
                </div>

            </div>
        </section>
    );

}