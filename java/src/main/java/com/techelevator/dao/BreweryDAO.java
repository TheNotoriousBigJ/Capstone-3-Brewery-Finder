package com.techelevator.dao;

import com.techelevator.model.Brewery;
import java.util.List;

public interface BreweryDAO {

    public List<Brewery> getAllBreweries ();
    public String updateBrewery (Brewery brewery);
    public Boolean createBrewery (Brewery brewery);
    public Boolean deleteBrewery (Brewery brewery);
}
