import React from 'react';
import Vacation from './Vacation'

const vacationSpots = [
  {
    place: "Meridian, Idaho",
    price: 40,
    timeToGo: "Spring",
    imgURL: "http://www.boisepremier.com/wp-content/uploads/2017/09/Boise1.jpg"
  },{
    place: "Cancun",
    price: 900,
    timeToGo: "Winter",
    imgURL: "https://media-server.clubmed.com/image/jpeg/1200/675/crop/center/60/https%3A%2F%2Fns.clubmed.com%2Ficp%2F1-MEDIA%2F01.VILLAGES%2F1.1MER%2FCANCUN-YUCATAN%2F32-31-30-29-28-27-26-25-24-23-22-21-20-19-18-17-16-15-14-13-12-11-10-9-8-7-6-5-4-3-2-1-PHOTOS%2FCANCK117001.jpg"
  },{
    place: "China",
    price: 1200,
    timeToGo: "Fall",
    imgURL: "https://auspost.com.au/content/dam/auspost_corp/media/images/travel-id/china.jpg.auspostimage.970*0.low.jpg"
  },{
    place: "Russia",
    price: 1100,
    timeToGo: "Summer",
    imgURL: "http://www.telegraph.co.uk/content/dam/business/2016/04/15/russia-30_3339166a-xlarge_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg"
  },{
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring",
    imgURL: "https://s-i.huffpost.com/gen/3381774/images/n-LEBANON-628x314.jpg"
  }
]

const App = () => {
    const mappedVacations = vacationSpots.map(vacation => {
        return <Vacation place={vacation.place} price={vacation.price} timeToGo={vacation.timeToGo} imgURL={vacation.imgURL}/>
    })
    return (
      <div className="main">
          {mappedVacations}
      </div>
    )
}

export default App;
