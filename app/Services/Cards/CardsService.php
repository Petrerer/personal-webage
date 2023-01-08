<?php

namespace App\Services\Cards;

use App\Models\Cards\Card;

class CardsService
{

    public Card $cardModel;

    public function __construct(Card $cardModel)
    {
        $this->cardModel = $cardModel;
    }

    public function list()
    {
        return $this->cardModel->get();
    }
}
