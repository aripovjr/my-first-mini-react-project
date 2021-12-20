//I did not upload react packages
//for this reason it displays nothing untill you install packages
import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './App.css'

function List(){
  return(
    <section>
      <Laptop/>
      <Laptop/>
      <Laptop/>
      <Laptop/>
      <Laptop/>
      <Laptop/>
      <Laptop/>
      <Laptop/>
    </section>
  )
}

const Laptop = () =>{
  return (
    <article>
      <img src="https://m.media-amazon.com/images/I/81VbWDN53oL._AC_SL1500_.jpg" alt="" />
      <div className='details'>
        <h1>Apple Macbook Pro</h1>
        <h4>Jasur Aripov</h4>
      </div>
    </article>
  )
}

ReactDom.render(<List />, document.getElementById("root"))