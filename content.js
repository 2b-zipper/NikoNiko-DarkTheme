(function() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = chrome.runtime.getURL('./css/nicovideo.css');
  document.head.appendChild(link);
})();