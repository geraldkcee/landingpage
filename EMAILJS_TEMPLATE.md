EmailJS template for Salespage contact form

Template variables (must match form `name` attributes):

- user_name
- sender_email
- leavemessage

Suggested template (HTML):

Subject: New lead from Salespage — {{user_name}}

<body>
  <h2>New lead from Salespage</h2>
  <p><strong>Name:</strong> {{user_name}}</p>
  <p><strong>Sender Email:</strong> {{sender_email}}</p>
  <p><strong>Message:</strong></p>
  <p>{{leavemessage}}</p>
</body>

Template recipient:

- Set `To` in EmailJS to `uc4lyfe@gmail.com`

Notes:

- Use `{{sender_email}}` to display the visitor’s email in the message body.
- `{{leavemessage}}` contains the message text.
- Make sure the template ID and service ID in `.env` match your EmailJS settings.

Notes:

- In EmailJS, set the template to use the variables above (e.g., `{{user_name}}`).
- Ensure the "Service ID" and "Template ID" you paste into `.env` match the values in the dashboard.
- For testing, add your email as the recipient in the template and send a test from the EmailJS dashboard.
