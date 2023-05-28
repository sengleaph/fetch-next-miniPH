import User from "@/components/UserCard";

export const metadata = {
  title: "User page",
  description: "This is the User page",
};

// get data from API
export async function getUser() {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/users?limit=8"
  );
  const data = await res.json();
  return data;
}

export default async function Home() {
  const products = await getUser();
   return (
    <main className="flex  flex-wrap items-center justify-between p-24">
      {products.map((user) => (
          <User
            key={user.id}
            id={user.id}
            avatar={user.avatar}
            name={user.name}
            role={user.role}
          />
        ))}
    </main>
  );
}
