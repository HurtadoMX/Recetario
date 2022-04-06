import React, {useState} from 'react'
import style from 'styled-components'
import {BiSearchAlt} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const Search = () => {

    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const submitHandler =(e)=>{
        e.preventDefault()
        navigate('/searched/'+ input)
    }
  return (
    // <FormStyle onSubmit={submitHandler}>
    //     <div>
    //         <FaSearch>
                
    //         <input type="text"  value={input} onChange={(e)=> setInput(e.target.value)}/>
    //         </FaSearch>
    //     </div>

    // </FormStyle>
    <FormStyle onSubmit={submitHandler}>
        <div>
                 <BiSearchAlt/>   
            <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}/>
        </div>

    </FormStyle>
    )
}

const FormStyle = style.form`
    margin: 0rem 20rem;

    div{
        width: 400%;
        position: relative;
        left: -160%;

        
    }

    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: .5rem 3rem;
        border-radius: 1rem;
        outline: none;
        width: 100%;

    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`

export default Search