import { useNavigate, useParams } from 'react-router-dom';
import { CaretLeft } from 'phosphor-react';

import { Heading } from '../components/Heading';
import { Link } from '../components/Link';
import { ProductDetailCard } from '../components/ProductDetailCard';
import { Warning } from '../components/Warning';

import { getStock } from '../utils/stockList';

import duolarLogo from '../assets/duolar-logo.png'
import stockLogo from '../assets/stock-logo.png'


export function ProductDetail() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const product = getStock(Number(slug));

  return (
    <div className="flex flex-col max-w-300 h-screen mx-auto">

      <header className="flex h-21 md:h-32 mt-3 md:mt-10 px-2 md:px-10 items-start justify-between">
        <img src={duolarLogo} className="h-10 md:h-20" alt="Duolar logo" />

        <Heading className="mt-0.5">
          PRODUTOS
        </Heading>

        <img src={stockLogo} className="h-2/5 sm:h-2/3 md:h-3/4 lg:h-full" alt="Estoque logo" />

      </header>

      <main className="px-12">

        <Link
          className="flex flex-row ml-1 md:ml-6 relative -top-6 items-center w-min"
          onClick={() => navigate("/"   /* `${import.meta.env.VITE_GITHUB_BASE_PROJECT}/` */)}
        >

          <CaretLeft weight="bold" className="w-5 h-5 md:w-7 md:h-7" />
          Voltar

        </Link>

        {product ?
          <ProductDetailCard stockProduct={product} /> :
          <Warning msg="PRODUTO NÃO ENCONTRADO!!!" />
        }

      </main>

    </div>
  );
}