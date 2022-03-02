package com.techelevator.controller;


import com.techelevator.dao.ReviewDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class ReviewController {

    @Autowired
    private ReviewDAO reviewDAO;

    public ReviewController(ReviewDAO reviewDAO){
        this.reviewDAO = reviewDAO;
    }


}
