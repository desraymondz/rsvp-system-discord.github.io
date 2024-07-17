**Reservation system where user input their details on the web and will notifies the discord channel.**

To use this, you need to be the administrator of a discord channel.
1. Go to yout discord channel's server settings
2. Under APPS click "Integration"
3. Create a new webhook and copy the URL
4. In `script.js` change the `webhookURL` variable's value with your webhook URL

**Future plans:**
- Customer can only book 30 days in advanced
- Business owner can input Staff availability and store it in database
  - Each staff will have their own specialty and shifts
- Auto check availability of the service and staff with database
- Connect whatsapp business platform to send confirmation letter
- Connect gmail admin to send confirmation letter
