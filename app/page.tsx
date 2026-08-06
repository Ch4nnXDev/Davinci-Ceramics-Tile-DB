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

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products`, {
    next: {
      revalidate: 3600,
    },
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


    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-12">


      {/* Header */}

      <section className="max-w-7xl mx-auto mb-12 text-center">

        <h1 className="
          text-4xl 
          md:text-6xl 
          font-extrabold 
          tracking-tight
          text-gray-900
        ">
          Davinci Tile Catalogue
        </h1>


        <p className="
          mt-4
          text-gray-600
          text-lg
          max-w-2xl
          mx-auto
        ">
          Explore our premium collection of tiles, mosaics and architectural
          surfaces.
        </p>


      </section>



      {/* Product Grid */}

      <section className="
        max-w-7xl 
        mx-auto
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-8
      ">


        {products.map((product) => (


          <article
            key={product.code}
            className="
              group
              bg-white
              rounded-2xl
              overflow-hidden
              border
              border-gray-200
              shadow-sm
              hover:shadow-2xl
              transition-all
              duration-300
              hover:-translate-y-2
            "
          >


            {/* Image */}

            <div className="
              relative
              h-72
              overflow-hidden
              bg-gray-100
            ">


              <Image

                src={product.image}
                alt={product.code}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "

              />


              {/* Overlay */}

              <div className="
                absolute
                inset-0
                bg-black/0
                group-hover:bg-black/10
                transition
              "/>


            </div>



            {/* Content */}


            <div className="p-6">


              <h2 className="
                text-2xl
                font-bold
                text-gray-900
                mb-4
                group-hover:text-blue-700
                transition
              ">
                {product.code}
              </h2>



              <div className="
                space-y-2
                text-sm
                text-gray-600
              ">


                <p>
                  <span className="font-semibold text-gray-900">
                    Category:
                  </span>{" "}
                  {product.category}
                </p>



                <p>
                  <span className="font-semibold text-gray-900">
                    Material:
                  </span>{" "}
                  {product.material}
                </p>



                <p>
                  <span className="font-semibold text-gray-900">
                    Brand:
                  </span>{" "}
                  {product.brand}
                </p>



                <p>
                  <span className="font-semibold text-gray-900">
                    Origin:
                  </span>{" "}
                  {product.country}
                </p>



                {
                  product.size && (

                    <p>
                      <span className="font-semibold text-gray-900">
                        Size:
                      </span>{" "}
                      {product.size}
                    </p>

                  )
                }


              </div>



              {/* Bottom Accent */}

              <div className="
                mt-6
                pt-4
                border-t
                border-gray-100
                flex
                justify-between
                items-center
              ">


                <span className="
                  text-xs
                  uppercase
                  tracking-wider
                  text-gray-400
                ">
                  Premium Collection
                </span>


                <span className="
                  h-2
                  w-2
                  rounded-full
                  bg-green-500
                "/>


              </div>


            </div>


          </article>


        ))}


      </section>


    </main>

  );

}