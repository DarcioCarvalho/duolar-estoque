import { useNavigate } from "react-router-dom";
import { CameraSlash } from "phosphor-react";
import { Text } from "../components/Text";
import { Stock } from "../types/stock";

interface ProductCardProps {
  stockProduct: Stock;
}

export function ProductCard({ stockProduct }: ProductCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="max-w-53 h-87 p-2 bg-gray-600 rounded-lg hover:cursor-pointer"
      onClick={() => navigate(`/productDetail/${stockProduct.id}`)}
    >
      <div className="flex flex-col max-w-49 h-83 p-2 bg-gray-100 rounded-lg">

        {stockProduct.product.imageURL ?
          <div className="w-45 h-45">
            <img
              className="max-h-45 mx-auto"
              src={`/assets/products/${stockProduct.product.imageURL}`}
              alt={`${stockProduct.product.name} - ${stockProduct.product.branch}`}
            />
          </div>
          :
          <div className="flex flex-col gap-2 w-45 h-45 bg-gray-200 font-bold text-gray-100 items-center justify-center" >
            <CameraSlash size={76} />
            SEM FOTO!!!
          </div>
        }

        <div className="flex flex-col h-17 mt-1 gap-1">
          <Text className="w-44 text-gray-800 text-sm leading-4">
            {stockProduct.product.name}
          </Text>

          <Text className="w-44 text-sky-700 text-sm font-semibold uppercase">
            {stockProduct.product.branch}
          </Text>
        </div>

        <div className="flex gap-1 mt-2 pt-1">
          <Text className=" text-gray-400 text-sm">
            Estoque:
          </Text>

          <Text className=" text-blue-400 text-sm font-bold">
            {String(stockProduct.amount).padStart(2, "0")}
          </Text>
        </div>

        {stockProduct.isAssembled &&
          <div className="w-25 h-6 mt-2 mx-auto bg-orange-700 rounded-xl items-center text-center">
            <Text className="text-gray-100 text-sm font-black uppercase">
              Montado
            </Text>
          </div>}

      </div>
    </div>
  );
}