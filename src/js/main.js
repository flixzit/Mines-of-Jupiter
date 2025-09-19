// Show cookie consent popup for new users
document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('cookieConsent')) {
        // Create popup
        const popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.bottom = '20px';
        popup.style.left = '50%';
        popup.style.transform = 'translateX(-50%)';
        popup.style.background = '#fff';
        popup.style.padding = '20px';
        popup.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
        popup.style.zIndex = '1000';
        popup.style.borderRadius = '8px';
        popup.innerHTML = `
            <p>This website uses cookies to enhance your experience. Do you accept?</p>
            <button id="acceptCookies" style="margin-right:10px;">Accept</button>
            <button id="declineCookies">Decline</button>
        `;

        document.body.appendChild(popup);

        document.getElementById('acceptCookies').onclick = function () {
            localStorage.setItem('cookieConsent', 'accepted');
            popup.remove();
        };

        document.getElementById('declineCookies').onclick = function () {
            localStorage.setItem('cookieConsent', 'declined');
            popup.remove();
        };
    }
});