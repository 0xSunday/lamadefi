import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SkeletonLoad from "../../components/SkeletonLoad";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/bitcoin");
  }, []);

  if (router.pathname === "/") {
    return <SkeletonLoad />;
  }
}
