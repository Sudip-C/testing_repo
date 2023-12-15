import { useEffect, useState } from "react"


const CompletedEventPage = () => {

    const getData = async () => {
        let response = await fetch('http://localhost:3001/completed');
        let data = await response.json();
        // console.log(data);
        setState(data);
    }

    const [state, setState] = useState([]);

    useEffect(() => { getData() }, []);


    return (
        <div className="flex w-screen h-screen">
            <div className="h-screen w-1/5 bg-blue-500">
                <h2 className="text-lg font-semibold">Side Navbar</h2>
            </div>

            <div className="w-4/5">
                <div className="w-4/5 h-12 flex justify-between items-center px-10">
                    <h2 className="text-3xl text-blue-500 font-semibold">Completed Events Table</h2>
                    <input
                        type="text"
                        placeholder="Search Event..."
                        className="px-2 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>


                <div className="container mx-auto p-8">
                    <table className="w-full border border-collapse">
                        <thead>
                            <tr className="bg-blue-500">
                                <th className="py-2 text-white px-2 border">S.No</th>
                                <th className="py-2 text-white px-2 border">Event Name</th>
                                <th className="py-2 text-white px-4 border">Venue</th>
                                <th className="py-2 text-white px-4 border">Date</th>
                                <th className="py-2 text-white px-4 border">Attendance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.map((ele,index) => (
                                <tr key={ele['S.No']} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-100'}>
                                    <td className="py-2 px-4 border">{ele['S.No']}</td>
                                    <td className="py-2 px-4 border">{ele['Event name']}</td>
                                    <td className="py-2 px-4 border">{ele['venue']}</td>
                                    <td className="py-2 px-4 border">{ele['date']}</td>
                                    <td className="py-2 px-4 border">{ele['attendance']}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default CompletedEventPage