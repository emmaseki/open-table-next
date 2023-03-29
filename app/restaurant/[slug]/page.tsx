import RestaurantNavBar from './components/RestaurantNavBar'
import Title from './components/Title'
import Rating from './components/Rating'
import Description from './components/Description'
import Images from './components/Images'
import Review from './components/Review'
import ReservationCard from './components/ReservationCard'

export default function RestauntDetails() {
  return (
    <>
        <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNavBar />
            <Title />
            <Rating />
            <Description />
            <Images />
            <div>
            <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
                What 100 people are saying
            </h1>
            <div>
                <Review />
            </div>
            </div>
        </div>
        <div className="w-[27%] relative text-reg">
            <ReservationCard />
        </div>
    </>
  )
}
