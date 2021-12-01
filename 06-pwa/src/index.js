console.log('hello webpack1', navigator, navigator.serviceWorker);

if ('serviceWorker' in navigator) {
  // 判断是否支持serviceWorker
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('SW 注册成功：', registration);
      })
      .catch((registrationError) => {
        console.log('SW 注册失败：', registrationError);
      });
  });
}
