import { Alert, Form, Button } from 'react-bootstrap';
import { Fragment, useState } from 'react';
import './style.scss'

const Calculator = () => {
    const [emptyStringAlert, setEmptyStringAlert] = useState(false);
    const [wrongOperationAlert, setWrongOperationAlert] = useState(false);
    const [naNNumberAlert, setNaNNumberAlert] = useState(false);
    const [infinityAlert, setInfinityAlert] = useState(false);
    const [result, setResult] = useState(0);

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
        
    const NaNNumberAlert = () =>
        <Alert variant="danger" onClose={() => setNaNNumberAlert(false)} dismissible>
            <Alert.Heading>Espera... 🤔</Alert.Heading>
            <p>Parece que uno de los numeros ingresados no es valido</p>
        </Alert>

    const InfinityAlert = () =>
        <Alert variant="danger" onClose={() => setInfinityAlert(false)} dismissible>
            <Alert.Heading>Woah! 🤯</Alert.Heading>
            <p>Lo siento pero, creo que no puedo realizar esa operaci&#243;n</p>
        </Alert>

    const cleanOperationString = value => {
        return String(value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    const roundNumberResult = rawNumber => {
        if (Number.isInteger(rawNumber)) {
            return rawNumber;
        }
        return rawNumber.toFixed(2);
    }

    const CallOperation = {
        suma: ({ first, second }) => setResult(roundNumberResult(first + second)),
        resta: ({ first, second }) => setResult(roundNumberResult(first - second)),
        multiplicacion: ({ first, second }) => setResult(roundNumberResult(first * second)),
        division: ({ first, second }) => {
            const tmp = roundNumberResult(first / second);
            setResult(tmp)
            if (Infinity === tmp) {
                setInfinityAlert(true);
            }
        },
    }

    const toggleOperation = event => {
        event.preventDefault();

        setResult(0);
        setEmptyStringAlert(false);
        setWrongOperationAlert(false);
        setNaNNumberAlert(false);
        setInfinityAlert(false);

        const operation = cleanOperationString(event.target[0].value);
        if ('' === operation || '' === event.target[1].value || '' === event.target[2].value) {
            setEmptyStringAlert(true);
            return;
        }

        const first = Number(event.target[1].value);
        const second = Number(event.target[2].value);

        if (isNaN(first) || isNaN(second)) {
            setNaNNumberAlert(true);
            return;
        }

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
            {naNNumberAlert && <NaNNumberAlert />}
            {infinityAlert && <InfinityAlert />}
            <div className="app-calulator-form-wrapper">
                <Form className="app-calulator-form" onSubmit={ event => toggleOperation(event) }>
                    <Form.Group controlId="form-operation">
                        <Form.Label>Operaci&#243;n</Form.Label>
                        <Form.Control name="operation" type="text" placeholder="Puede ser 'suma', 'resta', 'multiplicaci&#243;n' y 'divisi&#243;n'" />
                    </Form.Group>
                    <Form.Group controlId="form-first_number">
                        <Form.Label>Primer Numero</Form.Label>
                        <Form.Control name="first" placeholder="0.0" />
                    </Form.Group>
                    <Form.Group controlId="form-second_number">
                        <Form.Label>Segundo Numero</Form.Label>
                        <Form.Control name="second" placeholder="0.0" />
                    </Form.Group>
                    <div>
                        <Button variant="primary" type="submit">
                            Resultado
                        </Button> { false === infinityAlert ? <strong>{ result }</strong> : null }
                    </div>
                </Form>
            </div>
        </Fragment>
    );
}
export default Calculator;