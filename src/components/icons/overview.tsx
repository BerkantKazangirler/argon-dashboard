import { SVGProps } from "react";
const OverviewSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
    <g clipPath="url(#a)">
      <path d="M10.223 2.925a.087.087 0 0 0 .042-.074.086.086 0 0 0-.043-.074L6.941.87a1.378 1.378 0 0 0-1.382 0L2.278 2.777a.086.086 0 0 0 0 .148l3.929 2.311a.086.086 0 0 0 .087 0l3.929-2.311ZM1.91 3.51a.086.086 0 0 0-.129.074V7.32a1.031 1.031 0 0 0 .512.89l3.484 2.088a.086.086 0 0 0 .13-.074V5.89a.086.086 0 0 0-.044-.075L1.91 3.51ZM6.594 5.905v4.318a.086.086 0 0 0 .129.074l3.483-2.089a1.031 1.031 0 0 0 .513-.888V3.584a.085.085 0 0 0-.043-.074.086.086 0 0 0-.086 0L6.637 5.83a.086.086 0 0 0-.043.075Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.75-.003h11v11h-11z" />
      </clipPath>
    </defs>
  </svg>
);
export default OverviewSvg;
