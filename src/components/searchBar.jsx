import style from '../styles/searchBar.module.css'

function SearchBar(props) {
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const confirmed = window.confirm('Isso pode levar uns segundos, por favor pressione OK para continuar')
        
        if(!confirmed) return;

        const searchVideo = e.target[0].value
        const searchBody = await fetch('/api/search/'+searchVideo)
        const searchResult = await searchBody.json()
        props.setSearchResult(searchResult.items)
    }

    return <div className={style.container}>
        <form method="post" onSubmit={(e)=>{handleSubmit(e)}}>
                <input type="text" placeholder="Procure um video aqui"/>
                <input type="submit" value="Pesquisar"/>
        </form>
    </div>
}

export default SearchBar;