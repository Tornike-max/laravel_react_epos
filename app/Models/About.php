<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class About extends Model
{
    protected $fillable = [
        'companyName',
        'founded_at',
        'Address',
        'DUNS',
        'businessDesc',
        'TIN'
    ];
    use HasFactory;
}
