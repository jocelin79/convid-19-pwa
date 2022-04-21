import React, {memo, useState, useCallback, useEffect} from 'react';
import Api from '../../api';
import Board from './components/Borad'
import {ContainerStyled} from './style'

function Main() {

  const [data, setData] = useState({})
  const [country, setCountry] = useState('brazil')

  const getCovidData = useCallback((country) => {
    Api.getCountry(country)
      .then(data => setData(data))
  }, [])

  useEffect(()=>{
    
  }, [getCovidData, country])
  return (
    <ContainerStyled>
      <div className="mb-2">
      </div>
      <Board data={data} />
    </ContainerStyled>
  )
}

export default memo(Main)