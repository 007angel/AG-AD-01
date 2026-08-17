import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

type IconSvgProps = {
  viewBox: string;
  fill: string;
  stroke: string;
  strokeWidth: number;
  strokeLinecap: "round";
  strokeLinejoin: "round";
};

type IconFn = (props: IconProps) => ReactNode;

const svgBase: IconSvgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const icon =
  (children: ReactNode, overrides?: Partial<IconSvgProps>): IconFn =>
  ({ className }) =>
    (
      <svg className={className} {...svgBase} {...overrides}>
        {children}
      </svg>
    );

export const IconBox: IconFn = icon(
  <>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </>,
);

export const IconGlobe: IconFn = icon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </>,
);

export const IconMapPin: IconFn = icon(
  <>
    <path d="M20 10c0 5.523-4.477 10-8 10s-8-4.477-8-10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </>,
);

export const IconScale: IconFn = icon(
  <>
    <path d="M12 3v17" />
    <path d="M18 7 12 3 6 7" />
    <path d="M6 10a6 6 0 0 0 12 0" />
    <circle cx="6" cy="17" r="2" />
    <circle cx="18" cy="17" r="2" />
  </>,
);

export const IconCheck: IconFn = icon(<path d="M5 13l4 4L19 7" />, { strokeWidth: 2.5 });

export const IconMenu: IconFn = icon(<path d="M4 6h16M4 12h16M4 18h16" />, { strokeWidth: 2 });

export const IconSun: IconFn = icon(
  <>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </>,
  { strokeWidth: 2 },
);

export const IconMoon: IconFn = icon(
  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />,
  { strokeWidth: 2 },
);

export const IconMessage: IconFn = icon(
  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
  { strokeWidth: 2 },
);

export const IconPhone: IconFn = icon(
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92Z" />,
  { strokeWidth: 2 },
);

export const IconMail: IconFn = icon(
  <>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </>,
  { strokeWidth: 2 },
);

export const IconClock: IconFn = icon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </>,
  { strokeWidth: 2 },
);

export const IconUpload: IconFn = icon(
  <>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </>,
  { strokeWidth: 2 },
);

export const IconLeaf: IconFn = icon(
  <>
    <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 17 3.5s1 10-2.5 12" />
    <path d="M11 20v-7.5" />
  </>,
  { strokeWidth: 2 },
);

export const IconPaw: IconFn = icon(
  <>
    <circle cx="11" cy="4" r="2" />
    <circle cx="18" cy="8" r="2" />
    <circle cx="20" cy="16" r="2" />
    <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
  </>,
  { strokeWidth: 2 },
);

export const IconClipboard: IconFn = icon(
  <>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M9 14h6M9 18h6M9 10h6" />
  </>,
  { strokeWidth: 2 },
);

export const IconTruck: IconFn = icon(
  <>
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
    <path d="M15 18H9" />
    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="19" cy="18" r="2" />
  </>,
  { strokeWidth: 2 },
);

export const IconFile: IconFn = icon(
  <>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
  </>,
  { strokeWidth: 2 },
);

export const IconRefresh: IconFn = icon(
  <>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </>,
  { strokeWidth: 2 },
);

export const IconCompass: IconFn = icon(
  <>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </>,
  { strokeWidth: 2 },
);

export const IconFileText: IconFn = icon(
  <>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8M16 13H8M16 17H8" />
  </>,
  { strokeWidth: 2 },
);

export const IconFacebook: IconFn = icon(
  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  { strokeWidth: 2 },
);

export const IconInstagram: IconFn = icon(
  <>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </>,
  { strokeWidth: 2 },
);

export const IconLinkedin: IconFn = icon(
  <>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </>,
  { strokeWidth: 2 },
);

export const IconX: IconFn = icon(
  <path d="M18 6 6 18M6 6l12 12" />,
  { strokeWidth: 2 },
);
