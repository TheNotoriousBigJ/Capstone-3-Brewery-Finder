
package com.techelevator.controller;


import com.techelevator.dao.ReviewDAO;
import com.techelevator.model.Beer;
import com.techelevator.model.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    @RequestMapping(path = "/reviews", method = RequestMethod.GET)
    public List<Review> getReviews(){
        List<Review> reviewList = reviewDAO.getAllReviews();
        return reviewList;
    }

    //    create a new review
    @RequestMapping(path = "/reviews", method = RequestMethod.POST)
    public Boolean createReview(@RequestBody Review review){
        return reviewDAO.createReview(review);
    }

    @ResponseStatus(value= HttpStatus.OK)
    @RequestMapping(value= "/reviews/{review_id}", method = RequestMethod.PUT)
    public Boolean updateReview(@RequestBody Review review, @PathVariable Integer review_id) {
        review.setReview_id(review_id);
        return reviewDAO.updateReview(review);
    }

    @ResponseStatus(value= HttpStatus.NO_CONTENT)
    @RequestMapping(value = "/reviews/{review_id}", method = RequestMethod.DELETE)
    public void deleteReview(@PathVariable Integer review_id) {
        reviewDAO.deleteReview(review_id);
    }
}