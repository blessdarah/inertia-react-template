<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BookRequest>
 */
class BookRequestFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'student_email' => $this->faker->email(),
            'title' => $this->faker->sentence,
            'message' => $this->faker->sentences(4, asText: true),
            'status' => 'pending'
        ];
    }
}
