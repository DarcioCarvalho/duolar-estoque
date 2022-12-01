interface ProductHeightIconProps {
  width?: number;
}

export function ProductHeightIcon({ width = 56 }: ProductHeightIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}  /* "56" */
      height={Math.floor(width * 0.8215)}  /* "46" */
      fill="none"
      viewBox="0 0 56 46"
    >
      <path
        stroke="#7C7C8A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M46.307 32.26l4 4 4-4M46.307 14.26l4-4 4 4M50.306 36.26v-26"
      ></path>
      <path
        fill="#0369A1"
        d="M6.395 13.644a1.424 1.424 0 00-.193.721l.023 17.332a1.424 1.424 0 00.722 1.23l15.479 8.68c.208.12.445.18.685.176l.134-18.774-16.85-9.365z"
        opacity="0.7"
      ></path>
      <path
        stroke="#7C7C8A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.629"
        d="M39.971 31.653l-.022-17.332a1.424 1.424 0 00-.722-1.23l-15.479-8.68a1.37 1.37 0 00-1.37.002l-15.456 8.72a1.424 1.424 0 00-.72 1.232l.023 17.332a1.424 1.424 0 00.722 1.23l15.479 8.68a1.37 1.37 0 001.37-.001l15.456-8.721a1.423 1.423 0 00.72-1.232v0z"
      ></path>
      <path
        stroke="#7C7C8A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.629"
        d="M39.755 13.6l-16.51 9.41-16.85-9.366M23.245 23.01l-.134 18.773"
      ></path>
    </svg>
  );
}
