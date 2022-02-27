package com.techelevator.controller;


import com.techelevator.dao.BreweryDAO;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class BeerController {

    private BeerDAO beerDAO;


    // Beer Controller

    public BeerController(BeerDAO beerDAO) {
        this.beerDAO = beerDAO;
    }

    // Request Map, show Beers

    @PreAuthorize("permitAll")
    @RequestMapping(path="/beers", method=RequestMapping.GET)
    public list<Beer> showsAllBeers(

}
