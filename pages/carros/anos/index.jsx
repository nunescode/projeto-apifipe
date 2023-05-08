import Page from '@/components/Page'
import apiFipe from '@/services/apiFipe'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const index = ({ anos }) => {
  return (
    <>
    <Page titulo="titulo">
        <Row md={4}>
        {anos.map(item => ( 
                <Col>
                    <Card>
                        <Card.Img variant="top" src={item.urlImagem} />
                        <Card.Body>
                            <Card.Title><strong>{item.nome}</strong></Card.Title>
                                <p><strong>Código: </strong>{item.codigo}</p>
                            <Link className='btn btn-primary' href={'/carros/marcas/' + item.codigo + '/modelos/' + item.codigo + '/anos'}>Detalhes</Link>
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

    const id = context.params.id

    const codigoModelo = context.params.codigomodelo
    
    
    const resultado = await apiFipe.get('/carros/marcas/' + id + '/modelos' + codigoModelo + '/anos')
    const anos = resultado.data

    return {
        props: { anos },
    }
}