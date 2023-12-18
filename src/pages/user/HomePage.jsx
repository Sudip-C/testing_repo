import { useState } from "react";

const HomePage = () => {

const all_Events=[
  {
    "id":1,
    "title":"Masai alumni reunion",
    "time":"05.00 pm",
    "date":"22/07/2022"
  },
  {
    "id":2,
    "title":"Masai alumni reunion",
    "time":"05.00 pm",
    "date":"22/07/2022"
  },
  {
    "id":3,
    "title":"Masai alumni reunion",
    "time":"05.00 pm",
    "date":"22/07/2022"
  }
]

const [events,setEvents] = useState(all_Events||[])
const [searchInput,setSearchInput] = useState("")
const searchEvents = ()=>{
console.log(searchInput)
let filtered= all_Events.filter((el)=>{el.title==searchInput})

setEvents(filtered)
}

  return (
    <div
      className="border-2 border-black   sm:grid 
       sm:grid-cols-3 justify-between p-4  gap-4 sm:h-screen "
    >
      <div
        id="events_main_div"
        className="border-2 border-black sm:col-span-2 "
      >
        <div id="heading" className="p-3">
          <div className="flex flex-row justify-between gap-2">
            <div className="border-2 border-black p-1">
              <h1> All Events</h1>
            </div>

              <div className="border-2 border-black p-1">
              <input
                value={searchInput}
                onChange={(e)=>setSearchInput(e.target.value)}
                type="text"
                placeholder="search your  event..."
                className="border-2 border-gray-900 border-solid "
              ></input>
              <button className="border-solid border-2 border-black-500
               p-1 rounded-md m-2" onClick={searchEvents}>Search</button>
            </div> 
          </div>
        </div>

        <div
          id="container"
          className="border-4 border-green-400 flex flex-col justify-evenly h-[600px] "
        >
          <div
            id="events_showcase"
            className="p-3 flex flex-col gap-2 border-2 border-red-500"
          >
            <div>
              <h1>events overview</h1>
            </div>
            {events.map((el)=>(
              <div key={el.id} className="flex flex-row rounded-lg  shadow hover:shadow-lg justify-around p-2">
              <p className=" font-bold border-2 border-black">{el.title}</p>
              <p className="border-2 border-black">{el.time}</p>
              <p className=" border-2 border-black">{el.date}</p>
              <button className="border-2 border-black">Show details</button>
            </div>
            ))}
            <div></div>
          </div>

          <div id="active_Events" className="border-2 border-blue-700">
            <div className="p-2">
              <h1>Active Events</h1>
            </div>
            <div id="events_active" className="p-3 flex flex-col gap-2">
            {events.map((el)=>(
              <div key={el.id} className="flex flex-row rounded-lg shadow hover:shadow-lg justify-around  p-2">
              <p className="border-2 font-bold border-black">{el.title}</p>
              <p className="border-2 border-black">{el.time}</p>
              <p className="border-2 border-black">{el.date}</p>
              <button className="border-2 border-black">Show details</button>
            </div>
            ))}
              {/* <div className="flex flex-row justify-around border-2 border-black p-2">
                <p className="border-2 border-black">details</p>
                <p className="border-2 border-black">time</p>
                <p className="border-2 border-black">date</p>
                <button className="border-2 border-black">Show details</button>
              </div> */}

              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="calendar"
        className="border-2 border-black h-[150px] sm:col-span-1 mt-4 "
      >
        calendar
      </div>
    </div>
  );
};

export default HomePage;
