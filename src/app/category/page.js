import Category from "@/components/CategoryCard";


export const metadata = {
  title: "category",
  description: "This is the home page",
};

// get data from API
export async function getCategory() {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products?limit=10&offset=10"
  );
  const data = await res.json();
  return data;
}

export default async function Home() {
  const products = await getCategory();

  return (
    <main className="flex  flex-wrap items-center justify-between p-24">
      {products.map((product) => (
          <Category
            key={product.id}
            id={product.id}
            title={product.title }
            image={product.images[0]}
          />
        ))}
    </main>
  );
}
