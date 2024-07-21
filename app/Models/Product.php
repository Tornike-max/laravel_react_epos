<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'title',
        'genre',
        'release',
        'for', 'description', 'image', 'gameUrl'
    ];

    use HasFactory;
}
