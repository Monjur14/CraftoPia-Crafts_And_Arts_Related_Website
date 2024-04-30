import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const CraftAndArt = () => {

  const [allItems, setAllItems] = useState([])



  useEffect(() => {
    fetch("https://server-side-rust.vercel.app/items")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setAllItems(data)
    })
  }, [])


  return (
    <div className="contain">
     <div className="p-2 mx-auto sm:p-4">
	<div className="overflow-x-auto">
		<table className="min-w-full text-xsm lg:text-md lg:text-lg">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-24" />
			</colgroup>
			<thead className="dark:bg-gray-300">
				<tr className="text-left text-">
					<th className="p-3">Name</th>
					<th className="p-3">Price</th>
					<th className="p-3 hidden md:block">Customization</th>
					<th className="p-3">Stock Status</th>
					<th className="p-3 text-center">View Details</th>
				</tr>
			</thead>
			<tbody>
				{/* <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-600">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-600">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
							<span>Pending</span>
						</span>
					</td>
				</tr> */}
        {
          allItems.map((item) => (
            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50" key={item._id}>
            <td className="p-3">
              <p>{item.item_name}</p>
            </td>
            <td className="p-3">
              <p>{item.price}$</p>
            </td>
            <td className="p-3 hidden md:block">
              <p>{item.customization}</p>
            </td>
            <td className="p-3">
              <p className="dark:text-gray-600">{item.stockStatus}</p>
            </td>
            <td className="p-3 text-center">
            <Link to={`/details/${item._id}`}><button className="bg-cyan-700 text-white font-semibold text-lg px-6 py-1 rounded-md">see details</button></Link>
            </td>
          </tr>
          ))
        }				
			</tbody>
		</table>
	</div>
</div>
    </div>
  )
}

export default CraftAndArt
