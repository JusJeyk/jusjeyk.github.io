function updateAge() {
    const birthDate = new Date('2008-05-21');
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    const ageElement = document.getElementById('myAge');
    if (ageElement) {
        ageElement.textContent = age;
    }
}

function updateTimezone() {
    const now = new Date();

    // Get JUST the timezone offset (e.g., UTC-5)
    const offsetOptions = { timeZone: 'America/Chicago', timeZoneName: 'shortOffset' };
    const offsetFormatter = new Intl.DateTimeFormat('en-US', offsetOptions);
    const parts = offsetFormatter.formatToParts(now);
    const offsetPart = parts.find(part => part.type === 'timeZoneName').value;
    const fancyOffset = offsetPart.replace('GMT', 'UTC');

    // Update the timezone element
    const timezoneElement = document.getElementById('myTimezone');
    if (timezoneElement) {
        timezoneElement.textContent = fancyOffset;
    }
}

function updateTime() {
    const now = new Date();

    // Get JUST the time (e.g., 11:44 am)
    const timeOptions = { timeZone: 'America/Chicago', hour: 'numeric', minute: '2-digit', hour12: true };
    const timeFormatter = new Intl.DateTimeFormat('en-US', timeOptions);
    const currentTime = timeFormatter.format(now).toLowerCase();

    // Update the time element
    const timeElement = document.getElementById('myLocalTime');
    if (timeElement) {
        timeElement.textContent = currentTime;
    }
}

// Run all three functions when the page loads
window.addEventListener('DOMContentLoaded', () => {
    updateAge();
    updateTimezone();
    updateTime();
});
