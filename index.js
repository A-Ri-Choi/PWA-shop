// service worker Regigster 하기
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//       .register("/sw.js")
//       .then((sw) => {
//           console.log('서비스 워커가 등록됨!', sw);
//       })
//       .catch((err) => {
//           console.log('서비스 워커가 등록이 안됨!', err);
//       });
// }
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
            console.error('Service Worker registration failed:', error);
        });
    });
}
