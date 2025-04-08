import {
  IonPage,
  IonContent,
  IonAvatar,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonButton,
  IonToast,
  IonAlert,
  useIonRouter
} from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import React, { useState } from 'react';

// Simple fallback AlertBox component
const AlertBox = ({ message, isOpen, onClose }: { message: string, isOpen: boolean, onClose: () => void }) => (
  <IonAlert
    isOpen={isOpen}
    onDidDismiss={onClose}
    header="Error"
    message={message}
    buttons={['OK']}
  />
);

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    if (!email || !password) {
      setAlertMessage('Please enter both email and password.');
      setShowAlert(true);
      return;
    }

    // Dummy validation (replace with real login logic)
    if (email === 'test@example.com' && password === '123456') {
      setShowToast(true);
      setTimeout(() => {
        // redirect or navigate
        console.log('Login successful, redirecting...');
      }, 1500);
    } else {
      setAlertMessage('Invalid email or password.');
      setShowAlert(true);
    }
  };

  return (
    <IonPage>
      <IonContent
        className="ion-padding"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '400px',
          textAlign: 'center'
        }}>
          <IonAvatar
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              overflow: 'hidden'
            }}
          >
            <IonIcon
              icon={logoIonic}
              color="primary"
              style={{ fontSize: '100px', color: '#6c757d' }}
            />
          </IonAvatar>
          <h1>USER LOGIN</h1>

          <IonInput
            label="Email"
            labelPlacement="floating"
            fill="outline"
            type="email"
            placeholder="Enter Email"
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
            style={{ width: '100%', marginTop: '10px' }}
          />

          <IonInput
            fill="outline"
            type="password"
            placeholder="Password"
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
            style={{ width: '100%', marginTop: '10px' }}
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>

          <IonButton
            onClick={doLogin}
            expand="full"
            shape="round"
            style={{ marginTop: '15px', width: '100%' }}
          >
            Login
          </IonButton>

          <IonButton
            routerLink="/it35-lab/register"
            expand="full"
            fill="clear"
            shape="round"
            style={{ marginTop: '10px' }}
          >
            Don't have an account? Register here
          </IonButton>

          <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message="Login successful! Redirecting..."
            duration={1500}
            position="top"
            color="primary"
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
