<?php

namespace App\Http\Controllers\Admin\Team;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class TeamController extends Controller
{
    public function index()
    {
        if (!Gate::allows('admin')) {
            abort(403);
        }
    }
}
