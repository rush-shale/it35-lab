import { 
  IonAvatar,
  IonButton,
  IonContent, 
  IonHeader, 
  IonInput, 
  IonItem, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  useIonRouter
} from '@ionic/react';

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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          
          {/* Avatar */}
          <IonAvatar style={{ width: '80px', height: '80px', marginBottom: '20px' }}>
            <img alt="User Avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
         
          {/* Email Input */}
          <IonItem style={{ marginBottom: '15px', width: '80%' }}>
            <IonInput label="Email:" placeholder="Enter your email" />
          </IonItem>

          {/* Password Input */}
          <IonItem style={{ marginBottom: '15px', width: '80%' }}>
            <IonInput type="password" label="Password:" placeholder="Enter your password" />
          </IonItem>

          {/* Buttons */}
          <IonButton onClick={doLogin} expand="block" style={{ width: '80%', height: '50px', fontWeight: 'bold' }}>
            Login
          </IonButton>
          
          <IonButton 
            onClick={goToSignUp} 
            expand="block" 
            fill="outline" 
            color="secondary" 
            style={{ width: '80%', height: '50px', fontWeight: 'bold', marginTop: '10px' }}
          >
            Don't have an account? Register here
          </IonButton>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
