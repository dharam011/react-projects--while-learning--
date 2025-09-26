
import { useLoaderData } from 'react-router-dom'


const Github = () => {
     const data= useLoaderData()
// const [data , setdata] =useState([])
//     useEffect(() => {
//         fetch('https://api.github.com/users/dharam011')
//     .then(res=>res.json())
// .then(data=>setdata(data));}

// ,[])
    
  return (
    <div className='flex justify-center items-center   '>
   <div className='container w-96 h-96 flex items-center m-5 rounded-lg justify-center  text-white flex-col p-5 text-xl font-thin bg-red-600  '>
    <img className='w-32 h-32 rounded-full' src={data.avatar_url} alt="" />
    <h1> Name : {data.name}</h1>
    <h1> User Name : {data.login}</h1>
    <h1> Followers : {data.followers}</h1>
    <h1> Following : {data.following}</h1>
    <h1> Repositories : {data.public_repos}</h1>

   </div>
    </div>
  )
}

export default Github


