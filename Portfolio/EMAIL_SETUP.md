# 📧 EmailJS Setup Guide for Contact Form

## 🎯 What This Does
Your contact form will now send real emails to `anjanaimesh600@gmail.com` when someone submits a message.

## 📋 Step-by-Step Setup

### 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Click "Sign Up" and create a free account
- Verify your email address

### 2. Add Email Service
- In EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose "Gmail" as your email provider
- Connect your Gmail account (`anjanaimesh600@gmail.com`)
- **Save the Service ID** (you'll need this)

### 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

---
This message was sent from your portfolio contact form.
```

- **Save the Template ID** (you'll need this)

### 4. Get Your Public Key
- Go to "Account" → "API Keys"
- **Copy your Public Key**

### 5. Update Your Code
Replace these placeholders in `src/components/Contact.jsx`:

```javascript
// Replace 'YOUR_SERVICE_ID' with your actual Service ID
'YOUR_SERVICE_ID'

// Replace 'YOUR_TEMPLATE_ID' with your actual Template ID  
'YOUR_TEMPLATE_ID'

// Replace 'YOUR_PUBLIC_KEY' with your actual Public Key
'YOUR_PUBLIC_KEY'
```

## 🔧 Example Configuration
```javascript
const result = await emailjs.send(
  'service_abc123',        // Your Service ID
  'template_xyz789',       // Your Template ID
  {
    to_email: 'anjanaimesh600@gmail.com',
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    reply_to: formData.email
  },
  'public_key_123456'      // Your Public Key
)
```

## ✅ What Happens Now
1. **User fills form** → Name, email, message
2. **Form submits** → EmailJS sends email to your Gmail
3. **You receive email** → With all the contact details
4. **Form resets** → Ready for next message

## 🚀 Test Your Form
1. Fill out the contact form
2. Submit the message
3. Check your Gmail inbox
4. You should receive the contact form message!

## 💡 Pro Tips
- **Free Plan**: 200 emails/month (perfect for portfolio)
- **Spam Protection**: Built-in spam filtering
- **Mobile Friendly**: Works on all devices
- **Real-time**: Instant email delivery

## 🆘 Need Help?
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

---
**Your contact form is now ready to send real emails! 🎉**
