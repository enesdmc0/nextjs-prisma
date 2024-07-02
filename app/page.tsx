import { getAllUsers } from "@/actions/getUser";

const Home = async () => {
  const users = await getAllUsers()
  console.log(users)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
dde
    </main>
  );
}


export default Home;