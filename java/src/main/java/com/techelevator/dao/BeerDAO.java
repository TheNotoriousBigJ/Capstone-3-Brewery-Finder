package com.techelevator.dao;



import com.techelevator.model.Beer;


import java.util.List;

public interface BeerDAO {

    public List<Beer> getAllBeers ();
    public Boolean updateBeer (Beer beer);
    public Boolean createBeer (Beer beer);
    public void deleteBeer(int beerId);
}

