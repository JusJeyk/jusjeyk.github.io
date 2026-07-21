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

    const offsetOptions = { timeZone: 'America/Chicago', timeZoneName: 'shortOffset' };
    const offsetFormatter = new Intl.DateTimeFormat('en-US', offsetOptions);
    const parts = offsetFormatter.formatToParts(now);
    const offsetPart = parts.find(part => part.type === 'timeZoneName').value;
    const fancyOffset = offsetPart.replace('GMT', 'UTC');

    const timezoneElement = document.getElementById('myTimezone');
    if (timezoneElement) {
        timezoneElement.textContent = fancyOffset;
    }
}

function updateTime() {
    const now = new Date();

    const timeOptions = { timeZone: 'America/Chicago', hour: 'numeric', minute: '2-digit', hour12: true };
    const timeFormatter = new Intl.DateTimeFormat('en-US', timeOptions);

    const currentTime = timeFormatter.format(now)
        .toLowerCase()
        .replaceAll(' ', '')
        .replaceAll('\u202F', '');

    const timeElement = document.getElementById('myLocalTime');
    if (timeElement) {
        timeElement.textContent = currentTime;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    updateAge();
    updateTimezone();
    updateTime();

    setInterval(updateTime, 1000);
    setInterval(updateTimezone, 60000);
    setInterval(updateAge, 86400000);
});
