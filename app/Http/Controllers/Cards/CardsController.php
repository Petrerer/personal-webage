<?php

namespace App\Http\Controllers\Cards;

use App\Http\Controllers\Controller;
use App\Services\Cards\CardService;
use Illuminate\Http\Request;

class CardsController extends Controller
{
    public CardService $cardService;

    public function __construct(CardService $cardService)
    {
        $this->cardService = $cardService;
    }

    public function list($id)
    {
        $card=$this->cardService->get($id);
        return $card;
    }
}
