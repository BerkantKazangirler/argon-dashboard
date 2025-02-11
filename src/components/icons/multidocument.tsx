import { SVGProps } from "react";
const MultiDocumentSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
    <g clipPath="url(#a)">
      <path d="M6.91 5.325a.086.086 0 0 0 .062-.146L5.288 3.466a.086.086 0 0 0-.147.06v1.541a.258.258 0 0 0 .257.258h1.513Z" />
      <path d="M4.732 5.734a.938.938 0 0 1-.279-.667V3.091H2.906a1.38 1.38 0 0 0-1.375 1.375v4.812a1.375 1.375 0 0 0 1.375 1.375H6a1.375 1.375 0 0 0 1.375-1.375V6.013H5.398a.937.937 0 0 1-.666-.28ZM8.492 2.575h1.512a.086.086 0 0 0 .062-.146L8.382.716a.086.086 0 0 0-.148.06v1.541a.258.258 0 0 0 .258.258Z" />
      <path d="M8.492 3.263a.953.953 0 0 1-.945-.946V.341h-2.32a1.29 1.29 0 0 0-1.29 1.289v.773h.905a.877.877 0 0 1 .62.261l2.346 2.385c.164.166.255.39.254.623V8.59h1.14a1.28 1.28 0 0 0 1.267-1.29V3.264H8.492Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5-.003h11v11H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default MultiDocumentSvg;
