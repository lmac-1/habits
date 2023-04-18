import NextLink from "next/link";

export default function Link({ children, href, className }) {
  return (
    <NextLink
      href={href}
      className={`underline decoration-blue-600 underline-offset-4 ${className} hover:decoration-black`}
    >
      {children}
    </NextLink>
  );
}
