import { useDispatch, useSelector } from 'react-redux'
import { getCountriesToSearchMiddleware } from '../../redux/middlewares/countriesMiddleware'
import SearchStateless from './SearchStateless'

const Searcher = () => {
  const { continents } = useSelector(({ countriesReducer }) => countriesReducer)
  const dispatch = useDispatch()

  const handlerSearcher = (paramsToSearch) => {
    dispatch(getCountriesToSearchMiddleware(paramsToSearch))
  }

  return (
    <SearchStateless
      continents={ continents }
      handlerSearcher={ handlerSearcher }
    />
  )
}

export default Searcher