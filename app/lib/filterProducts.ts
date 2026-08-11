import {Product} from "./../types/product";

export default function filterProducts(products: Product[], search: string) {
    
    const query = search.toLowerCase().trim();

    const filteredProducts = products.filter((product: Product) => {
        return (
            product.name.toLowerCase().trim().includes(query) ||
            product.type.toLowerCase().trim().includes(query) ||
            product.material.toLowerCase().trim().includes(query) ||
            product.color.toLowerCase().trim().includes(query) ||
            product.type.toLowerCase().trim().includes(query) ||
            product.size.toLowerCase().trim().includes(query)

        )
    })

    return filteredProducts;


}