<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AboutUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'companyName' => 'nullable|string|min:2',
            'founded_at' => 'nullable|date',
            'Address' => 'nullable|string|min:2',
            'DUNS' => 'nullable|string|min:2',
            'businessDesc' => 'nullable|min:10|string',
            'TIN' => 'nullable|string|min:2'
        ];
    }
}
