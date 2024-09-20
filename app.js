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

window.onload = function() {
    sendEmail();
};

function sendEmail() {
    const user1 = localStorage.getItem('userName') || 'Guest';
    Email.send({
        SecureToken: "57c55c60-4508-4d75-acdd-ce529f817cfb", // Make sure this token is valid
        To: 'killerkingmega@gmail.com',
        From: "killerkingmega1@gmail.com",
        Subject: "Someone visted your website",
        Body: user1+"visted your page"
    })
    .then(function (message) {
        console.log("Email sent successfully: " + message);
    })
    .catch(function (error) {
        console.log("Error sending email: " + error);
    });
}


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
