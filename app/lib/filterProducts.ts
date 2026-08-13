import {Product} from "./../types/product";

export default function filterProducts(products: Product[], search: string) {
    
    const query = search.toLowerCase().trim().replace(" ", "")
    const filteredProducts = products.filter((product: Product) => {
        return products.map((product) => {
            const name = product.name.toLowerCase().trim().replace(" ", "")
            const type = product.type.toLowerCase().trim().replace(" ", "")
            const material = product.material.toLowerCase().trim().replace(" ", "") 
            const color = product.color.toLowerCase().trim().replace(" ", "")
            const size = product.size.toLowerCase().trim().replace(" ", "")


            let score = 0;

            if (name === query) score += 100;
            else if (name.startsWith(query)) score += 80
            else if (name.includes(query)) score += 60

            if (material === query) score += 40;
            else if (material.includes(query)) score += 30;

            if (type === query) score += 30;
            else if (type.includes(query)) score += 20;

            if (color === query) score += 20;
            else if (color.includes(query)) score += 15;

            if (size === query) score += 10;
            else if (size.includes(query)) score += 5;


            return {
                product,
                score
            };

        }).filter((item) => item.score > 0).sort((a, b) => b.score - a.score).map((item) => item.product);
            
        
    })

    return filteredProducts;


}