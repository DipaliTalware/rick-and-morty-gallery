

export const RickMortyGallery = ({characters}) => {

    const showResults = characters.map(character => {
        return <div key={character.id}>
            <p>{character.name}</p>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
        </div>
    })

    return <>
        {showResults}
    </>
}