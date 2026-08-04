import Image from "next/image";


type SheetProductRow = [
  string, // code
  string, // category
  string, // material
  string, // brand
  string, // country
  string, // size
  string  // image
];


type Product = {
  code: string;
  category: string;
  material: string;
  brand: string;
  country: string;
  size: string;
  image: string;
};


async function getProducts(): Promise<Product[]> {

  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });


  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }


  const data: {
    success: boolean;
    products: SheetProductRow[];
  } = await res.json();


  return data.products
    .filter((item) => item[0] && item[6]) // remove empty rows
    .map((item) => ({
      code: item[0],
      category: item[1],
      material: item[2],
      brand: item[3],
      country: item[4],
      size: item[5],
      image: item[6],
    }));

}



export default async function Home() {

  const products = await getProducts();


  return (

    <main className="min-h-screen bg-gray-100 p-10">


      <h1 className="text-5xl font-bold text-center mb-10">
        Davinci Tile Catalogue
      </h1>



      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-8
      ">


        {products.map((product) => (


          <div
            key={product.code}
            className="
              bg-white 
              rounded-xl 
              shadow-md 
              overflow-hidden
              hover:shadow-xl
              transition
            "
          >


            {/* Product Image */}

            <div className="relative h-64 w-full">


              <Image
                src={product.image}
                alt={product.code}
                fill
                className="object-cover"
              />


            </div>



            {/* Product Details */}

            <div className="p-5">


              <h2 className="text-xl font-bold mb-2">
                {product.code}
              </h2>



              <p className="text-black">
                Category: {product.category}
              </p>



              <p className="text-black">
                Material: {product.material}
              </p>



              <p className="text-black">
                Brand: {product.brand}
              </p>



              <p className="text-black">
                Origin: {product.country}
              </p>



              {
                product.size && (

                  <p className="text-black">
                    Size: {product.size}
                  </p>

                )
              }



            </div>


          </div>


        ))}


      </div>


    </main>

  );

}