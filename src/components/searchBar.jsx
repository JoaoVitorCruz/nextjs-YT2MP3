import style from '../styles/searchBar.module.css'

function SearchBar(props) {
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const confirmed = window.confirm('Isso pode levar uns segundos, por favor pressione OK para continuar')
        
        if(!confirmed) return;

        let query

        if(e.target[0].value == '') {
            query = 'vazio existencial'
        } else {
            query = e.target[0].value
        }

        const searchVideo = query
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