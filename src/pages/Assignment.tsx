import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import { CustomForm } from '../components/custom-form/CustomForm';
import { CustomHeader } from '../components/custom-header/CustomHeader';

export const Assignment = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Залік</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <CustomHeader name="Кучерук Владислав Денисович" group="КН-31" />
                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>Завдання</IonCardSubtitle>
                        <IonCardTitle>Арифметичні операції над векторами</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        Розробити сервіс для арифметичних операцій (додавання, віднімання, скалярний добуток) над
                        векторами довільної розмірності. Форма для введення повинна спочатку запитати розмірність
                        векторів, після чого сформувати відповідну кількість полів введення. Максимальна розмірність –
                        6.
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>Введення даних</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <CustomForm />
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};
