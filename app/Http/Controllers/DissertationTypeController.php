<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDissertationTypeRequest;
use App\Http\Requests\UpdateDissertationTypeRequest;
use App\Models\DissertationType;

class DissertationTypeController extends Controller
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
     * @param  \App\Http\Requests\StoreDissertationTypeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDissertationTypeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DissertationType  $dissertationType
     * @return \Illuminate\Http\Response
     */
    public function show(DissertationType $dissertationType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DissertationType  $dissertationType
     * @return \Illuminate\Http\Response
     */
    public function edit(DissertationType $dissertationType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDissertationTypeRequest  $request
     * @param  \App\Models\DissertationType  $dissertationType
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDissertationTypeRequest $request, DissertationType $dissertationType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DissertationType  $dissertationType
     * @return \Illuminate\Http\Response
     */
    public function destroy(DissertationType $dissertationType)
    {
        //
    }
}
