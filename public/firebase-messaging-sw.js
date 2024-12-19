// importScripts('https://www.gstatic.com/firebasejs/4.6.1/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/4.6.1/firebase-messaging.js');
importScripts(
  'https://www.gstatic.com/firebasejs/9.25.0/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.25.0/firebase-messaging-compat.js'
);

firebase.initializeApp({
  apiKey: 'AIzaSyB2mOc_GA_SLj4jkmyIo1qor7-ew21yckA',
  authDomain: 'youthstepup-29a94.firebaseapp.com',
  projectId: 'youthstepup-29a94',
  storageBucket: 'youthstepup-29a94.firebasestorage.app',
  messagingSenderId: '178111053517',
  appId: '1:178111053517:web:6ea134cb667b402e2bf384',
  measurementId: 'G-DMZ8CJ5TXT',
});

const messaging = firebase.messaging();

self.addEventListener('push', function (event) {
  try {
    const payload = event.data.json();
    const title = payload.notification.title;

    const options = {
      body: payload.notification.body,
      icon: payload.notification.icon,
      data: payload.notification.click_action,
    };

    event.waitUntil(self.registration.showNotification(title, options));
  } catch (error) {
    console.error('Push event error:', error);
  }
});

self.addEventListener('notificationclick', function (event) {
  console.log(event.notification);

  event.notification.close();

  event.waitUntil(clients.openWindow(event.notification.data));
});
