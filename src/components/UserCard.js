"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function User({id, avatar, name, role}) {
  const router = useRouter();
  return (
    <div className="shrink-0 my-4 w-full max-w-sm border border-gray-100 rounded-lg shadow dark:bg-violet-950 dark:border-violet-50"
    >
      <Link href={`/user/${id}`}>
        <img
          className="p-8 rounded-t-lg"
          src={avatar ? avatar : "/images/placeholder-image.png"}
          alt="avatar image"
        />
      </Link>
      <div class="px-5 pb-5">
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">{id}</span>
        </div>
        <a href="/[id]">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
    </div>
    </div>
  );
}
