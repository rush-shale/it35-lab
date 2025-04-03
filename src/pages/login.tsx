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

      {/* Reusable AlertBox Component */}
      <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

      {/* IonToast for success message */}
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
