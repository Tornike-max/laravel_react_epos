<?php

namespace App\Http\Controllers\PressRelease;

use App\Http\Controllers\Controller;
use App\Http\Resources\PressReleaseResource;
use App\Models\PressRelease;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class PressReleaseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (request('title')) {
            $search = request('title');
            $pressReleases = PressRelease::with('product')->where('info', 'like', "%$search%")->latest()->paginate(5);
        } else {
            $pressReleases = PressRelease::with('product')->latest()->paginate(5);
        }

        if ($pressReleases->isEmpty()) {
            return inertia('NotFound/NotFound', [
                'message' => 'It seems like we don’t have any press releases available right now. Please check back later or contact support if you need further assistance.'
            ]);
        }

        return inertia('Press/Index', [
            'pressRelease' => PressReleaseResource::collection($pressReleases),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }
    }
}
