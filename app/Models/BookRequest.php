<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookRequest extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'message', 'status', 'student_email'];

    public $statusTypes = ['pending', 'resolved', 'other'];
}
