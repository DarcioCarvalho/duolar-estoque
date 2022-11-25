import { Warning as PhosporWarning } from 'phosphor-react';

interface WarningProps {
  msg: string;
}

export function Warning({ msg }: WarningProps) {
  return (
    <div className="mx-12 mt-3 p-2 bg-gray-600 rounded-lg">
      <div className="flex flex-col w-full px-10 py-28 bg-gray-100 rounded-lg gap-7 text-xl font-bold items-center">
        <PhosporWarning size={80} />
        {msg}
      </div>
    </div>
  );
}