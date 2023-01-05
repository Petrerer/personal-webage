<?php

use App\Http\Controllers\Cards\CardController;
use Illuminate\Support\Facades\Route;

Route::get('get/{id}', [CardController::class, 'get']);
