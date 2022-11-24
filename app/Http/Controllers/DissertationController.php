<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDissertationRequest;
use App\Http\Requests\UpdateDissertationRequest;
use App\Models\Dissertation;

class DissertationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreDissertationRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDissertationRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Dissertation  $dissertation
     * @return \Illuminate\Http\Response
     */
    public function show(Dissertation $dissertation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Dissertation  $dissertation
     * @return \Illuminate\Http\Response
     */
    public function edit(Dissertation $dissertation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDissertationRequest  $request
     * @param  \App\Models\Dissertation  $dissertation
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDissertationRequest $request, Dissertation $dissertation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dissertation  $dissertation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Dissertation $dissertation)
    {
        //
    }
}
