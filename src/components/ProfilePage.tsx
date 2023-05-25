import React from 'react';
import { IonAvatar, IonCard, IonCardContent, IonCol, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonRange, IonRow, IonTitle, IonToolbar } from '@ionic/react';

import './ProfilePage.css';
import { accessibility, earth, rainy, ribbon, school, shield, star, trophy } from 'ionicons/icons';

function ProfilePage() {
  return <>
            <IonCard>
            <IonCardContent>
            <IonItem>
                <IonGrid>
                    <IonRow>
                    <IonCol>
                        <IonAvatar class='item-avatar'>
                            <img alt="Silhouette of a person's head" src={'https://picsum.photos/1000/1000?random=34'} />
                        </IonAvatar>
                    </IonCol>
                    <IonCol>
                        <IonRow>
                            <IonCol>
                                <IonLabel> <h1 className='my_lab_h'> Name </h1> </IonLabel>
                                <IonLabel> <h1 className='my_lab_h'> Surname </h1> </IonLabel>
                            </IonCol>
                        </IonRow>
                    </IonCol>
                    </IonRow>
                </IonGrid>
            </IonItem>
            </IonCardContent>
            </IonCard>
            <IonCard>
            <IonHeader>
            <IonToolbar color="tertiary">
                <IonTitle> How you are doing </IonTitle>
             </IonToolbar>
            </IonHeader>
            <IonCardContent>
                <IonLabel class="my_lab"> Saggezza </IonLabel>
                <IonRange aria-label="Custom range"  min={0} max={10} value={Math.round(Math.random()*10)} pin={true} ticks={true} snaps={true} disabled={true}>
                <IonAvatar slot="start">
                            <img alt="" src={'/assets/virtues/wisdom.png'} />
                </IonAvatar>
                </IonRange>
                <IonLabel class="my_lab"> Coraggio </IonLabel>
                <IonRange aria-label="Custom range"  min={0} max={10} value={Math.round(Math.random()*10)} pin={true} ticks={true} snaps={true} disabled={true}>
                <IonAvatar slot="start">
                            <img alt="" src={'/assets/virtues/courage.png'} />
                </IonAvatar>
                </IonRange>
                <IonLabel class="my_lab"> Umanità </IonLabel>
                <IonRange aria-label="Custom range"  min={0} max={10} value={Math.round(Math.random()*10)} pin={true} ticks={true} snaps={true} disabled={true}>
                <IonAvatar slot="start">
                            <img alt="" src={'/assets/virtues/humanity.png'} />
                </IonAvatar>
                </IonRange>
                <IonLabel class="my_lab"> Giustizia </IonLabel>
                <IonRange aria-label="Custom range"  min={0} max={10} value={Math.round(Math.random()*10)} pin={true} ticks={true} snaps={true} disabled={true}>
                <IonAvatar slot="start">
                            <img alt="" src={'/assets/virtues/justice.png'} />
                </IonAvatar>
                </IonRange>
                <IonLabel class="my_lab"> Temperanza </IonLabel>
                <IonRange aria-label="Custom range"  min={0} max={10} value={Math.round(Math.random()*10)} pin={true} ticks={true} snaps={true} disabled={true}>
                <IonAvatar slot="start">
                            <img alt="" src={'/assets/virtues/temperanza.png'} />
                </IonAvatar>
                </IonRange>
                <IonLabel class="my_lab"> Trascendenza </IonLabel>
                <IonRange aria-label="Custom range"  min={0} max={10} value={Math.round(Math.random()*10)} pin={true} ticks={true} snaps={true} disabled={true}>
                <IonAvatar slot="start">
                            <img alt="" src={'/assets/virtues/trascendenza.png'} />
                </IonAvatar>
                </IonRange>
           </IonCardContent>
           <IonCard>
           <IonHeader>
            <IonToolbar color="tertiary">
                <IonTitle> I tuoi traguardi </IonTitle>
             </IonToolbar>
            </IonHeader>
            <IonCardContent>
            <IonLabel class="my_lab"> Altruista </IonLabel>
                <IonIcon slot="end" size="large" icon={star} color='danger'></IonIcon>
                <IonIcon slot="end" size="large" icon={star} color='primary'></IonIcon>
                <IonIcon slot="end" size="large" icon={star} color='success'></IonIcon>
            
            <br/>
            <IonLabel class="my_lab"> Coraggioso </IonLabel>
            
            <br/>
            <IonLabel class="my_lab"> Costante </IonLabel>
               <IonIcon slot="end" size="large" icon={star} color='danger'></IonIcon>
            
            <br/>
            <IonLabel class="my_lab"> Fedele </IonLabel>
                <IonIcon slot="end" size="large" icon={star} color='danger'></IonIcon>
            
            <br/>
            <IonLabel class="my_lab"> Socievole </IonLabel>
                <IonIcon slot="end" size="large" icon={star} color='danger'></IonIcon>
                <IonIcon slot="end" size="large" icon={star} color='primary'></IonIcon>
            
            <br/>
            <IonLabel class="my_lab"> Determinato </IonLabel>
                <IonIcon slot="end" size="large" icon={star} color='danger'></IonIcon>
                <IonIcon slot="end" size="large" icon={star} color='primary'></IonIcon>

                <br/>
            <IonLabel class="my_lab"> Empatico </IonLabel>
                <IonIcon slot="end" size="large" icon={star} color='danger'></IonIcon>

                <br/>
            <IonLabel class="my_lab"> Leader </IonLabel>
                <IonIcon slot="end" size="large" icon={star} color='danger'></IonIcon>
                <IonIcon slot="end" size="large" icon={star} color='primary'></IonIcon>
                <br/>
            </IonCardContent>
           </IonCard>
        </IonCard>
        </>
        ;

}

export default ProfilePage;