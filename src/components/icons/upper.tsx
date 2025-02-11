import { SVGProps } from "react";
const UpperSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
    <circle cx={17.5} cy={18} r={17} />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.125}
      d="m14.125 17.719 3.375-3.375 3.375 3.375M17.5 14.813v6.843"
    />
  </svg>
);
export default UpperSvg;
