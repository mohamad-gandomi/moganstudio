"use client";

export default function AdminError({ reset }: { reset: () => void }) {
  return <main className="grid min-h-dvh place-items-center p-6"><div className="max-w-md text-center"><h1 className="text-3xl font-semibold">Dashboard unavailable</h1><p className="mt-4 text-muted">The leads service could not be reached. Check the API and database configuration.</p><button type="button" onClick={reset} className="button-primary mt-7">Try again</button></div></main>;
}
