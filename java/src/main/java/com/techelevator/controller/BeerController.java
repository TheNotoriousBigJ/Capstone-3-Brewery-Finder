package com.techelevator.controller;


import com.techelevator.dao.BeerDAO;
import com.techelevator.model.Beer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
public class BeerController {

    @Autowired
    private BeerDAO beerDAO;


    // Beer Controller

    public BeerController(BeerDAO beerDAO) {
        this.beerDAO = beerDAO;
    }

    // Request Mapping, show Beers

    @ResponseStatus(value= HttpStatus.OK)
    @RequestMapping(value="/beers", method=RequestMethod.GET)
    public List<Beer> getAllBeers(){
        List<Beer> beersList = beerDAO.getAllBeers();
        return beersList;
    }

    // Create a Beer

    @ResponseStatus(value= HttpStatus.CREATED)
    @RequestMapping(value="/beers", method=RequestMethod.POST)
    public Boolean createBeer(@Valid @RequestBody Beer beer){
        return beerDAO.createBeer(beer);
    }

    // Update a Beer

    @ResponseStatus(value= HttpStatus.OK)
    @RequestMapping(value= "/beers/{beer_id}", method = RequestMethod.PUT)
    public Boolean updateBeer(@RequestBody Beer beer, @PathVariable Integer beer_id) {
        beer.setBeer_id(beer_id);
        return beerDAO.updateBeer(beer);
    }

    // Delete a Beer

    @ResponseStatus(value= HttpStatus.NO_CONTENT)
    @RequestMapping(value = "/beers/{beer_id}", method = RequestMethod.DELETE)
    public void deleteBeer(@PathVariable Integer beer_id) {
        beerDAO.deleteBeer(beer_id);
    }
}
