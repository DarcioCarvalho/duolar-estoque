import { useEffect, useState } from 'react';
import { MagnifyingGlass } from 'phosphor-react';

import { Stock } from '../types/stock';

import { Heading } from '../components/Heading';
import { ProductCard } from '../components/ProductCard';
import { TextInput } from '../components/TextInput';

import { stockList } from '../utils/stockList';
import { removeAccents } from '../utils/StringUtil';

import duolarLogo from '../assets/duolar-logo.png'
import stockLogo from '../assets/stock-logo.png'
import { useSearchContext } from '../context/SearchContext';


export function ProductsList() {
  const stockSorted = stockList.filter(stock => stock.amount).
    sort((a, b) => a.product.name.localeCompare(b.product.name));

  const [stockListSorted, setStockListSorted] = useState<Stock[]>(stockSorted);

  const { productSearch, setProductSearch } = useSearchContext();

  useEffect(() => {
    const stockListFound = stockSorted.filter(stock =>
      removeAccents(stock.product.name.toUpperCase()).includes(
        removeAccents(productSearch.toUpperCase())) ||
      removeAccents(stock.product.branch.toUpperCase()).includes(
        removeAccents(productSearch.toUpperCase()))
    );
    setStockListSorted(stockListFound);

  }, [productSearch]);

  return (
    <div className="flex flex-col max-w-300 h-screen mx-auto">

      <header className="flex h-16 md:h-32 mt-3 md:mt-10 px-2 md:px-10 items-start justify-between">
        <img src={duolarLogo} className="h-10 md:h-20" alt="Duolar logo" />

        <Heading className="mt-0.5">
          PRODUTOS
        </Heading>

        <img src={stockLogo} className="h-2/5 sm:h-2/3 md:h-3/4 lg:h-full" alt="Estoque logo" />

      </header>

      <main className="px-12">

        <TextInput.Root>
          <TextInput.Icon>
            <MagnifyingGlass />
          </TextInput.Icon>

          <TextInput.Input
            placeholder="Buscar Produto"
            value={productSearch}
            onChange={(event) => setProductSearch(event.target.value)}
          />
        </TextInput.Root>

        <div className="mt-12 mb-8 grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-6 md:gap-y-10 justify-center">

          {stockListSorted.map((stock) => <ProductCard key={stock.id} stockProduct={stock} />)}

        </div>


      </main>


    </div>
  );
}