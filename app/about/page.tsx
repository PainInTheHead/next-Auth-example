import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authConfig } from "@/configs/auth";

export const metadata: Metadata = {
  title: "About | Next App",
};

export default async function About() {
  const session = await getServerSession(authConfig);

  return (
    <div>
      <h1>
        Prfile of {session?.user?.name ? session?.user?.name : "Zhulverick"}
      </h1>
      <h3>Select subitem</h3>;
    </div>
  );
}
