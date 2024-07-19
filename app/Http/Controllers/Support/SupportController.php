<?php

namespace App\Http\Controllers\Support;

use App\Http\Controllers\Controller;
use App\Http\Requests\SupportRequest;
use App\Mail\SupportMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SupportController extends Controller
{
    public function index()
    {
        return inertia('Support/Index');
    }

    public function store(SupportRequest $request)
    {
        $validatedData = $request->validated();
        $senderEmail = $validatedData['email'];
        $senderMessage = $validatedData['message'];
        $senderSubject = $validatedData['subject'];

        $response = Mail::to('ozbetelashvilitornike2@gmail.com')->send(new SupportMail($senderMessage, $senderSubject, $senderEmail));

        dd($response);
        // return back()->with('success', 'Support request sent successfully!');
    }
}
