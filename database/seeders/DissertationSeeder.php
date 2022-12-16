<?php

namespace Database\Seeders;

use App\Models\Dissertation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DissertationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Dissertation::factory()->count(10)->create();
    }
}
