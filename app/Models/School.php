<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description'];

    public function departments()
    {
        return $this->hasMany(Department::class);
    }

    public function dissertations()
    {
        return $this->hasMany(Dissertation::class);
    }
}
