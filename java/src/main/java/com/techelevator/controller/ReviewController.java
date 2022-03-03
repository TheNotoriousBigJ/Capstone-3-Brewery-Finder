
package com.techelevator.controller;


import com.techelevator.dao.ReviewDAO;
import com.techelevator.model.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class ReviewController {

    @Autowired
    private ReviewDAO reviewDAO;

    public ReviewController(ReviewDAO reviewDAO){
        this.reviewDAO = reviewDAO;
    }


    //show reviews by beer id
    @RequestMapping(path = "/reviews/{beerId}", method = RequestMethod.GET)
    public List<Review> getReviews(@PathVariable int beerId){
        return reviewDAO.getReviews(beerId);
    }

    //    create a new review
    @RequestMapping(path = "/reviews", method = RequestMethod.POST)
    public Review createReview(@RequestBody Review review){
        return reviewDAO.createReview(review);
    }



}