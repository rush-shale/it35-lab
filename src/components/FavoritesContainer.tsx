import React, { useState } from 'react';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonImg,
  IonText,
  IonIcon,
  IonButton,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/react';
import { heart, heartOutline } from 'ionicons/icons';

const UtiliTrackFavorites: React.FC = () => {
  const [favorites, setFavorites] = useState<{ title: string; img: string; liked: boolean }[]>([
    {
      title: 'Dota 2',
      img: 'https://media1.tenor.com/m/fTHpxCR1160AAAAd/gaben-rage.gif',
      liked: false,
    },
    {
      title: 'The Last of Us movie',
      img: 'https://media1.tenor.com/m/evFgsLZ4We0AAAAd/tlou-infected.gif',
      liked: false,
    },
    {
      title: 'Clash Of Clans',
      img: 'https://media1.tenor.com/m/-WaHDzPpfBgAAAAC/winzardo-showtime.gif',
      liked: false,
    },
    {
      title: 'Vapes',
      img: 'https://media1.tenor.com/m/wBdcTrM7mt0AAAAC/queer-eye.gif',
      liked: false,
    },
    {
      title: 'Motor Motor',
      img: 'https://media1.tenor.com/m/HosT817m5RkAAAAC/motorbike.gif',
      liked: false,
    },
    {
      title: ' Sometimes Money HAHAHA',
      img: 'https://media1.tenor.com/m/nN0WuOGYU0sAAAAC/disapprove-disappointment.gif',
      liked: false,
    },
  ]);

  const [selectedImage, setSelectedImage] = useState<{ title: string; img: string } | null>(null);
  const [showModal, setShowModal] = useState(false);

  const toggleLike = (index: number) => {
    setFavorites(prev =>
      prev.map((item, i) => (i === index ? { ...item, liked: !item.liked } : item))
    );
  };

  const openImage = (item: { title: string; img: string }) => {
    setSelectedImage(item);
    setShowModal(true);
  };

  return (
    <IonContent className="ion-padding" style={{ display: 'flex', justifyContent: 'center' }}>
      <IonGrid style={{ maxWidth: '1100px' }}>
        <IonRow className="ion-justify-content-center" style={{ gap: '1rem' }}>
          {favorites.map((item, index) => (
            <IonCol size="12" sizeSm="6" sizeMd="4" key={index}>
              <IonCard
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <IonImg
                  src={item.img}
                  alt={item.title}
                  onClick={() => openImage(item)}
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                    width: '100%',
                    cursor: 'pointer',
                  }}
                />
                <IonCardContent className="ion-text-center">
                  <IonText color="dark">
                    <h2 style={{ fontSize: '1.1rem', margin: '0.5rem 0', fontWeight: 'bold' }}>
                      {item.title}
                    </h2>
                  </IonText>
                  <IonButton
                    fill="clear"
                    onClick={() => toggleLike(index)}
                    className={item.liked ? 'liked-button' : ''}
                    style={{ transition: 'transform 0.2s' }}
                  >
                    <IonIcon
                      icon={item.liked ? heart : heartOutline}
                      color={item.liked ? 'danger' : 'medium'}
                      style={{ fontSize: '1.7rem' }}
                    />
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>

      {/* Modal for Full Image View */}
      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{selectedImage?.title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonImg
            src={selectedImage?.img}
            alt={selectedImage?.title}
            style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '1rem' }}
          />
          <IonButton expand="block" color="medium" onClick={() => setShowModal(false)}>
            Close
          </IonButton>
        </IonContent>
      </IonModal>

      <style>{`
        .liked-button:active {
          transform: scale(1.2);
        }
      `}</style>
    </IonContent>
  );
};

export default UtiliTrackFavorites;
