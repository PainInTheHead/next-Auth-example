"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const TheHeader = () => {
  const session = useSession();
  console.log(session);
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
      {session?.data && <Link href="/profile">Profile</Link>}
      {session?.data ? (
        <Link
          href="#"
          onClick={() =>
            signOut({
              callbackUrl: "/",
            })
          }
        >
          Sign Out
        </Link>
      ) : (
        <Link href="/signin">SignIn</Link>
      )}
    </header>
  );
};

export { TheHeader };
