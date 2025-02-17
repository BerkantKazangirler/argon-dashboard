import { SVGProps } from "react";
export const LowerSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
    <circle cx={17.5} cy={18} r={17} />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.125}
      d="M20.875 18.281 17.5 21.656l-3.375-3.375M17.5 21.188v-6.844"
    />
  </svg>
);
