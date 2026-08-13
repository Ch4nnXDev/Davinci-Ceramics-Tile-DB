import getAllProducts from "./getProducts";


export default async function getProductBySlug(slug: string) {
    "use cache";
    try {
        const products = await getAllProducts();
        return products.find((product) => product.slug === slug);
        
    } catch (error) {
        console.error("Failed Fetching The Speicific Product", error)
    };
    
}