import "./actionbar.css"
import { useState } from "react"
import { Search } from "@assets/icons/Icon.jsx"
export default function Actionheader() {
    const [search, setSearch] = useState("")

    function handleSearch(e){
        setSearch(e.target.value)
    }

    const styleFocus = search !== "" ? "search-input-focus" : ""

    return (
        <header>
            <div className="input-container" >
                <input type="text" className={`search-input ${styleFocus}`} onChange={handleSearch}/>
                <span className="search-holder">
                    <Search className="icon-Search" />
                    Search
                </span>
            </div>
        </header>
    )
}