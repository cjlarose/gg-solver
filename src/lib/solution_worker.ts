addEventListener('message', (e) => {
  const { requestId, game, goal } = e.data;
  console.log('worker received');
  console.log(requestId);
  try {
    postMessage(sayHello());
  } catch(e) {
    postMessage({
      requestId,
      error: e,
    });
  }
});
