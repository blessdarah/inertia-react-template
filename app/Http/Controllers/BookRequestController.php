<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookRequestRequest;
use App\Http\Requests\UpdateBookRequestRequest;
use App\Models\BookRequest;
use Inertia\Inertia;

class BookRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bookRequests = BookRequest::all();
        return Inertia::render('BookRequest/BookRequestPage', ['bookRequests' => $bookRequests]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreBookRequestRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBookRequestRequest $request)
    {
        $data = $request->validated();
        BookRequest::create($data);
        return redirect()->back();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateBookRequestRequest  $request
     * @param  \App\Models\BookRequest  $bookRequest
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateBookRequestRequest $request, BookRequest $bookRequest)
    {
        $data = $request->validated();
        $bookRequest->update($data);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BookRequest  $bookRequest
     * @return \Illuminate\Http\Response
     */
    public function destroy(BookRequest $bookRequest)
    {
        $bookRequest->delete();
        return redirect()->back();
    }
}
