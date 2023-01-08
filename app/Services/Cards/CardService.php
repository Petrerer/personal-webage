<?php

namespace App\Services\Cards;

use App\Models\Cards\Card;

class CardService
{

    public Card $cardModel;

    public function __construct(Card $cardModel)
    {
        $this->cardModel = $cardModel;
    }

    public function get($id)
    {
        return $this->cardModel->find($id);
    }

    public function destroy($id)
    {
        $this->cardModel->destroy($id);
    }
    
    public function create($card)
    {
        $this->cardModel::create($card);
    }
    
}
