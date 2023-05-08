import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap'
import Header from './Header'

const Page = (props) => {
  return (
    <>
    <Header/>
      <div className="bg-secondary text-white py-2 text-center margin-bottom mb-3">
        <h3>{props.titulo}</h3>
      </div>
        <Container>{props.children}</Container>
        <Container/>
    </>
  )
}

export default Page