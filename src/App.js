import React , { useState } from 'react'
import JSONDATA from './Countries.json'
import TextField from '@material-ui/core/TextField';
import "./App.css"

export default function App() {

const [SearchTerm, setSearchTerm] = useState('')

  return (
    <div className="App">
      {/* <input type="text" placeholder="Search Country" onChange={event => {setSearchTerm(event.target.value)}}/> */}
        <TextField className = "form" id="outlined-basic" label="Outlined" variant="outlined" placeholder="Search Country" onChange={event => {setSearchTerm(event.target.value)}}/>
      {JSONDATA.filter((val) => {
        if (SearchTerm === ""){
          return val
        }
        else if (val.country.toLocaleLowerCase().includes(SearchTerm.toLocaleLowerCase())){
          return val
        }
      }).map((val,key) => {
        return (
            <div className="country" key={key}>
            	<p>{val.country}'s capital is {val.city}</p>
            </div>
          )
      })}
    </div>
  )
}
