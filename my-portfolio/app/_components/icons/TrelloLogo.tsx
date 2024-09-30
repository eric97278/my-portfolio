import { ComponentPropsWithoutRef } from "react"

export const TrelloLogo = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
   return (
      <svg
         width={props.size}
         height={props.size}
         viewBox="0 0 256 250"
         version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         preserveAspectRatio="xMidYMid"
         {...props}
      >
         <g>
            <rect fill="url(#linearGradient-1)" x="0" y="0" width="256" height="256" rx="25"></rect>
            <rect fill="#FFFFFF" x="144.64" y="33.28" width="78.08" height="112" rx="12"></rect>
            <rect fill="#FFFFFF" x="33.28" y="33.28" width="78.08" height="176" rx="12"></rect>
         </g>
   </svg>
   )}