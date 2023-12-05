import Alert from "react-bootstrap/alert"

const FormError = (Children) => {

    return (
        <Alert variant={danger}>

            {Children}
        </Alert>
    )
}

export default FormError