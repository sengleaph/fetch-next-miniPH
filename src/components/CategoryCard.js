"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Category({title,image,id}) {
  const router = useRouter();
  return (
    <div className="shrink-0 my-4 w-full max-w-sm border border-gray-100 rounded-lg shadow dark:bg-violet-950 dark:border-violet-50"
    >
      <Link href={`/products/${id}`}>
        <img
          className="p-8 rounded-t-lg"
          src={image ? image : "/images/placeholder-image.png"}
          alt="product image"
        />
      </Link>
       <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        
    </div>
    </div>
  );
}
