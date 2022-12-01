interface ProductDepthIconProps {
  width?: number;
}

export function ProductDepthIcon({ width = 52 }: ProductDepthIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width} /* "52" */
      height={Math.floor(width * 1.0385)} /* "54" */
      fill="none"
      viewBox="0 0 52 54"
    >
      <path
        stroke="#7C7C8A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8.244 35.815L2.78 37.28l1.464 5.464M23.833 44.815l1.464 5.464-5.464 1.464M2.78 37.28l22.517 13"
      ></path>
      <path
        fill="#0369A1"
        d="M12.122 13.164a1.424 1.424 0 00-.192.721l.022 17.332a1.423 1.423 0 00.723 1.23l15.48 8.68c.208.12.445.18.685.176l.134-18.774-16.852-9.365z"
        opacity="0.7"
      ></path>
      <path
        stroke="#7C7C8A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.629"
        d="M45.702 31.173l-.022-17.332a1.423 1.423 0 00-.722-1.23l-15.48-8.68a1.371 1.371 0 00-1.372.002l-15.457 8.72a1.424 1.424 0 00-.72 1.232l.023 17.332a1.424 1.424 0 00.723 1.23l15.48 8.68a1.37 1.37 0 001.37 0l15.458-8.722a1.424 1.424 0 00.72-1.232v0z"
      ></path>
      <path
        stroke="#7C7C8A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.629"
        d="M45.485 13.12l-16.51 9.41-16.853-9.366M28.974 22.53l-.134 18.773"
      ></path>
    </svg>
  );
}
