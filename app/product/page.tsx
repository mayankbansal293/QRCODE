"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function ProductPage() {
  const params = useSearchParams();

  const name = params.get("name");
  const title = params.get("title");
  const price = params.get("price");
  const discountPrice = params.get("discountPrice");
  const size = params.get("size");
  const mainImage = params.get("mainImage");
  const thumbnail = params.get("thumbnail");

  return (
    <div className="flex flex-col md:flex-row p-4 md:p-8">
      <div className="w-full md:w-1/4 mb-4 md:mb-0">
        <Image
          src={"https://www.sephora.com/productimages/sku/s2527844-main-zoom.jpg?imwidth=1224"}
          alt="Main Product"
          width={50}
          height={50}
          className="mb-4 w-full"
        />
      </div>
      <div className="w-full md:w-3/4 pl-0 md:pl-8">
        <h1 className="text-2xl font-bold">{name || "Product Name"}</h1>
        <h2 className="text-xl mb-2">{title || "Product Title"}</h2>
        <div className="mb-4">
          <span className="text-lg font-bold">${price || "$0.00"}</span>
          {discountPrice && (
            <span className="text-sm line-through ml-2">
              ${discountPrice} (5% off)
            </span>
          )}
        </div>
        <div className="mb-4">
          <label>Size:</label>
          <select className="border p-2 ml-2">
            <option>{size || "Default Size"}</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="border p-2 text-center">Get It Shipped</button>
          <button className="border p-2 text-center">Auto-Replenish</button>
          <button className="border p-2 text-center">Same-Day Delivery</button>
        </div>
        <div className="mt-4">
          <button
            className="bg-red-600 text-white p-2 w
    -full"
          >
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
}
