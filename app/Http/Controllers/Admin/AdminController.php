<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PressReleaseResource;
use App\Http\Resources\ProductResource;
use App\Models\PressRelease;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }

        $products = Product::query()->latest()->get();
        $pressRelease = PressRelease::with('product')->latest()->get();

        $productsCount = Product::query()->count();
        $pressReleaseCount = PressRelease::with('product')->count();

        return inertia('Admin/Index', [
            'products' => ProductResource::collection($products),
            'pressRelease' => PressReleaseResource::collection($pressRelease),
            'productsCount' => $productsCount,
            'pressReleaseCount' => $pressReleaseCount
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
