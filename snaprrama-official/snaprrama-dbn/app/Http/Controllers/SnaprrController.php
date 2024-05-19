<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\Snaprr;
use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Model;


class SnaprrController extends Controller
{
    public function register(Request $request)
{
    // $request->validate([
    //     'snapprID' => 'required|unique:users|max:255',
    //     'username' => 'required|unique:users|max:255',
    //     'password' => 'required',
    //     'email' => 'required|email|unique:users|max:255',
    // ]);

    $user = Snaprr::create([
        'username' => $request->username,
        'password' => $request->password,
        'email' => $request->email,
    ]);

    return response()->json([
        'message' => 'User registered successfully',
        'user' => $user,    
    ], 201);
}


public function login(Request $request)
{
    $username = $request->input('username');
    $password = $request->input('password');

    $user = Snaprr::where('username', $username)->first();

    if ($user && $password == $user->password) {
        // Authentication successful
        // You can create a session or generate a token for the user here
        // For example, you can use Laravel's built-in authentication system
        // to automatically generate a session for the user
        session(['user' => $user]);

        return response()->json(['message' => 'Login successful']);
    } else {
        // Authentication failed
        return response()->json(['message' => 'Invalid username or password'], 401);
    }
}

}
