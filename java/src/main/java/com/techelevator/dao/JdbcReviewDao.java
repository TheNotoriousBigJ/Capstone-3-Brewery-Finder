package com.techelevator.dao;

import com.techelevator.model.Review;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

public class JdbcReviewDao implements ReviewDAO {
    private JdbcTemplate jdbcTemplate;
    public JdbcReviewDao(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }


    //    GET REVIEWS BY ID
    @Override
    public List<Review> getReviews(int beer_id) {
        List<Review> reviews = new ArrayList<>();
        String sql = "SELECT * FROM reviews WHERE beer_id = ?";
        SqlRowSet results= jdbcTemplate.queryForRowSet(sql,beer_id);

        while(results.next()){
            Review review = mapRowToReview(results);
            reviews.add(review);
        }
        return reviews;
    }



    //ADD A REVIEW
    @Override
    public Review createReview(Review review) {
        String sql = "INSERT INTO reviews (reviewText, rating, beerId, userId) VALUES (?, ?, ?, ?)";
        jdbcTemplate.update(sql, review.getReviewText(), review.getRating(),review.getBeerId(), review.getUserId());
        return createReview(review);
    }





    private Review mapRowToReview(SqlRowSet sql){
        try{
            Review review = new Review();
            review.setReviewId(sql.getInt("reviewId"));
            review.setBeerId(sql.getInt("beerId"));
            review.setUserId(sql.getInt("userId"));
            review.setRating(sql.getInt("rating"));
            review.setReviewText(sql.getString("reviewText"));
            return review;
        } catch (DataAccessException exception){
            exception.printStackTrace();

        }
        return null;

    }

}
