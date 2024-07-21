<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $query = Product::query();
        $products = $query->paginate(6);

        return inertia('Products/Index', [
            'products' => ProductResource::collection($products),
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
    public function show(Product $product)
    {

        return inertia('Products/Show', [
            'product' => new ProductResource($product),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }

        return inertia('Products/Edit', [
            'product' => $product,
            'csrfToken' => csrf_token(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductRequest $request, Product $product)
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }
        $validatedData = $request->validated();
        $product->update($validatedData);
        return redirect()->route('admin')->with('success', 'Product updated successfully');
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
