import React from 'react'

export default function CardCategory({name,image}) {
  return (
    <main
      class="relative w-80 flex-col bg-white bg-clip-border text-gray-700  hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-lime-300 to-sky-400 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] my-5 m-5"
      data-aos="zoom-in-down"
    >
      <article class="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white text-gray-700 shadow-0">
        <img src={image} alt="profile-picture" />
      </article>
      <section class="p-6 text-center">
        <h2 class="mb-2 block text-2xl tracking-tight font-semibold leading-snug text-gray-900 antialiased">
          {name}
        </h2>
      </section>
    </main>
  );
}
