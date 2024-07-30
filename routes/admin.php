<?php

use App\Http\Controllers\Admin\AdminController;
use Illuminate\Support\Facades\Route;


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
    Route::get('admin/company/create-history', [AdminController::class, 'createHistory'])->name('admin.history.create');
    Route::post('admin/company/history/store', [AdminController::class, 'storeHistory'])->name('admin.history.store');

    Route::get('admin/settings', [AdminController::class, 'settings'])->name('admin.settings.index');
    Route::patch('admin/settings/about/{about}', [AdminController::class, 'updateAbout'])->name('admin.settings.update');
});
