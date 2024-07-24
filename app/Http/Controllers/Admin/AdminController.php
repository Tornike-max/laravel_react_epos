<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PressReleaseResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\UserResource;
use App\Models\PressRelease;
use App\Models\Product;
use App\Models\User;
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

        $products = Product::query()->with('user')->latest()->paginate(9);;
        $pressRelease = PressRelease::with('product')->latest()->paginate(10);

        $productsCount = Product::query()->count();
        $pressReleaseCount = PressRelease::with('product')->count();

        return inertia('Admin/Index', [
            'products' => ProductResource::collection($products),
            'pressRelease' => PressReleaseResource::collection($pressRelease),
            'productsCount' => $productsCount,
            'pressReleaseCount' => $pressReleaseCount,
        ]);
    }

    public function team()
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }

        $team = User::query()->orderBy('is_admin', 'desc')->paginate(10);

        return inertia('Admin/Team', [
            'team' => UserResource::collection($team)
        ]);
    }

    public function deleteTeamMember(User $user)
    {
        dd('hello');
    }
}
