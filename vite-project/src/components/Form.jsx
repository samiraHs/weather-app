
import{context} from"../CityContext"

const Form = () => {
    const{fetchWeatherData,city,setCity}=context();
    const handleSubmit=(event)=>{
        event.preventDefault();
        fetchWeatherData();
        
    }
  return (
    <div className="flex justify-center w-full mb-5 p-5">
        <form onSubmit={handleSubmit} className="flex ">
            <input type="text"
            placeholder="search for City" 
            className="rounded-l-md px-4 py-2 outline-none bg-slate-100 w-96"
            onChange={(event)=>setCity(event.target.value)}
            value={city}
            />
            <button
             type="submit"
             className="bg-sky-700 text-white rounded-r-md px-4 py-2 ml-1 hover:bg-sky-900">search
            </button>
        </form>

    </div>
  )
}
export default Form