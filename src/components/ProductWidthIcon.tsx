
interface ProductWidthIconProps {
  width?: number;
}

export function ProductWidthIcon({ width = 52 }: ProductWidthIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width} /* "52" */
      height={Math.floor(width * 1.0577)} /* "55" */
      fill="none"
      viewBox="0 0 52 55"
    >
      <path
        stroke="#7C7C8A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M28.237 45.295l-1.464 5.464 5.464 1.464M43.826 36.295l5.464 1.464-1.464 5.464M26.773 50.76l22.517-13"
      ></path>
      <path
        fill="#0369A1"
        d="M6.115 13.644a1.424 1.424 0 00-.192.721l.023 17.332a1.423 1.423 0 00.722 1.23l15.48 8.68c.209.12.446.18.686.176l.134-18.774-16.853-9.365z"
        opacity="0.7"
      ></path>
      <path
        stroke="#7C7C8A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.629"
        d="M39.696 31.653l-.023-17.332a1.424 1.424 0 00-.722-1.23l-15.48-8.68a1.371 1.371 0 00-1.371.002l-15.458 8.72a1.424 1.424 0 00-.719 1.232l.023 17.332a1.424 1.424 0 00.722 1.23l15.48 8.68a1.37 1.37 0 001.371-.001l15.458-8.721a1.424 1.424 0 00.719-1.232v0z"
      ></path>
      <path
        stroke="#7C7C8A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.629"
        d="M39.479 13.6l-16.511 9.41-16.853-9.366M22.968 23.01l-.134 18.773"
      ></path>
    </svg>
  );
}
