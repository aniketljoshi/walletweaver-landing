import { SVGProps } from "react";

export function EthereumIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11.944 24L12 23.976V8.59L0 13.97L11.944 24Z" opacity=".6" />
      <path d="M12.056 24L24 13.97L12.056 8.59V23.976L12.056 24Z" opacity=".6" />
      <path d="M12 0L0 12.446L12 17.754V0Z" />
      <path d="M12.056 0V17.754L24 12.446L12.056 0Z" />
      <path d="M11.944 19.044L0 13.444L11.944 24V19.044Z" opacity=".2" />
      <path d="M12.056 19.044V24L24 13.444L12.056 19.044Z" opacity=".2" />
    </svg>
  );
}

export function SolanaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.9992 3.5H5.4992C5.1892 3.5 4.8892 3.65 4.6992 3.9L3.1992 5.9C2.7092 6.56 3.1792 7.5 3.9992 7.5H18.4992C18.8092 7.5 19.1092 7.35 19.2992 7.1L20.7992 5.1C21.2892 4.44 20.8192 3.5 19.9992 3.5Z" />
      <path d="M18.4992 8.5H3.99923C3.68923 8.5 3.38923 8.65 3.19923 8.9L1.69923 10.9C1.20923 11.56 1.67923 12.5 2.49923 12.5H16.9992C17.3092 12.5 17.6092 12.35 17.7992 12.1L19.2992 10.1C19.7892 9.44 19.3192 8.5 18.4992 8.5Z" />
      <path d="M19.9992 13.5H5.4992C5.1892 13.5 4.8892 13.65 4.6992 13.9L3.1992 15.9C2.7092 16.56 3.1792 17.5 3.9992 17.5H18.4992C18.8092 17.5 19.1092 17.35 19.2992 17.1L20.7992 15.1C21.2892 14.44 20.8192 13.5 19.9992 13.5Z" />
    </svg>
  );
}

export function BaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" />
    </svg>
  );
}

export function ArbitrumIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM9.63583 14.5029L12.3023 16.2996L17.7479 7.02525C17.7479 7.02525 10.5902 11.237 9.6358 14.503L9.63583 14.5029ZM8.26127 12.0125L9.60533 13.8824L11.5173 15.1706L15.394 8.56847C15.394 8.56847 9.87677 10.6033 8.26122 12.0125H8.26127ZM6.24158 13.6262L7.75475 14.8021L10.3687 16.5632L13.1205 11.8767C13.1205 11.8767 8.76176 11.0289 6.24158 13.6262Z" />
    </svg>
  );
}

export function PolygonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.5 2.5L21.5 5.5V11.5L16.5 14.5L11.5 11.5V5.5L16.5 2.5Z" />
      <path d="M7.5 9.5L12.5 12.5V18.5L7.5 21.5L2.5 18.5V12.5L7.5 9.5Z" />
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
