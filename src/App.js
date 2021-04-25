import React , { useState } from 'react'
import JSONDATA from './Countries.json'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./App.css"

export default function App() {

const [SearchTerm, setSearchTerm] = useState('')
const [IsClicked, setIsClicked] = useState(0)
// const handler = (c) =>{
//    setIsClicked(1);
// }

  return (
    <div className="App">
        <TextField className = "form" id="outlined-basic" label="Country Name" variant="outlined" placeholder="Search Country" onChange={event => {setSearchTerm(event.target.value)}}/>
      {JSONDATA.filter((val) => {
        if (SearchTerm === ""){
          return val
        }
        else if (val.country.toLocaleLowerCase().includes(SearchTerm.toLocaleLowerCase())){
          return val
        }
      }).map((val,key) => {
        return (
          <Button variant="primary">
            <div className="wrapper">
            <div className="country" key={key}>
            	<p>{val.country}</p>
              <p>{val.city}</p>
            </div>
			      </div>
          </Button>
			
          )
      })}
    </div>
  )
}
