import Page from '@/components/Page'
import apiFipe from '@/services/apiFipe'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Detalhes = ({ modelo, id }) => {
  return (
    <>
    <Page titulo='titulo'>
        <Row md={4}>
        {modelo.map(item => ( 
                <Col>
                    <Card>
                        <Card.Img variant="top" src={item.urlImagem} />
                        <Card.Body>
                            <Card.Title><strong>{item.nome}</strong></Card.Title>
                                <p><strong>Código: </strong>{item.codigo}</p>
                            <Link className='btn btn-primary' href={'/carros/marcas/' + id + '/modelos/' + item.codigo + '/anos'}>Detalhes</Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Page>
    </>
  )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id
    
    const resultado = await apiFipe.get('/carros/marcas/' + id + '/modelos')
    const modelo = resultado.data.modelos

    return {
        props: { modelo, id },
    }
}