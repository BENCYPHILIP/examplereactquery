/* eslint-disable no-unused-vars */
import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
const Fetchdata = () => {
    async function fetchPosts(){
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/po')   
        console.log("data",data) 
        return data
    }
    const {data, error, isError, isLoading } = useQuery('posts', fetchPosts) 
    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        // eslint-disable-next-line react/style-prop-object
        return <div>Error! {error.message}</div>
    }

  return (
 
<TableContainer>
  <Table  colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Title</Th>
        {/* <Th>Subjects</Th> */}
      </Tr>
    </Thead>
    <Tbody>
    {
        data.map((post) => {
            return (
      <Tr>
        <Td>{post.id}</Td>
        <Td>{post.title}</Td>
        {/* <Td>{post.body}</Td> */}
      </Tr>
       ) })
            }
    </Tbody>
  </Table>
</TableContainer>
  )
}

export default Fetchdata