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
      <Image />
      <div className='details'>
        <Title />
        <Author />
      </div>
    </article>
  )
}

const Image = () => <img src="https://m.media-amazon.com/images/I/81VbWDN53oL._AC_SL1500_.jpg" alt="" />
const Title = () => <h1>Apple Macbook Pro</h1>
const Author = () => <h4>Jasur Aripov</h4>


ReactDom.render(<List />, document.getElementById("root"))