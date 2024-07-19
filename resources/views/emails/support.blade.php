<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Support Request</title>
    <style>
        /* Inline Tailwind CSS for email templates */
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 16px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .header {
            font-size: 24px;
            font-weight: 600;
            color: #333333;
        }

        .content {
            margin-top: 16px;
            font-size: 16px;
            color: #555555;
        }

        .footer {
            margin-top: 32px;
            font-size: 14px;
            color: #888888;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            Support Request Received
        </div>
        <div class="content">
            <p><strong>Email:</strong> {{ $senderEmail }}</p>
            <p><strong>Subject:</strong> {{ $senderSubject }}</p>
            <p><strong>Message:</strong></p>
            <p>{{ $senderMessage }}</p>
        </div>
        <div class="footer">
            Thank you for reaching out to us.
        </div>
    </div>
</body>

</html>
