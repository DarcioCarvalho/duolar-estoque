import { CameraSlash } from "phosphor-react";
import { Text } from "./Text";
import { Stock } from "../types/stock";
import { ProductWidthIcon } from "./ProductWidthIcon";
import { ProductDimensionProperty } from "./ProductDimensionProperty";
import { ProductHeightIcon } from "./ProductHeightIcon";
import { ProductDepthIcon } from "./ProductDepthIcon";

interface ProductDetailCardProps {
  stockProduct: Stock;
}

export function ProductDetailCard({ stockProduct }: ProductDetailCardProps) {
  console.log('meta: ', import.meta.env.BASE_URL);

  return (
    <div className="-mt-4 md:mt-3 p-1.5 md:p-2 bg-gray-600 rounded-lg">
      <div className="flex flex-col md:flex-row w-full px-5 py-5 bg-gray-100 rounded-lg gap-3 md:gap-7">

        {stockProduct.product.imageURL ?
          <div className="flex w-full md:w-1/2 h-42 md:h-128 items-center">

            <img
              className="mx-auto max-h-42 md:max-h-128"
              src={`${import.meta.env.BASE_URL}assets/products/${stockProduct.product.imageURL}`}
              alt={`${stockProduct.product.name} - ${stockProduct.product.branch}`}
            />

          </div>
          :
          <div className="flex m-auto md:m-4 w-full md:w-1/2 h-42 md:h-128 items-center md:items-start" >
            <div className="flex flex-col mx-auto w-42 md:w-85 h-42 md:h-85 gap-0 md:gap-2  bg-gray-200 text-xs md:text-lg font-bold text-gray-100 items-center justify-center">
              <CameraSlash className="w-10 md:w-19 h-10 md:h-19" />
              SEM FOTO!!!
            </div>
          </div>
        }


        <div className="flex flex-col w-full md:w-1/2 gap-1">
          <div className="flex flex-col h-24 md:h-48 mt-1 md:mt-7 gap-1 text-md md:text-3xl">
            <Text className=" text-gray-800">
              {stockProduct.product.name}
            </Text>

            <Text className="mt-1 md:mt-5 text-sky-700 font-semibold uppercase">
              {stockProduct.product.branch}
            </Text>
          </div>

          <div className="flex gap-1 mt-2 md:mt-8 pt-1 text-base md:text-2xl">
            <Text className=" text-gray-400">
              Estoque:
            </Text>

            <Text className=" text-blue-400 font-bold">
              {String(stockProduct.amount).padStart(2, "0")}
            </Text>
          </div>

          {stockProduct.product.size &&
            <div className="flex flex-col gap-3 mt-5 text-base md:text-xl">
              <Text className="text-gray-400 font-semibold ">
                Dimensões do produto
              </Text>

              <div className="ml-2 grid grid-cols-1 lg:grid-cols-2 gap-y-1.5 text-gray-400 text-sm md:text-lg">

                <ProductDimensionProperty
                  iconProperty={<ProductWidthIcon width={49} />}
                  title="Largura:"
                  value={stockProduct.product.size.width}
                />

                <ProductDimensionProperty
                  iconProperty={<ProductHeightIcon width={52} />}
                  title="Altura:"
                  value={stockProduct.product.size.height}
                />

              </div>

              {stockProduct.product.size.depth &&
                <div className="ml-2 -mt-2 smaller:mt-0 text-gray-400 text-sm md:text-lg">
                  <ProductDimensionProperty
                    iconProperty={<ProductDepthIcon width={49} />}
                    title="Profundidade:"
                    value={stockProduct.product.size.depth}
                  />
                </div>
              }


            </div>
          }

          {stockProduct.isAssembled &&
            <div className="flex w-32 md:w-64 h-7 md:h-16 mt-5 md:mt-20 mx-auto bg-orange-600 opacity-75 rounded-4xl items-center justify-center">
              <Text className="text-gray-100 text-sm md:text-2xl font-black uppercase">
                Montado
              </Text>
            </div>}

        </div>

      </div>
    </div>
  );
}