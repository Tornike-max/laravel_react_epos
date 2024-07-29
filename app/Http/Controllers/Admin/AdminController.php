<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AboutUpdateRequest;
use App\Http\Requests\AddTeamMemberRequest;
use App\Http\Requests\CreateHistoryRequest;
use App\Http\Requests\CreatePressRequets;
use App\Http\Requests\HistoryUpdateRequest;
use App\Http\Requests\UpdatePressRequest;
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
use Illuminate\Support\Facades\Gate;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (!Gate::allows('admin')) {
            abort(401);
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


    //Team methods
    public function team()
    {
        if (!Gate::allows('admin')) {
            abort(401);
        }

        $team = User::query()->orderBy('is_admin', 'desc')->paginate(10);

        return inertia('Admin/Team', [
            'team' => UserResource::collection($team)
        ]);
    }

    public function createTeamMember()
    {
        if (!Gate::allows('admin')) {
            abort(401);
        }

        return inertia('Admin/CreateTeamMember');
    }

    public function addTeamMember(AddTeamMemberRequest $request)
    {
        if (!Gate::allows('admin')) {
            abort(401);
        }
        $validatedData = $request->validated();
        $validatedData['is_admin'] = 0;

        User::create($validatedData);
        return to_route('admin.team')->with('success', 'New team member added successfully');
    }

    public function editTeamMember(User $user)
    {
        if (!Gate::allows('admin')) {
            abort(401);
        }

        if ($user->is_admin && $user->id === auth()->id()) {
            return abort(401);
        }

        return inertia('Admin/EditTeamMember', [
            'member' => $user
        ]);
    }

    public function updateTeamMember(UpdateTeamMemberRequest $request, User $user)
    {
        if (!Gate::allows('admin')) {
            abort(401);
        }

        if ($user->is_admin && $user->id === auth()->id()) {
            return abort(401);
        }

        $validatedData = $request->validated();

        $user->update($validatedData);


        return to_route('admin.team')->with('success', 'Team member updated successfully');
    }

    public function deleteTeamMember(User $user)
    {
        if (!Gate::allows('admin')) {
            abort(401);
        }
        if ($user->is_admin && $user->id === auth()->id()) {
            abort(401);
        };

        $user->delete();
        return to_route('admin.team')->with('success', 'Team member deleted successfully');
    }


    //Product methods
    public function products()
    {
        if (!Gate::allows('admin')) {
            abort(401);
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


    //Press Release methods
    public function pressRelease()
    {
        if (!Gate::allows('admin')) {
            abort(401);
        }
        $press = PressRelease::with('product')->latest()->paginate(10);
        // dd($press);
        return inertia('Admin/Press', [
            'pressRelease' => PressReleaseResource::collection($press)
        ]);
    }

    public function createPressRelease()
    {
        if (!Gate::allows('admin')) {
            abort(401);
        }
        $products = Product::query()->with('user')->latest()->get();

        return inertia('Admin/CreatePressRelease', [
            'products' =>  ProductResource::collection($products)
        ]);
    }

    public function storePressRelease(CreatePressRequets $request)
    {
        if (!Gate::allows('admin')) {
            abort(401);
        }
        $validatedData = $request->validated();


        if (!isset($validatedData)) {
            return to_route('admin.press')->with('error', 'Error while creating release');
        }

        PressRelease::create($validatedData);
        return to_route('admin.press')->with('success', 'Press release created successfully');
    }

    public function editPressRelease(PressRelease $press)
    {
        if (!Gate::allows('admin')) {
            abort(401);
        }
        $products = Product::query()->with('user')->latest()->get();


        if (!isset($press) || !isset($products)) {
            return to_route('admin.press')->with('message', 'Release with this id not found');
        }
        $pressObject = PressRelease::with('product')->where('product_id', $press['product_id'])->get();

        return inertia('Admin/EditPressRelease', [
            'pressRelease' =>  PressReleaseResource::collection($pressObject),
            'products' => ProductResource::collection($products),
        ]);
    }

    public function updatePressRelease(UpdatePressRequest $request, PressRelease $press)
    {
        if (!Gate::allows('admin')) {
            abort(401);
        }

        $validatedData = $request->validated();

        if (count($validatedData) === 0) {
            return;
        }

        $press->update($validatedData);

        return to_route('admin.press')->with('success', 'Release updated successfully');
    }

    public function pressReleaseDelete(PressRelease $press)
    {
        if (!Gate::allows('admin')) {
            abort(401);
        }

        if (empty($press)) {
            return;
        }

        $press->delete();
    }


    //Company methods
    public function company()
    {
        if (!Gate::allows('admin')) {
            abort(401);
        }
        $history = History::query()->latest()->paginate(10);
        return inertia('Admin/Company', [
            'histories' => HistoryResource::collection($history)
        ]);
    }

    public function editHistory(History $history)
    {
        if (!Gate::allows('admin')) {
            abort(401);
        }

        return inertia('Admin/EditHistory', [
            'history' => new HistoryResource($history)
        ]);
    }

    public function updateHistory(HistoryUpdateRequest $request, History $history)
    {
        if (!Gate::allows('admin')) {
            abort(401);
        }

        $validatedData = $request->validated();
        if (count($validatedData) === 0) {
            return;
        }

        $history->update($validatedData);
        return to_route('admin.company')->with('success', 'About Data Updated Successfully');
    }

    public function storeHistory(CreateHistoryRequest $request)
    {
        if (!Gate::allows('admin')) {
            abort(401);
        }

        $validatedData = $request->validated();


        if (count($validatedData) === 0) {
            return;
        }

        History::create($validatedData);

        return to_route('admin.company')->with('success', 'History created successfully');
    }

    public function deleteHistory(History $history)
    {
        if (!Gate::allows('admin')) {
            abort(401);
        }

        if (empty($history)) {
            return;
        }

        $history->delete();
        return to_route('admin.company')->with('success', 'History deleted successfully');
    }


    //settings #about #access

    public function settings()
    {
        if (!Gate::allows('admin')) {
            abort(401);
        }

        $about = About::query()->first();


        return inertia('Admin/Settings', [
            'about' => new AboutResource($about),
        ]);
    }

    public function updateAbout(AboutUpdateRequest $request, About $about)
    {
        if (!Gate::allows('admin')) {
            abort(401);
        }
        $validatedData = $request->validated();

        if (count($validatedData) === 0) {
            return;
        }

        $about->update($validatedData);
        return to_route('admin.press')->with('success', 'About Data Updated Successfully');
    }
}
