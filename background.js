
    chrome.webRequest.onBeforeRequest.addListener(
        function(info) {
            return {cancel: info.url.toLowerCase().includes('.css') || info.url.toLowerCase().includes('.gif') || info.url.toLowerCase().includes('.png') || info.url.toLowerCase().includes('.jpg') || info.url.toLowerCase().includes('.jpeg') || info.url.toLowerCase().includes('.webm') || info.url.toLowerCase().includes('.webp') ||info.url.toLowerCase().includes('.mp4') || info.url.toLowerCase().includes('allHeaderNonBlocking.js') || info.url.toLowerCase().includes('allHeader.js?') || info.url.toLowerCase().includes('/analytics.js') || info.url.toLowerCase().includes('googletagmanager') || info.url.toLowerCase().includes('calleo-livechat') || info.url.toLowerCase().includes('.svg') };
        },
        {
            urls: ["<all_urls>"]
        },
        ["blocking"]
    );
   
        