<?php

use App\Http\Controllers\BookRequestController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\DissertationController;
use App\Http\Controllers\DissertationTypeController;
use App\Http\Controllers\SchoolController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::inertia('/', 'Welcome')->name('home');
Route::inertia('/about', 'About')->name('about');

Route::resource('book-requests', BookRequestController::class);
Route::resource('departments', DepartmentController::class);
Route::resource('dissertations', DissertationController::class);
Route::resource('dissertation-types', DissertationTypeController::class);
Route::resource('schools', SchoolController::class);
