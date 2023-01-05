<?php

namespace App\Http\Controllers\Cards;

use App\Http\Controllers\Controller;
use App\Services\Cards\CardService;
use Illuminate\Http\Request;

class CardController extends Controller
{
    public CardService $cardService;

    public function __construct(CardService $cardService)
    {
        $this->cardService = $cardService;
    }

    public function get($id){
        $card=$this->cardService->get($id);
        return $card;
    }

    public function destroy($id){
        $this->cardService->destroy($id);
        return response();
    }
}
