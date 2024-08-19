function loadPage(pageUrl, linkId, scriptUrl = null) {
   fetch(pageUrl)
      .then(response => response.text())
      .then(data => {
         const parser = new DOMParser();
         const doc = parser.parseFromString(data, 'text/html');
         const mainContent = doc.querySelector('main').innerHTML;
         document.querySelector('main').innerHTML = mainContent;
         setActiveLink(linkId);
         if (scriptUrl) {
            loadScript(scriptUrl);
         }
      })
      .catch(error => {
         console.error('Error loading the page:', error);
      });
}

function loadScript(scriptUrl) {
   document.querySelectorAll(`script[data-url="${scriptUrl}"]`).forEach(script => {
      script.remove();
   });
   const script = document.createElement('script');
   script.src = scriptUrl + '?t=' + new Date().getTime();
   script.type = 'text/javascript';
   script.async = true;
   script.dataset.url = scriptUrl;
   document.body.appendChild(script);
   script.onload = () => {
      console.log(`Script ${scriptUrl} loaded successfully.`);
   };
   script.onerror = () => {
      console.error(`Failed to load script: ${scriptUrl}`);
   };
}

function setActiveLink(activeLinkId) {
   document.querySelectorAll('.nav .link').forEach(link => {
      link.classList.remove('active');
   });
   document.getElementById(activeLinkId).classList.add('active');
}

function checkQueryString() {
   const query = window.location.search;
   if (query.includes('?about')) {
      loadPage('../about/index.html', 'aboutLink');
   } else if (query.includes('?socials')) {
      loadPage('../contact/index.html', 'socialsLink');
   } else if (query.includes('?posts')) {
      loadPage('../posts/index.html', 'postsLink', '../posts/posts.js'); // Load post.js for the posts page
   }
}

document.getElementById('homeLink').addEventListener('click', function (e) {
   e.preventDefault();
   loadPage('../index.html', 'homeLink');
});
document.getElementById('aboutLink').addEventListener('click', function (e) {
   e.preventDefault();
   loadPage('../about/index.html', 'aboutLink');
});
document.getElementById('socialsLink').addEventListener('click', function (e) {
   e.preventDefault();
   loadPage('../contact/index.html', 'socialsLink');
});
document.getElementById('postsLink').addEventListener('click', function (e) {
   e.preventDefault();
   loadPage('../posts/index.html', 'postsLink', '../posts/posts.js'); // Load post.js for the posts page
});
window.addEventListener('load', checkQueryString);

function togglePlayPause() {
   var audio = document.getElementById("audioPlayer");
   var playButton = document.getElementById("playButton");

   if (audio.paused) {
      audio.play();
      playButton.style.color = "crimson";
   } else {
      audio.pause();
      playButton.style.color = "lavenderblush";
   }
}

document.getElementById("audioPlayer").addEventListener("ended", function () {
   document.getElementById("playButton").style.color = "rgb(255, 0, 255)";
});