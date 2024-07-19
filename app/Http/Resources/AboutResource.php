<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AboutResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public static $wrap = false;
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'founded_at' => (new Carbon($this->founded_at))->format('Y-m-d'),
            'companyName' => $this->companyName,
            'Address' => $this->Address,
            'DUNS' => $this->DUNS,
            'businessDesc' => $this->businessDesc,
            'TIN' => $this->TIN,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'updated_at' => (new Carbon($this->updated_at))->format('Y-m-d'),
        ];
    }
}
