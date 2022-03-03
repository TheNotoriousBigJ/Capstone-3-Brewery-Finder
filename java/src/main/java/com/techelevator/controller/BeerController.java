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
    public Beer createBeer(@Valid @RequestBody Beer beer){
        return beer;
    }

    // Update a Beer

    @ResponseStatus(value= HttpStatus.OK)
    @RequestMapping(value= "/beers/{beerId}", method = RequestMethod.PUT)
    public Boolean updateBeer(@RequestBody Beer beer) {
        return beerDAO.updateBeer(beer);
    }

    // Delete a Beer

    @ResponseStatus(value= HttpStatus.NO_CONTENT)
    @RequestMapping(value = "/beers/{beerId}", method = RequestMethod.DELETE)
    public void deleteBeer(int beerId) {
        beerDAO.deleteBeer(beerId);
    }
}
