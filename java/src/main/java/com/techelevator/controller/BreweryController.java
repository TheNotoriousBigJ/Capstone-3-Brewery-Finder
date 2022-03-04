package com.techelevator.controller;

import com.techelevator.dao.BreweryDAO;
import com.techelevator.model.Brewery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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
    @ResponseStatus(value= HttpStatus.OK)
    @RequestMapping(value = "/breweries/{brewery_id}", method = RequestMethod.PUT)
    public Boolean updateBrewery(@RequestBody Brewery brewery, @PathVariable Integer brewery_id) {
        brewery.setBrewery_id(brewery_id);
        return breweryDAO.updateBrewery(brewery);
    }

//    limited to only admin users

    @ResponseStatus(value= HttpStatus.CREATED)
    @RequestMapping(path = "/breweries", method = RequestMethod.POST)
    public boolean createBrewery(@Valid @RequestBody Brewery brewery){

        return breweryDAO.createBrewery(brewery);
    }

//    delete a brewery

    @ResponseStatus(value= HttpStatus.NO_CONTENT)
    @RequestMapping(path = "/breweries/{brewery_id}", method = RequestMethod.DELETE)
    public void deleteBrewery(@PathVariable Integer brewery_id){

         breweryDAO.deleteBrewery(brewery_id);
    }

}
