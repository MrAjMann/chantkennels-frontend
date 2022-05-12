import React from 'react'
import { SectionContainer, Title } from '../globalStyles'
import { Form, InnerFormWrapper, Label, Input, FormTitle } from '../components/formElements/formStyle'
import { EmptyButtonWrapper,Button } from '../components/button/buttonStyle'
// import { Container, OuterFormContainer } from '../components/layout/layoutStyles'

const AdminLogin = () => {
    return (
        <SectionContainer>
                    <Container>
                        <Title>Chant Kennels Admin</Title>
                    <OuterFormContainer>
                    <FormTitle>Log In</FormTitle>
                    <Form>
                        <InnerFormWrapper>
                        <Label>Email:</Label>
                        <Input placeholder='Email' />
                        </InnerFormWrapper>
                        <InnerFormWrapper>
                        <Label>Password:</Label>
                        <Input placeholder='Password' />
                        </InnerFormWrapper>
                        <EmptyButtonWrapper>
                            <Button>Login</Button>
                        </EmptyButtonWrapper>
                    </Form>
                </OuterFormContainer>
                    </Container>
        </SectionContainer>
    )
}

export default AdminLogin


