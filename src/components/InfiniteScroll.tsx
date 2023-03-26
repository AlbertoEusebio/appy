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
  IonBadge
} from '@ionic/react';
import { randomInt } from 'crypto';

function InfiniteScroll() {
  const [items, setItems] = useState<string[]>([]);

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 50; i++) {
      newItems.push(`Activity ${1 + items.length + i}`);
    }
    setItems([...items, ...newItems]);
  };

  useEffect(() => {
    generateItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <IonContent>
      <IonList>
        {items.map((item, index) => (
          <IonItem key={item}>
            <IonChip>
              <IonAvatar>
                <img alt="Silhouette of a person's head" src={'https://picsum.photos/80/80?random=' + index} />
              </IonAvatar>
              <IonLabel>Activity {index}</IonLabel>
            </IonChip>
            <IonBadge color="success">{Math.round(Math.random()*20)}</IonBadge>
          </IonItem>
        ))}
      </IonList>
      <IonInfiniteScroll
        onIonInfinite={(ev) => {
          generateItems();
          setTimeout(() => ev.target.complete(), 500);
        }}
      >
        <IonInfiniteScrollContent></IonInfiniteScrollContent>
      </IonInfiniteScroll>
    </IonContent>
  );
}
export default InfiniteScroll;