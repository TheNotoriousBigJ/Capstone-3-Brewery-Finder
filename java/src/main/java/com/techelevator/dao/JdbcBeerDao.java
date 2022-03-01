package com.techelevator.dao;



import com.techelevator.model.Beer;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcBeerDao implements BeerDAO {


        private final JdbcTemplate jdbcTemplate;
        
   public JdbcBeerDao(DataSource dataSource){
            this.jdbcTemplate = new JdbcTemplate(dataSource);
   }


    @Override
    public List<Beer> getAllBeersWithId(int breweryId) {
        ArrayList<Beer> beers = new ArrayList<>();
        String sql = "SELECT * FROM beers;";
        SqlRowSet result = jdbcTemplate.queryForRowSet(sql);
        while (result.next()) {
            beers.add(mapRowToBeer(result));
        }

        return beers;
    }

    @Override
    public Boolean updateBeer(Beer beer) {
        return null;
    }

    @Override
    public Beer createBeer(Beer beer) {
        return beer;
    }

    @Override
    public void deleteBeer(int beerId) {

    }


    private Beer mapRowToBeer(SqlRowSet sql) {
            try {
                Beer beer = new Beer();
                beer.setName(sql.getString("name"));
                beer.setImage(sql.getString("image"));
                beer.setDescription(sql.getString("description"));
                beer.setBeerType(sql.getString("beer_type"));
                beer.setAbv(sql.getString("abv"));
                beer.setName(sql.getString("name"));
                return beer;
            } catch (DataAccessException exception) {
                exception.printStackTrace();
            }
            return null;
    }
}
