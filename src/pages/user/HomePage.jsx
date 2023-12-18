import { useState } from "react";

const HomePage = () => {
  const all_Events = [
    {
      id: 1,
      title: "Masai alumni reunion",
      time: "05.00 pm",
      date: "22/07/2022",
    },
    {
      id: 2,
      title: "Masai alumni reunion",
      time: "05.00 pm",
      date: "22/07/2022",
    },
    {
      id: 3,
      title: "Masai alumni reunion",
      time: "05.00 pm",
      date: "22/07/2022",
    },
  ];

  const [events, setEvents] = useState(all_Events || []);
  const [searchInput, setSearchInput] = useState("");

  {
    /*
 const searchEvents = () => {
    console.log(searchInput);
    let filtered = all_Events.filter((el) => {
      el.title == searchInput;
    });

    setEvents(filtered);
  };
*/
  }

  return (
    <div
      className="  sm:grid 
       sm:grid-cols-3 justify-between p-4  gap-4 sm:h-screen "
    >
      <div id="events_main_div" className=" sm:col-span-2  ">
        <div id="heading" className="p-3 ">
          <div className="flex flex-row justify-between gap-2">
            <div className="border-2 border-black p-2 rounded-xl text-2xl font-bold">
              <h1> All Events</h1>
            </div>

            <div className=" p-1 flex flex-col items-end gap-1 sm:flex-row">
              <div>
                <input
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  placeholder="search your  event..."
                  className="border-2 border-gray-900 border-solid p-2 rounded-lg text-center"
                ></input>
              </div>
              <div>
                <button className="rounded-lg p-2 bg-orange-500">Search</button>
              </div>
            </div>
          </div>
        </div>
        {/*green outer*/}
        <div id="container" className=" flex flex-col gap-2 justify-evenly  ">
          {/*red inner*/}
          <div
            id="events_showcase"
            className="p-3 flex flex-col gap-2 bg-[#eceff8]  rounded-xl"
          >
            <div>
              <h1 className="text-lg font-semibold">All events overview</h1>
            </div>

            {events.map((el) => (
              <div
                key={el.id}
                className="flex flex-row rounded-lg  shadow hover:shadow-lg justify-around p-2 border-2 
                items-center bg-white 
                
                "
              >
                <div className="text-center p-2 rounded-xl bg-[#eceff8] font-medium hover:cursor-pointer">
                  {" "}
                  <p className="hover:cursor-pointer ">{el.time}</p>
                  <p className="hover:cursor-pointer">{el.date}</p>
                </div>
                <div className="text-center p-2 font-medium ">
                  <p className="hover:cursor-pointer">{el.title}</p>
                  <p className="hover:cursor-pointer font-normal hidden sm:block ">
                    {el.title}
                  </p>
                </div>
                <div>
                  <button className="rounded-lg bg-blue-500 text-white border-black  p-2 hover:bg-black hover:text-white">
                    Show details
                  </button>
                </div>
              </div>
            ))}

            <div></div>
          </div>

          <div
            id="active_Events"
            className="p-3 flex flex-col gap-2 bg-[#eceff8] rounded-xl "
          >
            <div>
              <h1 className="text-lg font-semibold">Active Events</h1>
            </div>
            <div id="events_active" className=" flex flex-col gap-2">
              {events.map((el) => (
                <div
                  key={el.id}
                  className="flex flex-row rounded-lg  shadow hover:shadow-lg justify-around p-2 border-2 
                items-center bg-white
                
                "
                >
                  <div className="text-center p-2 rounded-xl bg-[#eceff8] font-medium hover:cursor-pointer ">
                    {" "}
                    <p className="hover:cursor-pointer">{el.time}</p>
                    <p className="hover:cursor-pointer">{el.date}</p>
                  </div>
                  <div className="text-center p-2 font-medium ">
                    <p className="hover:cursor-pointer">{el.title}</p>
                    <p className="hover:cursor-pointer font-normal hidden sm:block">
                      {el.title}
                    </p>
                  </div>
                  <div>
                    <button className="rounded-lg bg-blue-500 text-white border-black  p-2 hover:bg-black hover:text-white">
                      Show details
                    </button>
                  </div>
                </div>
              ))}
              {/* <div className="flex flex-row justify-around border-2 border-black p-2">
                <p className="border-2 border-black">details</p>
                <p className="border-2 border-black">time</p>
                <p className="border-2 border-black">date</p>
                <button className="border-2 border-black">Show details</button>
            </div>*/}

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
