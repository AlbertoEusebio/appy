import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonCol, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonRange, IonRow, IonTab, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';
import { calendarClearOutline, calendarNumber, calendarOutline, image, options, sendOutline } from 'ionicons/icons';

import "./HappyGrid.css";
import { useHistory } from 'react-router';

class Question{
    selected:number = 0;
    text:String = "";
    options:String[] = [];

    constructor(s:number, txt:String, op:String[]){
      this.selected = s;
      this.text = txt;
      this.options = op;
    }
}

function DefaultQuiz() {
  const history = useHistory();
  const [options, setItems] = useState<Question[]>(() => {
      const op = [
        "Film con amici",
        "Netflix e tisana",
        "Giochi da tavolo",
        "Si esce sempre!"
      ];
      const op2 = [
        "Pop",
        "Rap",
        "Rock",
        "Classica"
      ];
      const q1 = new Question(0, "Il tuo sabato sera ideale?", op); 
      const q2 = new Question(0, "Cosa ti piace fare quando piove?", op); 
      const q3 = new Question(0, "Che genere di musica ascolti?", op2); 
      return [q1, q2, q3];
    }
  );
  
  const handleChange = (q: number, i:number) =>{
      const newOptions = [...options];
      newOptions[q].selected = i;
      setItems(newOptions);
  }

  const color = (i: number, n: number) =>{
    if(i == n){
      return "success";
    }

    return "primary"
  }

  return (
    <>
    <IonList>
    {options.map((o, index) =>
    (
      <IonItem key={index}>
      <IonCard>
      <IonToolbar color="tertiary">
          <IonTitle> {o.text} </IonTitle>
      </IonToolbar>
      <IonCardContent>
      <IonGrid>
        <IonRow>
          <IonCol>
              <IonButton expand="block" fill="outline" onClick={() => handleChange(index, 0)} color={color(o.selected, 0)}> {o.options[0]} </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
              <IonButton expand="block" fill="outline" onClick={() => handleChange(index, 1)} color={color(o.selected, 1)}> {o.options[1]} </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
              <IonButton expand="block" fill="outline" onClick={() => handleChange(index, 2)} color={color(o.selected, 2)}> {o.options[2]} </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
              <IonButton expand="block" fill="outline" onClick={() => handleChange(index, 3)} color={color(o.selected, 3)}> {o.options[3]} </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
      </IonCardContent>
    </IonCard>
    </IonItem>
    )
    )}
    </IonList>

    <IonButton onClick={() => history.push("/home")} expand="block"> SUBMIT </IonButton>
    </>
  );
}
export default DefaultQuiz;