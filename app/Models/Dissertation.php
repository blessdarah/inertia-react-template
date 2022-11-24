<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dissertation extends Model
{
    use HasFactory;

    protected $fillable = ["school_id", "department_id", "abstract", "title", "author", "supervisor", "cover_page", "file"];

    public function school()
    {
        return $this->belongsTo(School::class);
    } 

    public function department()
    {
        return $this->belongsTo(Department::class);
    } 
}
