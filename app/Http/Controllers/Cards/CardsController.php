<?php

namespace App\Http\Controllers\Cards;

use App\Http\Controllers\Controller;
use App\Services\Cards\CardsService;
use Illuminate\Http\Request;

class CardsController extends Controller
{
    public CardsService $cardsService;

    public function __construct(CardsService $cardsService)
    {
        $this->cardsService = $cardsService;
    }

    public function list()
    {
        $cards=$this->cardsService->list();
        return $cards;  
    }
}
