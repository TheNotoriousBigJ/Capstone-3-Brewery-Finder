package com.techelevator.dao;



import com.techelevator.model.Beer;


import java.util.List;

public interface BeerDAO {

    public List<Beer> getAllBeersWithId (int breweryId);
    public String updateBeer (Beer beer);
    public boolean createBeer (String name, String image, String description, String beerType, String abv);
    public void deleteBeer(int beerId);

}

