import React, { useState, useEffect } from 'react';
import { close, closeCircle, pin, checkmarkCircleSharp, notificationsCircleOutline } from 'ionicons/icons';
import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonChip,
  IonIcon,
  IonBadge,
  IonRefresher,
  IonRefresherContent
} from '@ionic/react';
import { randomInt } from 'crypto';
import BasicCard from './BasicCard';

function InfiniteScroll() {
  const [items, setItems] = useState<String[]>(() => {
    const initItems = [];
    for (let i = 0; i < 5; i++) {
      initItems.push(`Beautiful activity ${i}`);
    }
    return initItems;
  });

  const handleAdd = (val: String) => {
      const add = [...items, val];
      setItems(add);
  }

  const handleRemove = (i: number) => {
      const deleted  = [...items];
      deleted.splice(i, 1);
      setItems(deleted);
  }  

  return (
    <IonContent>
      <IonList>
        {items.map((item, index) =>
        (
          <IonItem key={item[0]}>
            <BasicCard remove={() => handleRemove(index)} title={item}>
              <IonChip>
                <IonAvatar>
                  <img alt="Silhouette of a person's head" src={'https://picsum.photos/100/720?random=' + index}/>
                </IonAvatar>
                <IonLabel>John Meyer</IonLabel>
              </IonChip>
              <IonItem>
              <IonBadge color="success" >{Math.round(Math.random()*20)}</IonBadge>
              <IonLabel>Subscribers</IonLabel>
              </IonItem>
            </BasicCard>
          </IonItem>
        )
        )}
      </IonList>
    </IonContent>
  );
}
export default InfiniteScroll;