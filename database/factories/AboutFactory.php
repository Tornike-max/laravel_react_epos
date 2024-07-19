<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class AboutFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'founded_at' => now(),
            'companyName' => fake()->company(),
            'Address' => fake()->address(),
            'DUNS' => fake()->numberBetween(111111, 999999),
            'businessDesc' => fake()->text(150),
            'TIN' => fake()->numberBetween(111111, 999999),
        ];
    }
}
