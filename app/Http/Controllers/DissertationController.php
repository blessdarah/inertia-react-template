<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDissertationRequest;
use App\Http\Requests\UpdateDissertationRequest;
use App\Models\Department;
use App\Models\Dissertation;
use App\Models\School;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class DissertationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dissertations = Dissertation::with(["school", "department"])->get();
        $schools = School::all();
        $departments = Department::all();
        return Inertia::render(
            'Dissertation/DissertationPage',
            [
                "dissertations" => $dissertations,
                "schools" => $schools,
                "departments" => $departments
            ]
        );
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
        $data = $request->validated();
        if ($request->hasFile('cover_image')) {
            $data['cover_page'] = $request->file("cover_page")->storePublicly("uploaded-images");
            $data['file'] = $request->file('file')->storePublicly("uploaded-files");
        }
        Dissertation::create($data);
        return redirect()->route("dissertations.index");
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
        $schools = School::all();
        $departments = Department::all();
        return Inertia::render(
            'Dissertation/EditDissertationPage',
            [
                "dissertation" => $dissertation,
                "schools" => $schools,
                "departments" => $departments
            ]
        );
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
        $oldDissertation = Dissertation::find($dissertation->id);
        dd($oldDissertation);
        $data = $request->validated();
        if ($request->hasFile('file')) {
            Storage::delete($oldDissertation->file);
            $data['file'] = $request->file('file')->storePublicly("uploaded-files");
        }
        if ($request->hasFile('cover_page')) {
            Storage::delete($oldDissertation->cover_page);
            $data['cover_page'] = $request->file('file')->storePublicly("uploaded-images");
        }
        $dissertation->update($data);
        return redirect()->route("dissertations.index");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dissertation  $dissertation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Dissertation $dissertation)
    {
        Storage::delete($dissertation->file);
        Storage::delete($dissertation->cover_page);
        $dissertation->delete();
        return redirect()->route("dissertations.index");
    }
}
