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
         <defs>
            <linearGradient x1="-0.828097821%" y1="7.6518539%" x2="57.6359644%" y2="78.4107719%" id="linearGradient-1">
               <stop stop-color="#41D1FF" offset="0%"></stop>
               <stop stop-color="#BD34FE" offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="43.3760053%" y1="2.24179788%" x2="50.3158848%" y2="89.0299051%" id="linearGradient-2">
               <stop stop-color="#FFEA83" offset="0%"></stop>
               <stop stop-color="#FFDD35" offset="8.33333%"></stop>
               <stop stop-color="#FFA800" offset="100%"></stop>
            </linearGradient>
         </defs>
         <g>
            <g>
               <rect fill="url(#linearGradient-1)" x="0" y="0" width="256" height="256" rx="25"></rect>
               <rect fill="#FFFFFF" x="144.64" y="33.28" width="78.08" height="112" rx="12"></rect>
               <rect fill="#FFFFFF" x="33.28" y="33.28" width="78.08" height="176" rx="12"></rect>
            </g>
         </g>
      </svg>
   )
}