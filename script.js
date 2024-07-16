document.getElementById('reservationForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        service: document.getElementById('service').value,
        pax: document.getElementById('pax').value
    };

    // Discord webhook URL
    const webhookURL = 'YOUR-DISCORD-WEBHOOK-URL';

    // Prepare the message payload for Discord
    const messagePayload = {
        content: `New Reservation:\n\nName: ${formData.name}\nEmail: ${formData.email}\nDate: ${formData.date}\nTime: ${formData.time}\nService: ${formData.service}\nNumber of Pax: ${formData.pax}`
    };

    try {
        const response = await fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(messagePayload)
        });

        if (!response.ok) {
            throw new Error('Failed to send reservation to Discord');
        }

        alert('Reservation sent successfully!');
        document.getElementById('reservationForm').reset();
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send reservation. Please try again.');
    }
});