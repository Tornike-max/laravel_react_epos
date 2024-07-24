<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductStoreRequest;
use App\Http\Requests\ProductUpdateRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $products = Product::query()->with('user')->latest()->paginate(6);

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

        return inertia('Products/Create', [
            'csrfToken' => csrf_field(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductStoreRequest $request)
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }

        $validatedData = $request->validated();
        $user_id = Auth::id();
        $validatedData['user_id'] = $user_id;

        $image = $validatedData['image'] ?? null;
        $gameUrl = $validatedData['gameUrl'] ?? null;

        if ($image) {
            $validatedData['image'] = $image->store('images/' . Str::random(), 'public');
        }

        Product::create($validatedData);
        return to_route('admin')->with('success', 'Product created successfully');
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
    public function update(ProductUpdateRequest $request, Product $product)
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }
        $validatedData = $request->validated();

        $image = $validatedData['image'] ?? null;

        if ($image) {
            if ($product->image) {
                Storage::disk('public')->deleteDirectory(dirname($product->image));
            }
            $validatedData['image'] = $image->store('images/' . Str::random(), 'public');
        } else {
            unset($validatedData['image']);
        }

        $product->update($validatedData);
        return redirect()->route('admin')->with('success', 'Product updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }

        if (empty($product)) {
            abort(404);
        }

        $product->delete();
        return redirect()->route('admin')->with('success', 'Product deleted successfully');
    }
}
