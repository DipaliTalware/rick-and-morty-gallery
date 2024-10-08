import characterType from "./types/RickandMorty.ts";

type RickandMortyProps = {
    characters: characterType[]
}

export const RickMortyGallery = ({characters}: RickandMortyProps) => {

    const showResults = characters.map((character: characterType) => {
        return <div key={character.id}>
            <p>{character.name}, {character.status}, {character.species}, {character.gender}</p>
        </div>
    })

    return <>
        {showResults}
    </>
}