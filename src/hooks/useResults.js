import React from 'react'
import yelp from '../api/yelp';

const useResults = () => {
    const [results, setResults] = React.useState([]);
    const [errorMessage, setErrorMessage] = React.useState('')
  
    const searchApi = async (searchResult) => {
      try {
        const response = await yelp.get('/search', {
          params:{
            limit: 50,
            term:searchResult,
            location: 'san jose'
          }
        })
        setResults(response.data.businesses) 
      } catch (error) {
        setErrorMessage('Something went wrong');      
      }
    }
  
    React.useEffect(() => {
      searchApi('pasta')
    }, [])
    
    return [searchApi, results, errorMessage]
}

export default useResults