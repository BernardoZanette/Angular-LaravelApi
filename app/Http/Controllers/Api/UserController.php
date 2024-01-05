<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Http\Requests\StoreUpdateUserRequest;

class UserController extends Controller
{

    public function __construct(protected User $repository) {}

    public function index() {

        $users = $this->repository->paginate();

        return UserResource::collection($users);
    }

    public function store(StoreUpdateUserRequest $request) {

        $data = $request->validated();
    
        $data['password'] = bcrypt($request->password);

        $user = $this->repository->create($data);
    
        return new UserResource($user);
    }

    public function show(string $id) {
        
        // $user = $this->repository->find($id);
        // $user = $this->repository->where('id', '=', $id)->first();
        // if (!$user) {
        //     return response()->json(["message" => "User not Found"], 404);
        // }

        $user = $this->repository->findOrFail($id);

        return new UserResource($user);
    }

    public function update(StoreUpdateUserRequest $request, string $id) {
        
        $user = $this->repository->findOrFail($id);

        $data = $request->validated();
        if ($request->password)
            $data['password'] = bcrypt($request->password);
        $user->update($data);

        return new UserResource($user);
    }

    public function destroy(string $id) {
        
        $this->repository->findOrFail($id)->delete();
        
        return response()->json([], Response::HTTP_NO_CONTENT);
    }


}
