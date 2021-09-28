// import style from '../styles/searchBar.module.css'

function SearchBar(props) {
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        // const confirmed = window.confirm('Isso pode levar uns segundos, por favor pressione OK para continuar')
        
        // if(!confirmed) return;

        let query

        if(e.target[0].value == '') {
            query = 'psicodigo'
        } else {
            query = e.target[0].value
        }

        const searchVideo = query
        const searchBody = await fetch('/api/search/'+searchVideo)
        const searchResult = await searchBody.json()
        props.setSearchResult(searchResult.items)
    }

    return <div className="flex justify-center w-full">
        <form method="post" className="w-full flex" onSubmit={(e)=>{handleSubmit(e)}}>
                <input 
                type="text"
                placeholder="Procure um video aqui"
                className="border shadow-md py-2 px-4 text-center font-medium rounded-full outline-none w-9/12"
                />
                
                <input
                type="submit"
                value="Pesquisar"
                className="border shadow-md active:bg-gray-900 active: bg-gray-100 py-2 px-2 cursor-pointer text-center font-medium rounded-full outline-none ml-2 w-3/12"
                />
        </form>
    </div>
}

export default SearchBar;