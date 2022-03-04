package com.techelevator.dao;

import com.techelevator.model.Beer;
import com.techelevator.model.Review;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcReviewDao implements ReviewDAO {
    private JdbcTemplate jdbcTemplate;
    public JdbcReviewDao(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }


    //    GET REVIEWS
    @Override
    public List<Review> getAllReviews() {
        List<Review> reviews = new ArrayList<>();
        String sql = "SELECT * FROM reviews";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);

        while(results.next()){
            reviews.add(mapRowToReview(results));
        }
        return reviews;
    }

    @Override
    public Boolean updateReview(Review review) {
        String sql = "UPDATE reviews"
                + " SET beer_id = ?, user_id = ?, review = ?, rating = ?"
                + " WHERE review_id = ?";
//       added beer id at the end
        int count =  jdbcTemplate.update(sql, review.getBeer_id(), review.getUser_id(), review.getReview(), review.getRating(), review.getReview_id());
        if (count > 0) {
            return true;
        }
        else {
            return false;
        }
        //return updateBeer(beer);
    }


    //ADD A REVIEW
    @Override
    public Boolean createReview(Review review) {
        String sql = "INSERT INTO reviews (review, rating, beer_id, user_id) VALUES (?, ?, ?, ?)";
        int count = jdbcTemplate.update(sql, review.getReview(), review.getRating(), review.getBeer_id(), review.getUser_id());

        if (count > 0) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public void deleteReview(int review_id) {
        String sqlDeleteReview = "DELETE FROM reviews where review_id = ?";
        jdbcTemplate.update(sqlDeleteReview, review_id);

    }


    private Review mapRowToReview(SqlRowSet sql){
        try{
            Review review = new Review();
            review.setReview_id(sql.getInt("review_id"));
            review.setBeer_id(sql.getInt("beer_id"));
            review.setUser_id(sql.getInt("user_id"));
            review.setRating(sql.getInt("rating"));
            review.setReview(sql.getString("review"));
            return review;
        } catch (DataAccessException exception){
            exception.printStackTrace();

        }
        return null;

    }

}