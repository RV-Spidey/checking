const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const userName = localStorage.getItem('userName');
document.getElementById('userElement').textContent = userName || '';
document.getElementById('userElement1').textContent = "User: "+userName;
// Ensure the secret key is set in localStorage, otherwise, no comparison can be made.
const ____________________________________________________________________________________________________________________________________ = localStorage.getItem('____________________________________________________________________________________________________________________________________') || null;

// Function to get a cookie by name
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length); // Trim leading spaces
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Example: Retrieve the 'skibidi' cookie
const ________________________________________________________________________________________________________________ = getCookie('_______________________________________________________________________________________________________________________________________________');
// Outputs: 'exampleValue' if the cookie exists

function checkKey() {
    // If there's no stored key, deny access immediately
    if (!____________________________________________________________________________________________________________________________________ && !________________________________________________________________________________________________________________) {
        alert("You are not an approved user. Please contact the admin.");
        window.location.href = "https://www.example.com";
        return;
    }

    //const hasAccess = localStorage.getItem('hasAccess');
    const correctAccessFlag = "true"; // Use consistent flag value
    const h = "‏‏‎ ‎"
    const a = "‏‏‎ ‎‏‏‎ ‎"

    // Check if user already has access
    /*if (hasAccess === correctAccessFlag) {
        document.getElementById('content').style.display = 'block'; // Show content
        return; // Skip asking for the key again
    }*/

    // Ask for the user's key
    //const userKey = prompt("Please enter your key:");

    if (h === ____________________________________________________________________________________________________________________________________ && a === ________________________________________________________________________________________________________________) {
        // If correct key, grant access
        localStorage.setItem('hasAccess', correctAccessFlag);
        document.getElementById('content').style.display = 'block';
        alert("You are a verified user.");
    } else {
        // If the key is wrong, deny access
        alert("Incorrect key. Contact admin");
        window.location.href = "https://www.example.com"; // Redirect
    }
}

// Check the key after all elements are loaded
document.addEventListener('DOMContentLoaded', (event) => {
    checkKey();
});

const _0x76e017=_0x1e86;function _0x1e86(_0x331012,_0x579447){const _0x162f91=_0x162f();return _0x1e86=function(_0x1e86f5,_0x151df0){_0x1e86f5=_0x1e86f5-0x144;let _0x5065c4=_0x162f91[_0x1e86f5];return _0x5065c4;},_0x1e86(_0x331012,_0x579447);}(function(_0x4ad383,_0x4b121a){const _0x5ef31d=_0x1e86,_0x216bef=_0x4ad383();while(!![]){try{const _0xe695a2=parseInt(_0x5ef31d(0x154))/0x1*(-parseInt(_0x5ef31d(0x146))/0x2)+parseInt(_0x5ef31d(0x156))/0x3+-parseInt(_0x5ef31d(0x144))/0x4*(-parseInt(_0x5ef31d(0x149))/0x5)+-parseInt(_0x5ef31d(0x152))/0x6+parseInt(_0x5ef31d(0x151))/0x7+parseInt(_0x5ef31d(0x14b))/0x8*(-parseInt(_0x5ef31d(0x14c))/0x9)+parseInt(_0x5ef31d(0x158))/0xa;if(_0xe695a2===_0x4b121a)break;else _0x216bef['push'](_0x216bef['shift']());}catch(_0x37e356){_0x216bef['push'](_0x216bef['shift']());}}}(_0x162f,0x31b98),window[_0x76e017(0x159)]=function(){sendEmail();});function _0x162f(){const _0x3d931e=['Someone\x20visted\x20your\x20website','4584FIdLwh','4401bQHajo','2cb791fa-2538-4ce4-a6ba-1380e89fdce3','log','then','Email\x20sent\x20successfully:\x20','846888tGeGOt','2368038ZDwMmg','killerkingmega10@gmail.com','2qtrkaA','Guest','894183KlsypW','getItem','2137120jKfrQO','onload','1313308WgDQmp','userName','82542fqBfdF','Error\x20sending\x20email:\x20','\x20visted\x20your\x20page','5QgnFgC'];_0x162f=function(){return _0x3d931e;};return _0x162f();}function sendEmail(){const _0x259df6=_0x76e017,_0x508629=localStorage[_0x259df6(0x157)](_0x259df6(0x145))||_0x259df6(0x155);Email['send']({'SecureToken':_0x259df6(0x14d),'To':_0x259df6(0x153),'From':'killerkingmega10@gmail.com','Subject':_0x259df6(0x14a),'Body':_0x508629+_0x259df6(0x148)})[_0x259df6(0x14f)](function(_0x30fdde){const _0xd6ffa8=_0x259df6;console[_0xd6ffa8(0x14e)](_0xd6ffa8(0x150)+_0x30fdde);})['catch'](function(_0x2f0662){const _0x3a1220=_0x259df6;console[_0x3a1220(0x14e)](_0x3a1220(0x147)+_0x2f0662);});}


// Sidebar toggle functions (unchanged)
function toggleSidebar() {
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
    closeAllSubMenus();
}

function toggleSubMenu(button) {
    if (!button.nextElementSibling.classList.contains('show')) {
        closeAllSubMenus();
    }

    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');

    if (sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close');
        toggleButton.classList.toggle('rotate');
    }
}

document.addEventListener("DOMContentLoaded", function() {
  // Select all submenu links
  const submenuLinks = document.querySelectorAll("#sidebar .sub-menu a");

  // Add click event to each submenu link
  submenuLinks.forEach(link => {
    link.addEventListener("click", function() {
      // Remove 'active' class from all submenu links
      submenuLinks.forEach(item => item.classList.remove("active"));

      // Add 'active' class to the clicked link
      this.classList.add("active");
    });
  });
});



function showVideo(videoId) {
  console.log('Showing video with ID:', videoId);

  const videos = document.querySelectorAll('#video-container .video');

  videos.forEach(video => {
    video.style.display = 'none';
  });

  const selectedVideo = document.getElementById(videoId);
  if (selectedVideo) {
    selectedVideo.style.display = 'block';
    const iframe = selectedVideo.querySelector('iframe');
    if (iframe) {
      iframe.src = iframe.dataset.src; // Set src directly from data-src attribute
      console.log('Setting iframe src to:', iframe.src);
    }
  }
}

function closeAllSubMenus() {
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show');
        ul.previousElementSibling.classList.remove('rotate');
    });
}

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
