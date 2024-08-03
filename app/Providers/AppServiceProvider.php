<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */

    public function boot(): void
    {
        Gate::define('admin', function (User $user): bool {
            return (bool) $user->is_admin;
        });

        Gate::define('editor', function (User $user): bool {
            return (bool) ($user->access_type === 'editor');
        });

        Gate::define('member', function (User $user): bool {
            return (bool) ($user->access_type === 'member');
        });
    }
}
