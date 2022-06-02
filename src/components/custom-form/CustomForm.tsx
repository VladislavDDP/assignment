import {
    IonButton,
    IonCard,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonRadio,
    IonRadioGroup,
    IonSegment,
    IonText,
    IonTitle,
} from '@ionic/react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { FC, useRef, useState } from 'react';
import { object, array, number } from 'yup';

import style from './custom-form.module.css';
import { VectorService } from '../../services/VectorService';

const validationSchema = object().shape({
    vector1: array().of(number().required()),
    vector2: array().of(number().required()),
});

interface FormValues {
    vector1: Array<number>;
    vector2: Array<number>;
}

interface Props {
    service: VectorService;
}

const VectorForm: FC<Props> = ({ service }) => {
    const [initialValues, setInitialValues] = useState<FormValues>({ vector1: [], vector2: [] });
    const [option, setOption] = useState<string>('add');
    const [result, setResult] = useState('');

    const inputRef = useRef<HTMLIonInputElement>(null);

    const generateFormWithSize = () => {
        const newSize = Number(inputRef.current?.value);

        if (newSize > 0 && newSize < 7) {
            setInitialValues({ vector1: new Array(newSize).fill(''), vector2: new Array(newSize).fill('') });
        }
    };

    const calculate = ({vector1, vector2}: FormValues) => {
        let tempResult = '';

        switch (option) {
            case 'add':
                tempResult = service.add(vector1, vector2);
                break;
            
            case 'subtract':
                tempResult = service.subtract(vector1, vector2);
                break;

            case 'scalarProd':
                tempResult = service.scalarProduct(vector1, vector2);
                break;
        }

        setResult(tempResult.toString());
    };

    return (
        <IonSegment style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ margin: '0 0 20px' }}>
                <IonInput
                    ref={inputRef}
                    style={{ background: '#333', margin: '20px 0' }}
                    placeholder="Введіть розмірність векторів: "
                />
                <IonButton onClick={generateFormWithSize}>Сгенерувати</IonButton>
            </div>

            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={calculate}
            >
                {({ values, errors, touched }) =>
                    values.vector1.length > 0 &&
                    values.vector2.length > 0 && (
                        <Form>
                            <div
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                }}
                            >
                                <FieldArray
                                    name="vector1"
                                    render={() => (
                                        <div className={style.w100}>
                                            <IonText>Vector 1:</IonText>
                                            {values.vector1.map((field: any, index: number) => (
                                                <div key={index}>
                                                    <Field
                                                        className={style.input}
                                                        style={{
                                                            border:
                                                                (touched.vector1 as any)?.length &&
                                                                (touched.vector1 as any)?.[index] &&
                                                                errors.vector1?.length &&
                                                                errors.vector1[index]
                                                                    ? '2px solid red'
                                                                    : '',
                                                        }}
                                                        name={`vector1[${index}]`}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                />
                                <FieldArray
                                    name="vector2"
                                    render={() => (
                                        <div className={style.w100}>
                                            <IonText>Vector 2:</IonText>
                                            {values.vector2.map((field: any, index: number) => (
                                                <div key={index}>
                                                    <Field
                                                        className={style.input}
                                                        style={{
                                                            border:
                                                                (touched.vector2 as any)?.length &&
                                                                (touched.vector2 as any)?.[index] &&
                                                                errors.vector2?.length &&
                                                                errors.vector2[index]
                                                                    ? '2px solid red'
                                                                    : '',
                                                        }}
                                                        name={`vector2[${index}]`}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                />
                            </div>

                            <IonList>
                                <IonRadioGroup value={option} onIonChange={(e) => setOption(e.detail.value)}>
                                    <IonListHeader>
                                        <IonLabel>Оберіть дію над векторами: </IonLabel>
                                    </IonListHeader>

                                    <IonItem>
                                        <IonLabel>Сума</IonLabel>
                                        <IonRadio slot="start" value="add" />
                                    </IonItem>

                                    <IonItem>
                                        <IonLabel>Різниця</IonLabel>
                                        <IonRadio slot="start" value="subtract" />
                                    </IonItem>

                                    <IonItem>
                                        <IonLabel>Скалярний добуток</IonLabel>
                                        <IonRadio slot="start" value="scalarProd" />
                                    </IonItem>
                                </IonRadioGroup>
                            </IonList>

                            <IonButton
                                style={{ margin: '20px 0' }}
                                type="submit"
                                disabled={values.vector1.length !== values.vector2.length}
                            >
                                Розрахунок
                            </IonButton>
                        </Form>
                    )
                }
            </Formik>

            {result && (
                <IonCard>
                <IonItem style={{ margin: '0 0 20px' }}>
                    <IonTitle>Результати обрахунку: </IonTitle>
                    <IonText>{result}</IonText>
                </IonItem>
                </IonCard>
            )}
        </IonSegment>
    );
};

const serviceInjector = (Component: FC<any>) => () => {
    const assignmentService = new VectorService();

    return <Component service={assignmentService} />;
};

export const CustomForm = serviceInjector(VectorForm);
