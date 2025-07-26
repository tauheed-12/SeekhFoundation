import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_ALL_WORK } from './api/worksSection/workApi'

function Test() {


    const variable=GET_ALL_WORK
    console.log(variable)

    const { data, loading, error } = useQuery(GET_ALL_WORK)
    console.log(data)

  return (
    <div>Test</div>
  )
}

export default Test