import Image from "next/image";
import { Product } from "./../types/product";


type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
    
  return (

    <article
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
      <div
        className="
          relative
          h-72
          overflow-hidden
          bg-gray-100
        "
      >
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
        <h2
          className="
            text-2xl
            font-bold
            text-gray-900
            mb-4
          "
        >
          {product.name}
        </h2>

        <div
          className="
            space-y-2
            text-sm
            text-gray-600
          "
        >
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

          {product.size && (
            <p>
              <span className="font-semibold text-gray-900">
                Size:
              </span>{" "}
              {product.size}
            </p>
          )}
        </div>

        <div
          className="
            mt-6
            pt-4
            border-t
            border-gray-100
            flex
            justify-between
            items-center
          "
        >
          <span
            className="
              text-xs
              uppercase
              tracking-wider
              text-gray-400
            "
          >
            Premium Collection
          </span>

          <span className="h-2 w-2 rounded-full bg-green-500" />
        </div>
      </div>
    </article>
  );
}

