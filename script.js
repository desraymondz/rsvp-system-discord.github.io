// This function will run when the form with the id 'reservationForm' is submitted
document.getElementById('reservationForm').addEventListener('submit', async function(event) {
    // Prevent the form from submitting in the traditional way (reloading the page)
    event.preventDefault();

    // Collect the data from the form fields and store it in an object called formData
    const formData = {
        name: document.getElementById('name').value,  // Get the value of the 'name' input field
        email: document.getElementById('email').value,  // Get the value of the 'email' input field
        date: document.getElementById('date').value,  // Get the value of the 'date' input field
        time: document.getElementById('time').value,  // Get the value of the 'time' input field
        service: document.getElementById('service').value,  // Get the value of the 'service' input field
        pax: document.getElementById('pax').value  // Get the value of the 'pax' input field
    };

    // Define the URL of the Discord webhook where the data will be sent
    const webhookURL = 'https://discord.com/api/webhooks/1262698461867016312/VgiIb5KQ8N--nwa19-JF76mtWV220CbZlmxyu6SBcM__YNMv-Mh09DSCmLmCffsuE1ZR';

    // Prepare the message payload for Discord, formatting the form data as a string with emojis for better readability
    const messagePayload = {
        content: `🚨New Reservation:🚨\n\n🤵🏻‍♂️Name: ${formData.name}\n🔗Email: ${formData.email}\n🗓️Date: ${formData.date}\n⏰Time: ${formData.time}\n💆🏻‍♀️Service: ${formData.service}\n👨‍👨‍👦‍👦Number of Pax: ${formData.pax}`
    };

    try {
        // Send the data to the Discord webhook using a POST request
        const response = await fetch(webhookURL, {
            method: 'POST',  // Specify the HTTP method
            headers: {
                'Content-Type': 'application/json'  // Specify the content type as JSON
            },
            body: JSON.stringify(messagePayload)  // Convert the message payload object to a JSON string
        });

        // Check if the response from the server is not OK (status code not in the range 200-299)
        if (!response.ok) {
            throw new Error('Failed to send reservation to Discord');  // Throw an error if the request failed
        }

        // If the request was successful, show an alert to the user and reset the form
        alert('Reservation sent successfully!');
        document.getElementById('reservationForm').reset();
    } catch (error) {
        // If there was an error with the request, log it to the console and show an alert to the user
        console.error('Error:', error);
        alert('Failed to send reservation. Please try again.');
    }
});