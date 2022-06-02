import { IonHeader, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { FC } from 'react';

interface Props {
    name: string;
    group: string;
}

export const CustomHeader: FC<Props> = ({name, group}) => {
    return (
        <IonHeader style={{padding: '10px'}}>
            <IonToolbar style={{margin: '10px 0', padding: '10px 0'}}>
                <IonTitle style={{marginBottom: '10px'}} size="large">Виконав студент групи {group}</IonTitle>
                <IonText style={{margin: '20px'}}>{name}</IonText>
            </IonToolbar>
        </IonHeader>
    );
};
