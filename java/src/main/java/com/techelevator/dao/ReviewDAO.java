package com.techelevator.dao;

import com.techelevator.model.Review;

import javax.validation.Valid;
import java.util.List;

public interface ReviewDAO {

    List<Review> getReviews(int beer_id);

    public Review createReview(Review review);



}
