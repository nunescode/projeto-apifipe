import Page from '@/components/Page'
import apiFipe from '@/services/apiFipe'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const index = ({ carros }) => {
  return (
    <>
    <Page titulo="Carros">
        <Row md={4}>
            {carros.map(item => ( 
                <Col>
                    <Card>
                        <Card.Img variant="top" src={''} />
                        <Card.Body>
                            <Card.Title><strong>{item.nome}</strong></Card.Title>
                                <p><strong>Código: </strong>{item.codigo}</p>
                            <Link className='btn btn-primary' href={'/carros/marcas/' + item.codigo}>Detalhes</Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Page>
    </>
  )
}

export default index

export async function getServerSideProps(context) {

    const resultado = await apiFipe.get('/carros/marcas')
    const carros = resultado.data

    return {
        props: { carros },
    }
}