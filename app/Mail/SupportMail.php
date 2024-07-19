<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class SupportMail extends Mailable
{
    use Queueable, SerializesModels;

    public $senderMessage;
    public $senderSubject;
    public $senderEmail;

    public function __construct($senderMessage, $senderSubject, $senderEmail)
    {
        $this->senderMessage = $senderMessage;
        $this->senderSubject = $senderSubject;
        $this->senderEmail = $senderEmail;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address($this->senderEmail),
            subject: $this->senderSubject,
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.support',
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
