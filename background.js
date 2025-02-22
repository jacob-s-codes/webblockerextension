chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
      return { redirectUrl: "https://www.google.com" }; // Redirect to Google or any focus page
    },
    { urls: ["*://*.youtube.com/*"] }, 
    ["blocking"]
  );
  