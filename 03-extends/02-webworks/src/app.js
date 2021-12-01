const worker = new Worker(new URL('./work.js', import.meta.url));

worker.postMessage({
  question: 'hi，你是仙女吗？worker那边的线程？',
});

worker.onmessage = (message) => {
  console.log(message, message.data.answer);
};
