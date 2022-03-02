package com.techelevator.controller;

import com.techelevator.dao.BreweryDAO;
import com.techelevator.model.Brewery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
public class BreweryController {

    @Autowired
    private BreweryDAO breweryDAO;

    public BreweryController(BreweryDAO breweryDAO) {
        this.breweryDAO = breweryDAO;
    }

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(value = "/breweries", method = RequestMethod.GET)
    public List<Brewery> getAllBreweries() {
        List<Brewery> allBreweries = breweryDAO.getAllBreweries();
        return allBreweries;
    }


    //only brewer can update the brewery
    @RequestMapping(value = "/breweries", method = RequestMethod.PUT)
    public String updateBrewery(@RequestBody Brewery brewery) {
        return breweryDAO.updateBrewery(brewery);
    }

//    limited to only admin users
    @RequestMapping(path = "/breweries", method = RequestMethod.POST)
    public boolean createBrewery(@RequestBody Brewery brewery){
        return breweryDAO.createBrewery(brewery);
    }


    @RequestMapping(path = "/breweries/{breweryId}", method = RequestMethod.DELETE)
    public boolean deleteBrewery(Brewery breweryId){
        return breweryDAO.deleteBrewery(breweryId);
    }

}
