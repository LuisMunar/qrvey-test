import { useState } from 'react'

import './searcher.css'
import SearcherIcon from '../../assets/images/searcher/searcher.svg'

const Searcher = () => {
  const [searchValue, setSearcheValue] = useState('')
  const [filterValue, setFilterValue] = useState('Show all')
  const [copyFilterValue, setCopyFilterValue] = useState('')

  const handlersFocus = (e) => {
    setCopyFilterValue(e.target.value)
    setFilterValue('')
  }

  const handlerBlur = (e) => {
    const eventValue = e.target.value
    setFilterValue(eventValue === '' ? copyFilterValue : eventValue)
  }

  const handlersChange = (e) => {
    const eventValue = e.target.value
    setFilterValue(eventValue)
    const inputSearch = document.getElementById('inputSearch')
    inputSearch.focus()
  }

  const handlerSearch = () => {
    console.log('searching... => ', { searchValue, filterValue })
  }

  return (
    <div className="searcher">
      <input
        id="inputSearch"
        type="text"
        placeholder="Search country"
        className="searcher__input"
        onChange={ ($e) => setSearcheValue($e.target.value) }
      />

      <input
        id="myOptions"
        list="myOptionsList"
        value={ filterValue }
        placeholder={ copyFilterValue }

        onFocus={ ($e) => handlersFocus($e) }
        onBlur={ ($e) => handlerBlur($e) }
        onChange={ ($e) => handlersChange($e) }

        className="searcher__inputlist"
      />
      <datalist id="myOptionsList">
        <option value="Show all" />
        <option value="Favorites" />
        <option value="America" />
        <option value="Europa" />
        <option value="Africa" />
      </datalist>

      <button
        className="searcher__button"
        onClick={ () => handlerSearch() }
      >
        <img src={ SearcherIcon } alt="searcher" className="searcher__button-icon" />
      </button>
    </div>
  )
}

export default Searcher