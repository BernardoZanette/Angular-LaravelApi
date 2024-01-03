<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\UserResource;
use App\Models\User;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function index() {

        $users = User::paginate();

        return UserResource::collection($users);
    }
}
