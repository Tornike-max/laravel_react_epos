<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
use App\Http\Resources\AboutResource;
use App\Http\Resources\HistoryResource;
use App\Models\About;
use App\Models\History;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index(Request $request)
    {
        $data = null;
        $resource = null;

        if ($request->has('history')) {
            $data = History::first();
            $resource = HistoryResource::class;
        }
        if ($request->has('about') || $request->has('access')  || !$request->has('history')) {
            $data = About::first();
            $resource = AboutResource::class;
        }

        return inertia('Company/Index', [
            'data' => $data ? new $resource($data) : null,
        ]);
    }
}
