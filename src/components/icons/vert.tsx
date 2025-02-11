import { SVGProps } from "react";
const VertSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="currentColor"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#A0AEC0"
        d="M10.5 6.667c.917 0 1.667-.75 1.667-1.667s-.75-1.667-1.667-1.667c-.916 0-1.666.75-1.666 1.667s.75 1.667 1.666 1.667Zm0 1.666c-.916 0-1.666.75-1.666 1.667s.75 1.667 1.666 1.667c.917 0 1.667-.75 1.667-1.667s-.75-1.667-1.667-1.667Zm0 5c-.916 0-1.666.75-1.666 1.667s.75 1.667 1.666 1.667c.917 0 1.667-.75 1.667-1.667s-.75-1.667-1.667-1.667Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5 0h20v20H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default VertSvg;
