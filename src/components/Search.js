import searchLogo from '../search.png';


const Search = ({handleSearchNote}) => {
    return (
         <div className='search'>
        <img src={searchLogo}></img>
            <input onChange={(event) => 
                handleSearchNote(event.target.value)} 
                type='text' 
                placeholder='Type to search...'>
                </input>
    </div>
    );
};

export default Search;