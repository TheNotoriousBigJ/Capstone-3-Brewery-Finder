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
    @RequestMapping(value = "/brewery", method = RequestMethod.GET)
    public List<Brewery> getAllBreweries() {
        List<Brewery> allBreweries = breweryDAO.getAllBreweries();
        return allBreweries;
    }
}
