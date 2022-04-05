import { Alert, Form, Button } from 'react-bootstrap';
import { Fragment, useState } from 'react';
import './style.scss'

const Calculator = () => {
    const [emptyStringAlert, setEmptyStringAlert] = useState(false);
    const [wrongOperationAlert, setWrongOperationAlert] = useState(false);
    const [infinity, setInfinity] = useState(false);
    const [result, setResult] = useState(0);

    const RenderResult = () =>
        <div className="app-calulator-result">
            Resultado: {<strong>{result}</strong>}
        </div>

    const EmptyStringAlert = () =>
        <Alert variant="danger" onClose={() => setEmptyStringAlert(false)} dismissible>
            <Alert.Heading>Ups! 🙈</Alert.Heading>
            <p>Parece que falto algun dato para completar la operaci&#243;n</p>
        </Alert>

    const WrongOperationAlert = () =>
        <Alert variant="danger" onClose={() => setWrongOperationAlert(false)} dismissible>
            <Alert.Heading>Lo sentimos 😔</Alert.Heading>
            <p>La operaci&#243;n no esta disponible</p>
        </Alert>

    const InfinityAlert = () =>
        <Alert variant="danger" onClose={() => setInfinity(false)} dismissible>
            <Alert.Heading>Woah! 🤯</Alert.Heading>
            <p>Lo siento pero, creo que no puedo realizar esa operaci&#243;n</p>
        </Alert>

    const cleanOperationString = value => {
        return String(value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    const CallOperation = {
        suma: ({ first, second }) => setResult(first + second),
        resta: ({ first, second }) => setResult(first - second),
        multiplicacion: ({ first, second }) => setResult(first * second),
        division: ({ first, second }) => {
            const tmp = first / second;
            setResult(tmp)
            if (Infinity === tmp) {
                setInfinity(true);
            }
        },
    }

    const toggleOperation = event => {
        event.preventDefault();

        setEmptyStringAlert(false);
        setWrongOperationAlert(false);
        setInfinity(false);

        if ('' === event.target[0].value ||
            '' === event.target[1].value ||
            '' === event.target[2].value) {
            setEmptyStringAlert(true);
            return;
        }

        const operation = cleanOperationString(event.target[0].value);
        const first = Number(event.target[1].value);
        const second = Number(event.target[2].value);
        if (false === ["suma", "resta", "multiplicacion", "division"].includes(operation)) {
            setWrongOperationAlert(true);
            return;
        }
        CallOperation[operation]({ first, second });
    };

    return (
        <Fragment>
            {emptyStringAlert && <EmptyStringAlert />}
            {wrongOperationAlert && <WrongOperationAlert />}
            {infinity && <InfinityAlert />}
            <Form onSubmit={ event => toggleOperation(event) }>
                <Form.Group controlId="form-operation">
                    <Form.Label>Operaci&#243;n</Form.Label>
                    <Form.Control name="operation" type="text" placeholder="Operaci&#243;n" />
                    <Form.Text>
                        Puede ser "suma", "resta", "multiplicaci&#243;n" y "divisi&#243;n"
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="form-first_number">
                    <Form.Label>Primer Numero</Form.Label>
                    <Form.Control name="first" type="number" placeholder="0" />
                </Form.Group>
                <Form.Group controlId="form-second_number">
                    <Form.Label>Segundo Numero</Form.Label>
                    <Form.Control name="second" type="number" placeholder="0" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Resultado
                </Button>
            </Form>
            {0 !== result && Infinity !== result && <RenderResult />}
        </Fragment>
    );
}
export default Calculator;