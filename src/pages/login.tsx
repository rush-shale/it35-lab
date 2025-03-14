import { 
  IonAvatar,
  IonButton,
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonInput, 
  IonInputPasswordToggle, 
  IonItem, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  useIonRouter
} from '@ionic/react';
import { logoIonic } from 'ionicons/icons';

const Login: React.FC = () => {
  const navigation = useIonRouter();

  const doLogin = () => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
  };
  
  const goToSignUp = () => {
      navigation.push('/signup', 'forward', 'replace');
  };
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <IonAvatar>
            <img alt="User Avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>

          <IonItem>
            <IonInput label="Username:" placeholder="Enter your username" />
          </IonItem>
          
          <IonItem>
            <IonInput type="password" label="Password:" placeholder="Enter your password">
              <IonInputPasswordToggle slot="end" />
            </IonInput>
          </IonItem>
        </div>

        <IonButton onClick={doLogin} expand="full">
          Login
        </IonButton>
        
        <IonButton onClick={goToSignUp} expand="full" fill="outline" color="secondary">
          Don't have an account register here
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
 