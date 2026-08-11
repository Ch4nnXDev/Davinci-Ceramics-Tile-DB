import getAllProducts from "../app/lib/getProducts";
import ProductBrowser from "./components/productBrowser";


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
          mt-10
          text-gray-600
          text-lg
          max-w-2xl
          mx-auto
        ">
          Explore our premium collection of tiles, mosaics and architectural
          surfaces.
        </p>

        


      </section>

      <section className="flex flex-col w-full h-screen">
        <ProductBrowser products={products}/>
      </section>



      

    </main>

  );

}