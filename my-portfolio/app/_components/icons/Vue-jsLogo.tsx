import { ComponentPropsWithoutRef } from "react"

export const VueLogo = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
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
            <ellipse fill="url(#radialGradient-1)" cx="128" cy="67.3" rx="128" ry="67.3" />
            <ellipse fill="#6181B6" cx="128" cy="67.3" rx="123" ry="62.3" />
            <g></g>
            <path d="M204.8,0 L256,0 L128,220.8 L0,0 L50.56,0 L97.92,0 L128,51.2 L157.44,0 L204.8,0 Z" fill="#41B883"></path>
            <path d="M0,0 L128,220.8 L256,0 L204.8,0 L128,132.48 L50.56,0 L0,0 Z" fill="#41B883"></path>
            <path d="M50.56,0 L128,133.12 L204.8,0 L157.44,0 L128,51.2 L97.92,0 L50.56,0 Z" fill="#35495E"></path>
         </g>
      </svg>
   )
}
