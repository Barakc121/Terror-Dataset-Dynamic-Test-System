import { useState, useEffect } from "react";

function ShowData() {

    const [data, setData] = useState()

    async function getAllData() {
        try {
            const res = await fetch("http://localhost:5000/get_data")
            const allData = await res.json();
            console.log(allData);
            setData(allData.data)
        } catch (error) {
            console.log("the problem is in get all data in the client: ", error);
        }
    }

    useEffect(() => {
        getAllData()
    }, [])

    return (
        <div>
            <ul>
                {/* {data.map((eventid, iyear, country_txt) => {
                    return (
                        <li key={eventid}>
                            Number: {eventid}, Index: {iyear}, Array: {country_txt}
                        </li>
                    );
                })} */}
            </ul>
        </div>
    )
}

export default ShowData

// function ComplaintList() {


//     return (
//         <div>
//             <h2>comliant list</h2>
//             <button>food</button>
//             <button>residence</button>
//             <button>reaching</button>
//             <button>command</button>
//             {data.map((key) => {
//                 return (
//                     <div key={key}>
//                         category:{key.category}
//                         message:{key.message}
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

//             <table>
//                 <tr>
//                     <th>Name</th>
//                     <th>Age</th>
//                     <th>Gender</th>
//                 </tr>
//                 <tr>
//                     <td>Anom</td>
//                     <td>19</td>
//                     <td>Male</td>
//                 </tr>
//                 <tr>
//                     <td>Megha</td>
//                     <td>19</td>
//                     <td>Female</td>
//                 </tr>
//                 <tr>
//                     <td>Subham</td>
//                     <td>25</td>
//                     <td>Male</td>
//                 </tr>
//             </table>
