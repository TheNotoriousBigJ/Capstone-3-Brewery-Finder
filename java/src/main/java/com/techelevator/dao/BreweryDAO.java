package com.techelevator.dao;

import com.techelevator.model.Brewery;
import java.util.List;

public interface BreweryDAO {

    public List<Brewery> getAllBreweries ();
    public Brewery getBreweryWithID (Long userId);
    public String updateBrewery (Brewery brewery);
    public boolean createBrewery (String name, String street, String city,String state,
                                  String postalCode, String country, String websiteUrl,
                                  String phone, String description, Long userId);
}
