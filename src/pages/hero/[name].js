import React from "react";
import mockData from "@/constants/mockData";
import { useRouter } from "next/router";

export default function HeroDetail() {
  const router = useRouter();

  return <div>HeroDetail {router.query.name}</div>;
}
