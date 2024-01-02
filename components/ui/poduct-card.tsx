"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Expand, ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";

interface ProductCardProps {
    data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {

    const router = useRouter()

    const handleClick = () => {
        ;
        router.push(`/product/${data?.id}`)
    }

    return (
        <div
            onClick={handleClick}
            className="bg-white group cursor-pointer rounded-xl p-3 border space-y-4 ">
            {/*Images and Action */}
            <div className="aspect-square rounded-xl bg-grey-100 relative">
                <Image
                    src={data?.images?.[0]?.url}
                    alt="Image"
                    fill
                    className="aspect-square rounded-md object-cover"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={() => { }}
                            icon={<Expand size={20} className="text-gray-600" />}
                        />
                        <IconButton
                            onClick={() => { }}
                            icon={<ShoppingCart size={20} className="text-gray-600" />}
                        />
                    </div>
                </div>
            </div>
            {/* Description */}
            <div>
                <p className="font-semibold text-lg">
                    {data.name}
                </p>
                <p className="text-sm text-gray-500">
                    {data.category?.name}
                </p>
            </div>
            {/* Price */}
            <div className="flex items-center justify-beteen">
                <Currency value={data?.price} />
            </div>
        </div>
    )
}

export default ProductCard;