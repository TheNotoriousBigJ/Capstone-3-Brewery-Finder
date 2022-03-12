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
    public List<Beer> getAllBeers() {
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
       String sql = "UPDATE beers"
               + " SET name = ?, image = ?, description = ?, beer_type = ?, abv = ?, brewery_id = ?"
               + " WHERE beer_id = ?";
//       added beer id at the end
       int count =  jdbcTemplate.update(sql, beer.getName(), beer.getImage(),beer.getDescription(), beer.getBeer_type(), beer.getAbv(), beer.getBrewery_id(), beer.getBeer_id());
       if (count > 0) {
            return true;
        }
       else {
           return false;
       }
       //return updateBeer(beer);
    }

    @Override
    public Boolean createBeer(Beer beer) {
       String sql = "INSERT INTO beers (name, image, description, beer_type, abv, brewery_id) VALUES (?,?,?,?,?,?)";
               int count = jdbcTemplate.update(sql, beer.getName(), beer.getImage(),beer.getDescription(), beer.getBeer_type(), beer.getAbv(), beer.getBrewery_id());
        if (count > 0) {
            return true;
        }
        else {
            return false;
        }



             //  return createBeer(beer);
    }

    @Override
    public void deleteBeer(int beer_id) {
       String sqlDeleteBeer = "DELETE FROM beers where beer_id = ?";
       jdbcTemplate.update(sqlDeleteBeer, beer_id);

    }


    private Beer mapRowToBeer(SqlRowSet sql) {
            try {
                Beer beer = new Beer();
                beer.setName(sql.getString("name"));
                beer.setImage(sql.getString("image"));
                beer.setDescription(sql.getString("description"));
                beer.setBeer_type(sql.getString("beer_type"));
                beer.setAbv(sql.getString("abv"));
                beer.setBrewery_id(sql.getInt("brewery_id"));
                //added this
                beer.setBeer_id(sql.getInt("beer_id"));
                return beer;
            } catch (DataAccessException exception) {
                exception.printStackTrace();
            }
            return null;
    }
}
