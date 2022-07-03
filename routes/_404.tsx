// This is a Custom 400 error page, just add routes/_400.tsx

/** @jsx h */
import { h } from "preact";
import { UnknownPageProps } from "$fresh/server.ts";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return <p>404 not found: {url.pathname}</p>;
}