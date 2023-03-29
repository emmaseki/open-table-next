import NavBar from "../component/NavBar"
import Header from "./component/Header"
import SideBar from "./component/SideBar"
import RestaurantCard from "./component/RestaurantCard"

export default function Search() {
  return (
    <>
      <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <SideBar />
          <div className="w-5/6">
              <RestaurantCard />
          </div>
        </div>
    </>
  )
}
