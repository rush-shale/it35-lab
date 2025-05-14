import React, { useState } from 'react';
import {
  IonPage,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/react';

const SearchContainer: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const topics = [
    {
      title: 'Agile Development',
      description: 'A flexible, iterative approach to software development.',
      full: 'Agile Development is a methodology that promotes continuous iteration and testing throughout the development lifecycle. It encourages team collaboration, customer feedback, and flexible response to change.'
    },
    {
      title: 'CRUD Operations',
      description: 'Create, Read, Update, Delete basics.',
      full: 'CRUD stands for Create, Read, Update, and Delete. These are the four basic operations used in persistent storage systems like databases. CRUD is a foundational concept in full-stack development.'
    },
    {
      title: 'Cross-Platform Development',
      description: 'Develop once, deploy anywhere.',
      full: 'Cross-platform development allows developers to create applications that work on multiple platforms such as iOS, Android, and web using a single codebase. Popular tools include React Native and Flutter.'
    },
    {
      title: 'Frontend vs Backend',
      description: 'UI vs logic and data.',
      full: 'Frontend refers to everything the user interacts with directly (HTML, CSS, JavaScript), while backend handles business logic, database operations, and server management.'
    },
    {
      title: 'APIs (Application Programming Interfaces)',
      description: 'Bridge between systems.',
      full: 'APIs allow different software applications to communicate with each other. They define how software components should interact, often used in mobile apps, web development, and cloud services.'
    },
    {
      title: 'Firebase Authentication',
      description: 'Simple and secure login.',
      full: 'Firebase Authentication provides backend services to help authenticate users easily. It supports email/password, social logins, and even anonymous login with secure session handling.'
    },
    {
      title: 'UI/UX Design Principles',
      description: 'Design for humans.',
      full: 'UI (User Interface) and UX (User Experience) focus on how an app looks and how it feels to use. Good UI/UX design enhances user satisfaction, engagement, and accessibility.'
    },
    {
      title: 'Version Control with Git',
      description: 'Track and manage code changes.',
      full: 'Git is a distributed version control system that helps developers track changes, collaborate, and manage different versions of code efficiently. GitHub, GitLab, and Bitbucket are common platforms using Git.'
    },
    {
      title: 'Responsive Design',
      description: 'Adapt UI for all devices.',
      full: 'Responsive design ensures that applications look and function well on devices of various screen sizes, from phones to desktops. Techniques involve flexible grids, media queries, and mobile-first design.'
    },
    {
      title: 'Continuous Integration/Continuous Deployment (CI/CD)',
      description: 'Automate build, test, and deploy.',
      full: 'CI/CD is a method to frequently deliver apps by introducing automation into the development lifecycle. It helps teams detect issues early, improve code quality, and deliver updates faster.'
    },
    {
      title: 'State Management',
      description: 'Manage app data efficiently.',
      full: 'State management is crucial in modern apps to handle user inputs, API responses, and UI states. Tools like Redux, Context API, or Zustand help developers manage shared state in frontend apps.'
    },
    {
      title: 'Mobile App Performance Optimization',
      description: 'Speed and efficiency matter.',
      full: 'Optimizing performance includes reducing app load time, minimizing memory usage, and optimizing network calls. This improves user experience and device battery life.'
    },
    {
      title: 'Security Best Practices',
      description: 'Protect users and data.',
      full: 'Security in app development involves practices like input validation, encryption, secure APIs, and authentication to prevent vulnerabilities such as XSS, CSRF, and SQL injection.'
    },
    {
      title: 'Push Notifications',
      description: 'Keep users engaged.',
      full: 'Push notifications are messages sent from a server to a user’s device, often used to inform, remind, or re-engage users. They are common in mobile apps and require careful handling to avoid being intrusive.'
    }
  ];

  const filteredTopics = searchText.trim() === ''
    ? topics
    : topics.filter(topic =>
        topic.title.toLowerCase().includes(searchText.toLowerCase()) ||
        topic.description.toLowerCase().includes(searchText.toLowerCase()) ||
        topic.full.toLowerCase().includes(searchText.toLowerCase())
      );

  const openModal = (topic: any) => {
    setSelectedTopic(topic);
    setShowModal(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonSearchbar
          value={searchText}
          onIonInput={(e) => setSearchText(e.detail.value!)}
          placeholder="Search topics..."
        />
        <IonList>
          {filteredTopics.map((topic, index) => (
            <IonItem key={index} button onClick={() => openModal(topic)}>
              <IonLabel>
                <h2>{topic.title}</h2>
                <p>{topic.description}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>

        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>{selectedTopic?.title}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonText>
              <p>{selectedTopic?.full}</p>
            </IonText>
            <IonButton expand="block" onClick={() => setShowModal(false)}>Close</IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default SearchContainer;
