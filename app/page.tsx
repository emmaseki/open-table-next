import Header from './component/Header'
import RestaurantCard from './component/RestaurantCard'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const fetchRestaurants = async () => {
  const restaurants = await prisma.restaurant.findMany();

  return restaurants;
}

export default async function Home() {
  const restaurants = await fetchRestaurants();
  return (
    <main>
      <Header />
      <div className='py-3 px-36 mt-10 flex flex-wrap'>
        {restaurants.map(restaurant => (
          <RestaurantCard />
        ))}
      </div>
    </main>
  )
}