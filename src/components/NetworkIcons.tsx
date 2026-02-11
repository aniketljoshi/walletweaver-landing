import { SVGProps } from "react";

export function EthereumIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 784.37 1277.39" {...props}>
      <g>
        <polygon fill="#343434" fillRule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 " />
        <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 " />
        <polygon fill="#3C3C3B" fillRule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 " />
        <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89 " />
        <polygon fill="#141414" fillRule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33 " />
        <polygon fill="#393939" fillRule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33 " />
      </g>
    </svg>
  );
}

export function SolanaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 397.7 311.7" {...props}>
      <defs>
        <linearGradient id="SolanaGradient1" gradientUnits="userSpaceOnUse" x1="360.8791" y1="351.4553" x2="141.213" y2="-69.2936" gradientTransform="matrix(1 0 0 -1 0 314)">
          <stop offset="0" style={{ stopColor: "#00FFA3" }} />
          <stop offset="1" style={{ stopColor: "#DC1FFF" }} />
        </linearGradient>
        <linearGradient id="SolanaGradient2" gradientUnits="userSpaceOnUse" x1="264.8291" y1="401.6014" x2="45.163" y2="-19.1475" gradientTransform="matrix(1 0 0 -1 0 314)">
          <stop offset="0" style={{ stopColor: "#00FFA3" }} />
          <stop offset="1" style={{ stopColor: "#DC1FFF" }} />
        </linearGradient>
        <linearGradient id="SolanaGradient3" gradientUnits="userSpaceOnUse" x1="312.5484" y1="376.688" x2="92.8822" y2="-44.061" gradientTransform="matrix(1 0 0 -1 0 314)">
          <stop offset="0" style={{ stopColor: "#00FFA3" }} />
          <stop offset="1" style={{ stopColor: "#DC1FFF" }} />
        </linearGradient>
      </defs>
      <path fill="url(#SolanaGradient1)" d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z" />
      <path fill="url(#SolanaGradient2)" d="M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z" />
      <path fill="url(#SolanaGradient3)" d="M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4c5.8,0,8.7-7,4.6-11.1L333.1,120.1z" />
    </svg>
  );
}

export function BaseIcon(props: SVGProps<SVGSVGElement>) {
  // Using img tag since we only have PNG
  // We wrap it in a div or just render the img, but since the parent expects an Icon component that accepts SVG props,
  // we can use the className from props for sizing.
  return (
    <img src="/base-logo.png" alt="Base" className={props.className} style={{ objectFit: 'contain' }} />
  );
}

export function ArbitrumIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 2500 2500" {...props}>
      <path fill="#213147" d="M226,760v980c0,63,33,120,88,152l849,490c54,31,121,31,175,0l849-490c54-31,88-89,88-152V760c0-63-33-120-88-152l-849-490c-54-31-121-31-175,0L314,608c-54,31-87,89-87,152H226z"></path>
      <path fill="#12AAFF" d="M1435,1440l-121,332c-3,9-3,19,0,29l208,571l241-139l-289-793C1467,1422,1442,1422,1435,1440z"></path>
      <path fill="#12AAFF" d="M1678,882c-7-18-32-18-39,0l-121,332c-3,9-3,19,0,29l341,935l241-139L1678,883V882z"></path>
      <path fill="#9DCCED" d="M1250,155c6,0,12,2,17,5l918,530c11,6,17,18,17,30v1060c0,12-7,24-17,30l-918,530c-5,3-11,5-17,5s-12-2-17-5l-918-530c-11-6-17-18-17-30V719c0-12,7-24,17-30l918-530c5-3,11-5,17-5l0,0V155z M1250,0c-33,0-65,8-95,25L237,555c-59,34-95,96-95,164v1060c0,68,36,130,95,164l918,530c29,17,62,25,95,25s65-8,95-25l918-530c59-34,95-96,95-164V719c0-68-36-130-95-164L1344,25c-29-17-62-25-95-25l0,0H1250z"></path>
      <polygon fill="#213147" points="642,2179 727,1947 897,2088 738,2234"></polygon>
      <path fill="#FFFFFF" d="M1172,644H939c-17,0-33,11-39,27L401,2039l241,139l550-1507c5-14-5-28-19-28L1172,644z"></path>
      <path fill="#FFFFFF" d="M1580,644h-233c-17,0-33,11-39,27L738,2233l241,139l620-1701c5-14-5-28-19-28V644z"></path>
    </svg>
  );
}

export function PolygonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 178 161" {...props}>
      <path fill="#6C00F6" d="M66.8,54.7l-16.7-9.7L0,74.1v58l50.1,29l50.1-29V41.9L128,25.8l27.8,16.1v32.2L128,90.2l-16.7-9.7v25.8l16.7,9.7l50.1-29V29L128,0L77.9,29v90.2l-27.8,16.1l-27.8-16.1V86.9l27.8-16.1l16.7,9.7V54.7z" />
    </svg>
  );
}

export function getNetworkIcon(chain: string) {
  switch (chain.toLowerCase()) {
    case 'ethereum':
      return EthereumIcon;
    case 'solana':
      return SolanaIcon;
    case 'base':
      return BaseIcon;
    case 'arbitrum':
      return ArbitrumIcon;
    case 'polygon':
      return PolygonIcon;
    default:
      return undefined;
  }
}
