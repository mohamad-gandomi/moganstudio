import Link from "next/link";

export default function NotFound() {
  return <main className="grid min-h-dvh place-items-center px-5 text-center"><div><p className="eyebrow">404</p><h1 className="text-4xl font-semibold tracking-[-.04em]">Page not found.</h1><Link className="button-primary mt-7" href="/">Return home</Link></div></main>;
}
