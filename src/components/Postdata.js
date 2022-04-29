import React,{useState} from 'react'
import { useMutation} from 'react-query'
import {Button} from '@chakra-ui/react'
import axios from 'axios'
const Postdata = () => {
    const[title,setTitle]=useState('')
    const[description,setDescription]=useState('')
    const[message,setMessage]=useState('')

    const {isLoading, isError, error, mutate} = useMutation(createPost)
    async function createPost() {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts')
        setMessage(response.data)
    }
  return (
        <div className="post">
            <h1>Create a Post</h1>

                <label>New post:</label>
                <input type="text" value={title} onChange={e=>setTitle(e.target.value)}/>

                <label>Description of the post to be created:</label>
                <input type="text" value={description} onChange={e=>setDescription(e.target.value)}/>
                <Button colorScheme='blue' onClick={() => {mutate({ id: Date.now(), title, description })}} >Create</Button>
                <p> Created a new Post ID: {message && message.id}</p>
                <div style={{color: 'gray', background: '#234'}}>
        {isLoading
          ? "new data is being saved...": ""
        }
        {
            isError
            ? error.message : ""
        }
      </div>
    </div>
  )
}

export default Postdata