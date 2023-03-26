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
import basicCard from './basicCard';
import BasicCard from './basicCard';
import FourGrid from './fourCardGrid';

function InfiniteScroll() {
  const [items, setItems] = useState<string[][]>([]);

  let grouped_items;

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 50; i++) {
      
      const newGroup = [];

      for(let j=0; j<4; j++){
        newGroup.push(`Beautiful activity ${1 + items.length*4 + i*4+ j}`);
      }
      newItems.push(newGroup);
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
        {items.map((item, index) =>
          (
          <IonItem key={item[0]}>
            <FourGrid index={index} titles={item}></FourGrid>
          </IonItem>
        )
        )}
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