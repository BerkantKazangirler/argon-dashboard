import { Link, useLocation } from "react-router-dom";
import cn from "classnames";
import { Button } from "./button";

export const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col rounded-3xl bg-white dark:bg-darkDetail drop-shadow-xl z-20 w-64 h-[800px]">
      <img
        src={"public/logo.png"}
        className="w-36 mx-auto py-6 visible dark:hidden"
      />
      <img
        src={"public/logowhite.png"}
        className="w-36 mx-auto py-6 hidden dark:block"
      />
      <svg
        width="234"
        height="1"
        viewBox="0 0 234 1"
        fill="none"
        className="px-7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.5 0.5H233.75" stroke="url(#paint0_linear_2614_7733)" />
        <defs>
          <linearGradient
            id="paint0_linear_2614_7733"
            x1="0.5"
            y1="0.5"
            x2="231.5"
            y2="0.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E0E1E2" stop-opacity="0" />
            <stop offset="0.5" stop-color="#E0E1E2" />
            <stop offset="1" stop-color="#E0E1E2" stop-opacity="0.15625" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex flex-col gap-4 pt-4">
        <Link
          to={"/"}
          className={cn(
            "flex flex-row gap-2 mx-auto justify-center w-fit pl-4 pr-7 py-2",
            {
              "dark:bg-darkBottomBg rounded-lg": "/" == location.pathname,
            }
          )}
        >
          <span
            className={cn("p-2", {
              "bg-detailBg transition-colors rounded-lg":
                "/" == location.pathname,
              "dark:bg-darkBottomBg rounded-lg": "/" != location.pathname,
            })}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className={cn(
                "/" == location.pathname ? "fill-white" : "fill-detailBg"
              )}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2611_6711)">
                <path d="M8.16289 3.46748C8.11927 3.42575 8.06124 3.40247 8.00088 3.40247C7.94052 3.40247 7.88248 3.42575 7.83887 3.46748L2.44531 8.61992C2.42241 8.64183 2.40418 8.66816 2.39175 8.69731C2.37931 8.72647 2.37291 8.75785 2.37295 8.78955L2.37207 13.6253C2.37207 13.8739 2.47084 14.1124 2.64666 14.2882C2.82247 14.464 3.06093 14.5628 3.30957 14.5628H6.125C6.24932 14.5628 6.36855 14.5134 6.45645 14.4255C6.54436 14.3376 6.59375 14.2184 6.59375 14.094V10.1097C6.59375 10.0475 6.61844 9.98789 6.6624 9.94393C6.70635 9.89998 6.76596 9.87529 6.82812 9.87529H9.17187C9.23403 9.87529 9.29365 9.89998 9.3376 9.94393C9.38156 9.98789 9.40625 10.0475 9.40625 10.1097V14.094C9.40625 14.2184 9.45563 14.3376 9.54354 14.4255C9.63145 14.5134 9.75068 14.5628 9.875 14.5628H12.6893C12.9379 14.5628 13.1764 14.464 13.3522 14.2882C13.528 14.1124 13.6268 13.8739 13.6268 13.6253V8.78955C13.6268 8.75785 13.6204 8.72647 13.608 8.69731C13.5955 8.66816 13.5773 8.64183 13.5544 8.61992L8.16289 3.46748Z" />
                <path d="M14.8826 7.65369L12.6912 5.5572V2.37585C12.6912 2.25153 12.6418 2.13231 12.5539 2.0444C12.466 1.95649 12.3468 1.9071 12.2225 1.9071H10.8162C10.6919 1.9071 10.5727 1.95649 10.4848 2.0444C10.3969 2.13231 10.3475 2.25153 10.3475 2.37585V3.31335L8.65059 1.69089C8.4918 1.53035 8.25567 1.43835 8.0005 1.43835C7.7462 1.43835 7.51065 1.53035 7.35186 1.69119L1.12042 7.6531C0.938195 7.82888 0.915343 8.11804 1.08116 8.30847C1.1228 8.35654 1.17379 8.39563 1.23102 8.42337C1.28824 8.4511 1.35052 8.4669 1.41405 8.46981C1.47758 8.47271 1.54103 8.46266 1.60055 8.44026C1.66007 8.41787 1.71441 8.38359 1.76026 8.33952L7.83936 2.53054C7.88298 2.48882 7.94102 2.46553 8.00138 2.46553C8.06174 2.46553 8.11977 2.48882 8.16339 2.53054L14.2431 8.33952C14.3326 8.42541 14.4526 8.47228 14.5766 8.46986C14.7007 8.46745 14.8187 8.41594 14.9049 8.32663C15.0848 8.14031 15.0698 7.83269 14.8826 7.65369Z" />
              </g>
              <defs>
                <clipPath id="clip0_2611_6711">
                  <rect
                    width="15"
                    height="15"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <Button
            className={cn(
              "text-xs",
              "/dashboard" == location.pathname
                ? "font-semibold text-black dark:text-white"
                : "text-placeholderColor font-bold dark:text-white"
            )}
          >
            Dashboard
          </Button>
        </Link>
        <Link
          to={"/table"}
          className={cn(
            "flex flex-row gap-2 mx-auto justify-center w-fit pl-4 pr-14 py-2",
            {
              "dark:bg-darkBottomBg rounded-lg": "/table" == location.pathname,
            }
          )}
        >
          <span
            className={cn("p-2", {
              "bg-detailBg transition-colors rounded-lg":
                "/table" == location.pathname,
              "dark:bg-darkBottomBg rounded-lg": "/table" != location.pathname,
            })}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className={cn(
                location.pathname == "/table" ? "fill-white" : "fill-detailBg"
              )}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2611_6706)">
                <path d="M3.54687 15.0316H2.60937C2.42289 15.0316 2.24405 14.9575 2.11219 14.8256C1.98033 14.6938 1.90625 14.5149 1.90625 14.3284V10.1097C1.90625 9.9232 1.98033 9.74436 2.11219 9.6125C2.24405 9.48063 2.42289 9.40656 2.60937 9.40656H3.54687C3.73335 9.40656 3.9122 9.48063 4.04406 9.6125C4.17592 9.74436 4.25 9.9232 4.25 10.1097V14.3284C4.25 14.5149 4.17592 14.6938 4.04406 14.8256C3.9122 14.9575 3.73335 15.0316 3.54687 15.0316V15.0316Z" />
                <path d="M10.1094 15.0308H9.17187C8.98539 15.0308 8.80655 14.9567 8.67469 14.8248C8.54283 14.693 8.46875 14.5141 8.46875 14.3276V7.29639C8.46875 7.10991 8.54283 6.93106 8.67469 6.7992C8.80655 6.66734 8.98539 6.59326 9.17187 6.59326H10.1094C10.2959 6.59326 10.4747 6.66734 10.6066 6.7992C10.7384 6.93106 10.8125 7.10991 10.8125 7.29639V14.3276C10.8125 14.5141 10.7384 14.693 10.6066 14.8248C10.4747 14.9567 10.2959 15.0308 10.1094 15.0308V15.0308Z" />
                <path d="M13.3906 15.0311H12.4531C12.2666 15.0311 12.0878 14.957 11.9559 14.8252C11.8241 14.6933 11.75 14.5145 11.75 14.328V4.0155C11.75 3.82902 11.8241 3.65018 11.9559 3.51832C12.0878 3.38646 12.2666 3.31238 12.4531 3.31238H13.3906C13.5771 3.31238 13.7559 3.38646 13.8878 3.51832C14.0197 3.65018 14.0937 3.82902 14.0937 4.0155V14.328C14.0937 14.5145 14.0197 14.6933 13.8878 14.8252C13.7559 14.957 13.5771 15.0311 13.3906 15.0311V15.0311Z" />
                <path d="M6.82812 15.0309H5.89062C5.70414 15.0309 5.5253 14.9569 5.39344 14.825C5.26158 14.6931 5.1875 14.5143 5.1875 14.3278V1.67157C5.1875 1.48509 5.26158 1.30625 5.39344 1.17439C5.5253 1.04252 5.70414 0.968445 5.89062 0.968445H6.82812C7.0146 0.968445 7.19345 1.04252 7.32531 1.17439C7.45717 1.30625 7.53125 1.48509 7.53125 1.67157V14.3278C7.53125 14.5143 7.45717 14.6931 7.32531 14.825C7.19345 14.9569 7.0146 15.0309 6.82812 15.0309V15.0309Z" />
              </g>
              <defs>
                <clipPath id="clip0_2611_6706">
                  <rect
                    width="15"
                    height="15"
                    fill="white"
                    transform="translate(0.5 0.499939)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <Button
            className={cn(
              "text-xs",
              location.pathname == "/table"
                ? "font-semibold text-black dark:text-white"
                : "text-placeholderColor font-bold dark:text-white"
            )}
          >
            Tables
          </Button>
        </Link>
        <Link
          to={"/billing"}
          className={cn(
            "flex flex-row gap-2 mx-auto justify-center w-fit pl-4 pr-14 py-2",
            {
              "dark:bg-darkBottomBg rounded-lg":
                "/billing" == location.pathname,
            }
          )}
        >
          <span
            className={cn("p-2", {
              "bg-detailBg transition-colors rounded-lg":
                "/billing" == location.pathname,
              "dark:bg-darkBottomBg rounded-lg":
                "/billing" != location.pathname,
            })}
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              className={cn(
                location.pathname == "/billing" ? "fill-white" : "fill-detailBg"
              )}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.9375 11.5152C0.9375 11.9503 1.11035 12.3676 1.41803 12.6753C1.7257 12.983 2.143 13.1558 2.57812 13.1558H12.4219C12.857 13.1558 13.2743 12.983 13.582 12.6753C13.8896 12.3676 14.0625 11.9503 14.0625 11.5152V7.00348H0.9375V11.5152ZM2.87109 9.28863C2.87109 9.05553 2.96369 8.83198 3.12852 8.66715C3.29335 8.50233 3.5169 8.40973 3.75 8.40973H5.15625C5.38935 8.40973 5.6129 8.50233 5.77773 8.66715C5.94256 8.83198 6.03515 9.05553 6.03515 9.28863V9.87457C6.03515 10.1077 5.94256 10.3312 5.77773 10.4961C5.6129 10.6609 5.38935 10.7535 5.15625 10.7535H3.75C3.5169 10.7535 3.29335 10.6609 3.12852 10.4961C2.96369 10.3312 2.87109 10.1077 2.87109 9.87457V9.28863Z" />
              <path d="M12.4219 2.84296H2.57812C2.143 2.84296 1.7257 3.01581 1.41803 3.32348C1.11035 3.63116 0.9375 4.04846 0.9375 4.48358V5.2453H14.0625V4.48358C14.0625 4.04846 13.8896 3.63116 13.582 3.32348C13.2743 3.01581 12.857 2.84296 12.4219 2.84296V2.84296Z" />
            </svg>
          </span>
          <Button
            className={cn(
              "text-xs",
              "/billing" == location.pathname
                ? "font-semibold text-black dark:text-white"
                : "text-placeholderColor font-bold dark:text-white"
            )}
          >
            Billing
          </Button>
        </Link>

        <span className="text-detailColor dark:text-white px-12 py-2 font-bold text-xs">
          ACCOUNT PAGES
        </span>
        <Link
          to={"/profile"}
          className={cn(
            "flex flex-row gap-2 mx-auto justify-center w-fit pl-4 pr-14 py-2",
            {
              "dark:bg-darkBottomBg rounded-lg":
                "/profile" == location.pathname,
            }
          )}
        >
          <span
            className={cn("p-2", {
              "bg-detailBg transition-colors rounded-lg":
                location.pathname == "/profile",
            })}
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              className={cn(
                location.pathname == "/profile" ? "fill-white" : "fill-detailBg"
              )}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.74546 2.39181C9.17535 1.77628 8.37906 1.43732 7.50015 1.43732C6.61656 1.43732 5.81763 1.77423 5.25015 2.38595C4.67652 3.00441 4.39703 3.84493 4.46265 4.75255C4.59273 6.54317 5.95533 7.99981 7.50015 7.99981C9.04497 7.99981 10.4052 6.54347 10.5374 4.75314C10.6039 3.85372 10.3226 3.01495 9.74546 2.39181Z" />
              <path d="M12.6564 14.5616H2.34392C2.20894 14.5634 2.07526 14.535 1.95262 14.4786C1.82997 14.4222 1.72145 14.3392 1.63493 14.2356C1.4445 14.0079 1.36775 13.6971 1.42458 13.3827C1.67185 12.0111 2.44353 10.8588 3.65642 10.0499C4.73396 9.33186 6.0989 8.93665 7.50016 8.93665C8.90143 8.93665 10.2664 9.33215 11.3439 10.0499C12.5568 10.8585 13.3285 12.0108 13.5757 13.3824C13.6326 13.6968 13.5558 14.0076 13.3654 14.2353C13.2789 14.339 13.1704 14.422 13.0478 14.4785C12.9251 14.535 12.7914 14.5634 12.6564 14.5616Z" />
            </svg>
          </span>
          <Button
            className={cn(
              "text-xs",
              "/profile" == location.pathname
                ? "font-semibold text-black dark:text-white"
                : "text-placeholderColor font-bold dark:text-white"
            )}
          >
            Profile
          </Button>
        </Link>
        <Link
          to={"/auth/sign"}
          className="flex flex-row gap-2 mx-auto pl-4 pr-14 dark:pl-4 dark:pr-14 py-1"
        >
          <span
            className={cn("p-2", {
              "bg-detailBg transition-colors rounded-lg":
                location.pathname == "/auth/register",
            })}
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              className={cn(
                location.pathname == "/auth/register"
                  ? "fill-white"
                  : "fill-detailBg"
              )}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.5393 7.06262H8.43774C8.06478 7.06262 7.7071 6.91446 7.44337 6.65074C7.17965 6.38702 7.03149 6.02933 7.03149 5.65637V1.55481C7.03149 1.52373 7.01915 1.49392 6.99717 1.47195C6.97519 1.44997 6.94539 1.43762 6.91431 1.43762H4.21899C3.72171 1.43762 3.2448 1.63517 2.89317 1.9868C2.54154 2.33843 2.34399 2.81534 2.34399 3.31262V12.6876C2.34399 13.1849 2.54154 13.6618 2.89317 14.0134C3.2448 14.3651 3.72171 14.5626 4.21899 14.5626H10.7815C11.2788 14.5626 11.7557 14.3651 12.1073 14.0134C12.4589 13.6618 12.6565 13.1849 12.6565 12.6876V7.17981C12.6565 7.14873 12.6441 7.11892 12.6222 7.09694C12.6002 7.07497 12.5704 7.06262 12.5393 7.06262Z" />
              <path d="M12.2821 6.02594L8.0689 1.81275C8.0607 1.80461 8.05029 1.79907 8.03895 1.79683C8.02762 1.79459 8.01587 1.79575 8.0052 1.80016C7.99452 1.80458 7.98539 1.81205 7.97895 1.82164C7.97251 1.83123 7.96904 1.84251 7.96899 1.85406V5.65709C7.96899 5.78141 8.01838 5.90064 8.10629 5.98855C8.1942 6.07646 8.31342 6.12584 8.43774 6.12584H12.2408C12.2523 6.12579 12.2636 6.12233 12.2732 6.11589C12.2828 6.10945 12.2903 6.10031 12.2947 6.08964C12.2991 6.07896 12.3002 6.06722 12.298 6.05588C12.2958 6.04455 12.2902 6.03413 12.2821 6.02594Z" />
            </svg>
          </span>
          <Button
            className={cn(
              "text-xs",
              "/auth/register" == location.pathname
                ? "font-semibold text-black dark:text-white"
                : "text-placeholderColor font-bold dark:text-white"
            )}
          >
            Sign In
          </Button>
        </Link>
        <Link
          to={"/auth/register"}
          className="flex flex-row gap-2 pl-4 pr-14 mx-auto dark:pl-4 dark:pr-14 py-1"
        >
          <span
            className={cn("p-2", {
              "bg-detailBg transition-colors rounded-lg":
                location.pathname == "/auth/login",
            })}
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              className={cn(
                location.pathname == "/auth/login"
                  ? "fill-white"
                  : "fill-detailBg"
              )}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2611_5868)">
                <path d="M13.9935 1.62154C13.9881 1.59562 13.9755 1.57178 13.9571 1.55278C13.9387 1.53379 13.9152 1.52045 13.8895 1.51431C12.1736 1.09478 8.20883 2.5898 6.06079 4.73696C5.67766 5.11699 5.32839 5.52968 5.01694 5.97036C4.35454 5.91177 3.69213 5.96069 3.12758 6.20679C1.53471 6.90786 1.07094 8.73716 0.941746 9.52407C0.934417 9.56714 0.937181 9.61133 0.949821 9.65315C0.96246 9.69497 0.98463 9.73329 1.01459 9.76509C1.04454 9.79689 1.08147 9.82131 1.12246 9.83643C1.16346 9.85154 1.2074 9.85694 1.25083 9.8522L3.80874 9.57007C3.81056 9.76292 3.8222 9.95555 3.8436 10.1472C3.85647 10.2803 3.91556 10.4047 4.01059 10.4988L5.00112 11.487C5.09528 11.5819 5.21962 11.6409 5.35268 11.654C5.54328 11.6753 5.73483 11.6869 5.92661 11.6888L5.64594 14.2435C5.64126 14.2869 5.6467 14.3308 5.66184 14.3718C5.67697 14.4128 5.70139 14.4497 5.73318 14.4796C5.76497 14.5095 5.80326 14.5317 5.84505 14.5444C5.88685 14.557 5.93101 14.5599 5.97407 14.5526C6.75952 14.4266 8.59204 13.9628 9.28901 12.37C9.5351 11.8054 9.58549 11.1462 9.52866 10.4871C9.9704 10.1756 10.3842 9.82622 10.7653 9.44292C12.9201 7.29897 14.4066 3.42271 13.9935 1.62154ZM8.61547 6.8853C8.41871 6.68867 8.28469 6.4381 8.23035 6.16529C8.17602 5.89248 8.20381 5.60969 8.31022 5.35267C8.41663 5.09566 8.59687 4.87598 8.82815 4.72142C9.05943 4.56686 9.33135 4.48436 9.60952 4.48436C9.88768 4.48436 10.1596 4.56686 10.3909 4.72142C10.6222 4.87598 10.8024 5.09566 10.9088 5.35267C11.0152 5.60969 11.043 5.89248 10.9887 6.16529C10.9343 6.4381 10.8003 6.68867 10.6036 6.8853C10.4731 7.01596 10.3181 7.11962 10.1476 7.19034C9.977 7.26106 9.79416 7.29746 9.60952 7.29746C9.42487 7.29746 9.24203 7.26106 9.07146 7.19034C8.9009 7.11962 8.74595 7.01596 8.61547 6.8853Z" />
                <path d="M4.93384 12.2028C4.77329 12.3636 4.51577 12.4263 4.20581 12.4799C3.50942 12.5986 2.89448 11.9968 3.01958 11.2928C3.06733 11.0259 3.20854 10.6518 3.29643 10.5639C3.31565 10.5451 3.32843 10.5207 3.33298 10.4941C3.33753 10.4676 3.3336 10.4403 3.32176 10.4162C3.30992 10.392 3.29077 10.3722 3.26703 10.3595C3.24329 10.3469 3.21616 10.342 3.1895 10.3457C2.80008 10.3933 2.43778 10.5699 2.1603 10.8472C1.47153 11.5366 1.40649 14.0945 1.40649 14.0945C1.40649 14.0945 3.96587 14.0294 4.65464 13.3401C4.93286 13.0628 5.10964 12.7 5.15649 12.31C5.16733 12.1875 5.01821 12.1146 4.93384 12.2028Z" />
              </g>
              <defs>
                <clipPath id="clip0_2611_5868">
                  <rect
                    width="15"
                    height="15"
                    fill="white"
                    transform="translate(0.000183105 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <Button
            className={cn(
              "text-xs",
              "/auth/login" == location.pathname
                ? "font-semibold text-black dark:text-white"
                : "text-placeholderColor font-bold dark:text-white"
            )}
          >
            Sign Up
          </Button>
        </Link>
        <div className="mx-auto flex flex-col w-full gap-4 mb-5 items-center absolute bottom-0">
          <div className="flex flex-col">
            <img
              src={"./public/icon/icon-documentation.png"}
              className="w-40 visible dark:hidden"
            />
            <img
              src={"./public/icon/icon-docdark.png"}
              className="w-40 hidden dark:block"
            />
            <span className="text-detailColor dark:text-white font-bold w-fit mx-auto text-sm">
              Need Help?
            </span>
            <span className="text-tableTr w-fit mx-auto text-xs">
              Please check our docs
            </span>
          </div>
          <Button className="font-bold text-2xs rounded-lg text-white bg-detailBg py-3 w-fit px-8">
            DOCUMENTATION
          </Button>
          <Button className="font-bold text-2xs rounded-lg text-white bg-detailColor py-3 w-fit px-8">
            UPDATE TO PRO
          </Button>
        </div>
      </div>
    </div>
  );
};
