<?php

namespace Database\Seeders;

use App\Models\PressRelease;
use App\Models\Product;
use App\Models\User;
use Database\Factories\HistoryFactory;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        Product::factory(10)->create();
        PressRelease::factory(1)->create();
        HistoryFactory::factory(1)->create();
    }
}
