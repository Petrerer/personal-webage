<?php

use App\Http\Controllers\Cards\CardController;
use App\Http\Controllers\Cards\CardsController;
use Illuminate\Support\Facades\Route;

Route::get('get/{id}', [CardController::class, 'get']);
Route::get('list', [CardsController::class, 'list']);
Route::post("create",[CardController::class,'create']);
Route::delete("destroy/{id}",[CardController::class,'destroy']);
