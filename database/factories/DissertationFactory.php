<?php

namespace Database\Factories;

use App\Models\Department;
use App\Models\School;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Dissertation>
 */
class DissertationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "title" => $this->faker->sentence,
            "author" => $this->faker->name(),
            "supervisor" => $this->faker->name(),
            "abstract" => $this->faker->paragraph,
            "school_id" => School::inRandomOrder()->first()->id,
            "department_id" => Department::inRandomOrder()->first()->id,
            "cover_page" => "",
            "file" => "",
            "dissertation_type_id" => 1
        ];
    }
}
