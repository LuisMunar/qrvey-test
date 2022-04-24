import { useState } from 'react'
import PropTypes from 'prop-types'

import './searcher.css'
import SearcherIcon from '../../assets/images/searcher/searcher.svg'
import { FAVORITES, SHOW_ALL } from '../../constants/searcherConstants'

const SearchStateless = ({ continents, handlerSearcher }) => {
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

  const requestHandlerSearch = () => {
    handlerSearcher({ searchValue, filterValue })
  }

  return (
    <div className="searcher">
      <input
        id="inputSearch"
        type="text"
        placeholder="Search country"
        className="searcher__input"
        onChange={ ($e) => setSearcheValue($e.target.value) }
        onKeyUp={ ($e) => $e.key === 'Enter' && requestHandlerSearch() }
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
        <option value={ SHOW_ALL } />
        <option value={ FAVORITES } />
        { continents.map((continent, i) => <option key={ i } value={ continent } />) }
      </datalist>

      <button
        className="searcher__button"
        onClick={ () => requestHandlerSearch() }
      >
        <img src={ SearcherIcon } alt="searcher" className="searcher__button-icon" />
      </button>
    </div>
  )
}

SearchStateless.protoTypes = {
  continents: PropTypes.array.isRequired,
  handlerSearcher: PropTypes.func.isRequired
}

export default SearchStateless