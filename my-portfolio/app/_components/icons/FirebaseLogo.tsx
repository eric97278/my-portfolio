import { ComponentPropsWithoutRef } from "react"

export const FirebaseLogo = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
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
            <polygon fill="#F6820C" points="0 282.99762 0.962097168 282.030396 4.45771144 280.60956 132.935323 152.60956 134.563025 148.178595 102.513123 87.1048584"></polygon>
            <path d="M139.120971,347.551268 L255.395916,282.703666 L222.191698,78.2093373 C221.153051,71.8112478 213.303658,69.2818149 208.724314,73.8694368 L0.000254726368,282.997875 L115.608454,347.545536 C122.914643,351.624979 131.812872,351.62689 139.120971,347.551268" fill="#FDE068"></path>
            <path d="M254.354084,282.159837 L221.401937,79.2179369 C220.371175,72.8684188 213.843792,70.2409553 209.299213,74.79375 L1.28945312,282.600785 L115.627825,346.509458 C122.878548,350.557931 131.709226,350.559827 138.961846,346.515146 L254.354084,282.159837 Z" fill="#FCCA3F"></path>
            <path d="M139.120907,345.64082 C131.812808,349.716442 122.914579,349.714531 115.60839,345.635089 L0.93134768,282.014551 L0.000191044776,282.997875 L115.60839,347.545536 C122.914579,351.624979 131.812808,351.62689 139.120907,347.551268 L255.395853,282.703666 L255.111196,280.951785 L139.120907,345.64082 Z" fill="#EEAB37"></path>
         </g>
      </svg>
   )
}
