import Card from "@/components/Card";
export const metadata = {
  title: "mine project",
  description: "This is the home page",
};

// get data from API
export async function getData() {
  // no-store to avoid cache
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products?limit=21&offset=0"
  );
  const data = await res.json();
  return data;
}

export default async function Home() {
  const products = await getData();

  return (
    <main className="flex  flex-wrap items-center justify-between p-24">
      {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.images[0]}
          />
        ))}
    </main>
  );
}
