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
    const [count, setCount] = useState<number>(0); // Track current index for pagination

    useEffect(() => {
        const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(search.toLowerCase()));
        if(filteredCharacters.length === 0){
            setError(true);
        } else{
            setError(false);
        }
        setFilteredCharacters(filteredCharacters);
    }, [search, characters]);

    const showFiveCharacters = () => {
        setCount(prev => prev + 5);
    }

    const printCharactersByCount = filteredCharacters.slice(count, count + 5).map(character => {
        return (
            <div key={character.id}>
                <p>{character.name}, {character.status}, {character.species}, {character.gender}</p>
            </div>
        )
    });

    return (
        <>
            <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)}
                   placeholder="Search..."/>
            {error? <div>"Nothing found"</div> :<RickMortyGallery characters={filteredCharacters}/>}
            <button onClick={() => showFiveCharacters()}>show 5 characters</button>
            {printCharactersByCount}
        </>
    )
}

export default App
