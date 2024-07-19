<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->title(),
            'genre' => fake()->word(),
            'release' => now(),
            'for' => fake()->word(),
            'description' => fake()->text(100),
            'image' => fake()->imageUrl(),
            'gameUrl' => fake()->url(),
        ];
    }
}
