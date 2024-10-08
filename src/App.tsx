import './App.css'
import {RickMortyGallery} from "./Rick&MortyGallery.tsx";
import {useEffect, useState} from "react";
import {data} from "../data.ts";
import characterType from "./types/RickandMorty.ts";

function App() {
    const [search, setSearch] = useState<string>("");
    const [characters, setCharacters] = useState<characterType[]>(data);
    const [filteredCharacters, setFilteredCharacters] = useState<characterType[]>([]);
    const [error, setError] = useState<boolean>(false);


    useEffect(() => {
        const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(search.toLowerCase()));
        if(filteredCharacters.length === 0){
            setError(true);
        } else{
            setError(false);
        }
        setFilteredCharacters(filteredCharacters);
    }, [search, characters]);

    return (
        <>
            <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)}
                   placeholder="Search..."/>
            {error? <div>"Nothing found"</div> :<RickMortyGallery characters={filteredCharacters}/>}
        </>
    )
}

export default App
