<?php

namespace App\Policies;

use App\Models\Dissertation;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class DissertationPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        return Response::allow();
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Dissertation  $dissertation
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(?User $user, Dissertation $dissertation)
    {
        return Response::allow();
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return Response::allow();
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Dissertation  $dissertation
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, Dissertation $dissertation)
    {
        return Response::allow();
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Dissertation  $dissertation
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, Dissertation $dissertation)
    {
        return Response::allow();
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Dissertation  $dissertation
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Dissertation $dissertation)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Dissertation  $dissertation
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Dissertation $dissertation)
    {
        //
    }
}
