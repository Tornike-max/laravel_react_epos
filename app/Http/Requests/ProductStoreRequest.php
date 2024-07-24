<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductStoreRequest extends FormRequest
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
            'title' => 'min:2|string|max:40',
            'genre' => 'min:2|string|max:40',
            'release' => 'date',
            'for' => 'string|min:2|max:40',
            'description' => 'string|min:10|max:500',
            'image' => 'nullable|image',
            'gameUrl' => 'nullable|string'
        ];
    }
}
