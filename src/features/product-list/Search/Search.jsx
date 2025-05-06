
export default function Search({setSearchQuery}){
    return <input onInput={(event)=>setSearchQuery(event.target.value)} placeholder="Search by model or brand" type="text"/>
}