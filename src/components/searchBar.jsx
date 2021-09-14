function SearchBar(props) {
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const confirmed = window.confirm('Isso pode levar uns segundos, por favor pressione OK para continuar')
        
        if(!confirmed) return;

        console.log('Aguarde um instante')
        
        const searchVideo = e.target[0].value
        const searchBody = await fetch('/api/search/'+searchVideo)
        const searchResult = await searchBody.json()
        props.setSearchResult(searchResult.items)
    }

    return <div>
        <form method="post" onSubmit={(e)=>{handleSubmit(e)}}>
            <input type="text"/>
            <input type="submit"/>
        </form>
    </div>
}

export default SearchBar;