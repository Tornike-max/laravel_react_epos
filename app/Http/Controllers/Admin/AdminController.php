<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AboutUpdateRequest;
use App\Http\Requests\AddTeamMemberRequest;
use App\Http\Requests\HistoryUpdateRequest;
use App\Http\Requests\UpdateTeamMemberRequest;
use App\Http\Resources\AboutResource;
use App\Http\Resources\HistoryResource;
use App\Http\Resources\PressReleaseResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\UserResource;
use App\Models\About;
use App\Models\History;
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

    public function createTeamMember()
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }

        return inertia('Admin/CreateTeamMember');
    }

    public function addTeamMember(AddTeamMemberRequest $request)
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }
        $validatedData = $request->validated();
        $validatedData['is_admin'] = 0;

        User::create($validatedData);
        return to_route('admin.team')->with('success', 'New team member added successfully');
    }

    public function editTeamMember(User $user)
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }

        if ($user->is_admin && $user->id === auth()->id()) {
            return abort(404);
        }

        return inertia('Admin/EditTeamMember', [
            'member' => $user
        ]);
    }

    public function updateTeamMember(UpdateTeamMemberRequest $request, User $user)
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }

        if ($user->is_admin && $user->id === auth()->id()) {
            return abort(404);
        }

        $validatedData = $request->validated();

        $user->update($validatedData);


        return to_route('admin.team')->with('success', 'Team member updated successfully');
    }

    public function deleteTeamMember(User $user)
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }
        if ($user->is_admin && $user->id === auth()->id()) {
            abort(404);
        };

        $user->delete();
        return to_route('admin.team')->with('success', 'Team member deleted successfully');
    }

    public function products()
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }
        $products = Product::query()->with('user')->latest()->paginate(9);

        return inertia('Admin/Products', [
            'products' => ProductResource::collection($products),
        ]);
    }

    public function showProduct(Product $product)
    {
        if (!isset($product)) {
            return;
        }
        return inertia('Admin/ProductShow', [
            'product' => new ProductResource($product)
        ]);
    }

    public function pressRelease()
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }
        $press = PressRelease::with('product')->latest()->paginate(10);

        return inertia('Admin/Press', [
            'pressRelease' => PressReleaseResource::collection($press)
        ]);
    }

    public function pressReleaseDelete(PressRelease $press)
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }
        dd($press);
    }

    public function company()
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }
        $aboutInfo = About::query()->first();
        $history = History::query()->first();

        return inertia('Admin/Company', [
            'about' => new AboutResource($aboutInfo),
            'history' => new HistoryResource($history)
        ]);
    }

    public function updateAbout(AboutUpdateRequest $request, About $about)
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }
        $validatedData = $request->validated();
        if (count($validatedData) === 0) {
            return;
        }

        $about->update($validatedData);
        return to_route('admin.company')->with('success', 'About Data Updated Successfully');
    }

    public function updateHistory(HistoryUpdateRequest $request, History $history)
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }

        $validatedData = $request->validated();
        if (count($validatedData) === 0) {
            return;
        }

        $history->update($validatedData);
        return to_route('admin.company')->with('success', 'About Data Updated Successfully');
    }
}
