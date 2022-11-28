<?php

namespace Database\Seeders;

use App\Models\BookRequest;
use Database\Factories\BookRequestFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookRequestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        BookRequest::factory()->count(20)->create();
    }
}
