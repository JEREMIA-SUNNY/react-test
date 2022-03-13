import React  from "react"
import jerry from "./jerry.jpg"
import jerry2 from "./jerry.MOV"
const Main=()=>{
return(

<div className="mainpage">
    <header className="heading"><h1>THIS IS JEREMIA</h1></header>    
    <p className="desc">I am an Associate Engineer holding diploma in Computer Hardware Engineering with software programming knowledge, seeking opportunities in the Information technology field.An engineer or developer who works on both the front end (client-side) and the back end (server-side) of a website or application is called a full-stack developer. They may handle projects involving databases, APIs, or designing user-facing websites, as well as interacting with clients during developmen</p>
    <div><video src={jerry2 } controls="controls"autoPlay loop muted />
    </div>
</div>

)
}
export default Main