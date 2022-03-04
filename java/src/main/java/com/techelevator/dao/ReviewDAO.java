package com.techelevator.dao;

import com.techelevator.model.Beer;
import com.techelevator.model.Review;

import javax.validation.Valid;
import java.util.List;

public interface ReviewDAO {

    public List<Review> getAllReviews ();
    public Boolean updateReview (Review review);
    public Boolean createReview (Review review);
    public void deleteReview(int review_id);





}