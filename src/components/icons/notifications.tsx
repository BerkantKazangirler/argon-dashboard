import { SVGProps } from "react";
const SvgNotifications = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
    <g clipPath="url(#a)">
      <path d="m10.314 8-.114-.14c-.516-.623-.828-1-.828-2.765 0-.914-.218-1.664-.65-2.227-.317-.416-.747-.73-1.313-.964a.07.07 0 0 1-.02-.015C7.187 1.207 6.63.749 6 .749s-1.186.458-1.39 1.139a.073.073 0 0 1-.018.015c-1.322.544-1.964 1.588-1.964 3.19 0 1.767-.311 2.144-.827 2.767l-.115.138a.824.824 0 0 0-.11.882.876.876 0 0 0 .806.494h7.24c.35 0 .655-.189.8-.492a.825.825 0 0 0-.108-.883ZM6 11.25a1.876 1.876 0 0 0 1.65-.987.094.094 0 0 0-.082-.138H4.432a.094.094 0 0 0-.083.138A1.877 1.877 0 0 0 6 11.25Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNotifications;
