import Image from "next/image";
import getAllProducts from "../app/lib/getProducts";

type Product = {
  name: string;
  type: string;
  material: string;
  color: string;
  origin: string;
  size: string;
  picture: string;
  application_picture: string;
  slug: string;
};





export default async function Home() {

  const products = await getAllProducts();


  return (

    <main className="
      min-h-screen 
      bg-gradient-to-br 
      from-gray-50 
      via-white 
      to-gray-100 
      px-6 
      py-12
    ">


      <section className="
        max-w-7xl 
        mx-auto 
        mb-12 
        text-center
      ">

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


        {
          products.map((product) => (

            <article
              key={product.slug}
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


              <div className="
                relative
                h-72
                overflow-hidden
                bg-gray-100
              ">


                <Image

                  src={product.picture}
                  alt={product.name}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "

                />


              </div>



              <div className="p-6">


                <h2 className="
                  text-2xl
                  font-bold
                  text-gray-900
                  mb-4
                ">
                  {product.name}
                </h2>



                <div className="
                  space-y-2
                  text-sm
                  text-gray-600
                ">


                  <p>
                    <span className="font-semibold text-gray-900">
                      Type:
                    </span>{" "}
                    {product.type}
                  </p>


                  <p>
                    <span className="font-semibold text-gray-900">
                      Material:
                    </span>{" "}
                    {product.material}
                  </p>


                  <p>
                    <span className="font-semibold text-gray-900">
                      Color:
                    </span>{" "}
                    {product.color}
                  </p>


                  <p>
                    <span className="font-semibold text-gray-900">
                      Origin:
                    </span>{" "}
                    {product.origin}
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

          ))
        }


      </section>


    </main>

  );

}