package com.techelevator.dao;

import com.techelevator.model.Brewery;
import java.util.List;

public interface BreweryDAO {

    public List<Brewery> getAllBreweries ();
    public Brewery getBreweryWithId (Long userId);
    public String updateBrewery (Brewery brewery);
    public boolean createBrewery (String name, String address, String websiteUrl,
                                  String phone, String description, Long userId);
}
