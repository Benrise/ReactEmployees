import { Card, Layout, Row, Form } from 'antd'
import React from 'react'

export const Register = () => {
  return (
      <Row align="middle" justify="center">
          <Card title="Регистрация" className='w-1/3'>
              <Form onFinish={() => null}>
                  
              </Form>
          </Card>
      </Row>
  )
}
