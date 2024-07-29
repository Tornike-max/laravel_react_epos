<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Company\CompanyController;
use App\Http\Controllers\History\HistoryController;
use App\Http\Controllers\PressRelease\PressReleaseController;
use App\Http\Controllers\Products\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Support\SupportController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('admin', [AdminController::class, 'index'])->name('admin');

    Route::get('admin/team', [AdminController::class, 'team'])->name('admin.team');
    Route::delete('admin/{user}', [AdminController::class, 'deleteTeamMember'])->name('admin.destroy.member');
    Route::get('admin/team/create', [AdminController::class, 'createTeamMember'])->name('admin.team.create');
    Route::post('admin/team/store', [AdminController::class, 'addTeamMember'])->name('admin.team.store');
    Route::get('admin/team/edit/{user}', [AdminController::class, 'editTeamMember'])->name('admin.team.edit');
    Route::patch('admin/team/update/{user}', [AdminController::class, 'updateTeamMember'])->name('admin.team.update');

    Route::get('admin/products', [AdminController::class, 'products'])->name('admin.products');
    Route::get('admin/products/{product}', [AdminController::class, 'showProduct'])->name('admin.product.show');

    Route::get('admin/press-release', [AdminController::class, 'pressRelease'])->name('admin.press');
    Route::get('admin/press-release/create', [AdminController::class, 'createPressRelease'])->name('admin.press.create');
    Route::post('admin/press-release/store', [AdminController::class, 'storePressRelease'])->name('admin.press.store');
    Route::get('admin/press-release/{press}', [AdminController::class, 'editPressRelease'])->name('admin.press.edit');
    Route::patch('admin/press-release/update/{press}', [AdminController::class, 'updatePressRelease'])->name('admin.press.update');
    Route::delete('admin/press-release/{press}', [AdminController::class, 'pressReleaseDelete'])->name('admin.press.delete');

    Route::get('admin/company', [AdminController::class, 'company'])->name('admin.company');
    Route::get('admin/company/history/{history}', [AdminController::class, 'editHistory'])->name('admin.history.edit');
    Route::patch('admin/company/history/{history}', [AdminController::class, 'updateHistory'])->name('admin.history.update');
    Route::delete('admin/company/history/{history}', [AdminController::class, 'deleteHistory'])->name('admin.history.delete');
    Route::post('admin/company/history/store', [AdminController::class, 'storeHistory'])->name('admin.history.store');

    Route::get('admin/settings', [AdminController::class, 'settings'])->name('admin.settings.index');
    Route::patch('admin/settings/about/{about}', [AdminController::class, 'updateAbout'])->name('admin.settings.update');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::resource('products', ProductController::class);
Route::resource('press-release', PressReleaseController::class);
Route::get('company', [CompanyController::class, 'index'])->name('company.index');
Route::get('history', [HistoryController::class, 'index'])->name('history.index');
Route::get('support', [SupportController::class, 'index'])->name('support.index');
Route::post('support', [SupportController::class, 'store'])->name('support.store');



require __DIR__ . '/auth.php';
