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
       String sql = "UPDATE beer"
               + " SET name = ?, image = ?, description = ?, type = ?, abv = ?"
               + " WHERE beerId = ?";
       jdbcTemplate.update(sql, beer);
       return updateBeer(beer);
    }

    @Override
    public Beer createBeer(Beer beer) {
       String sql = "INSERT INTO beers (name, image, description, type, abv, breweryId) + VALUES (?,?,?,?,?,?)";
               jdbcTemplate.update(sql, beer);
               return createBeer(beer);
    }

    @Override
    public void deleteBeer(int beerId) {
       String sqlDeleteBeer = "DELETE FROM beers where beerId = ?";
       jdbcTemplate.update(sqlDeleteBeer, beerId);

    }


    private Beer mapRowToBeer(SqlRowSet sql) {
            try {
                Beer beer = new Beer();
                beer.setName(sql.getString("name"));
                beer.setImage(sql.getString("image"));
                beer.setDescription(sql.getString("description"));
                beer.setType(sql.getString("type"));
                beer.setAbv(sql.getString("abv"));
                beer.setName(sql.getString("name"));
                beer.setBreweryId(sql.getInt("breweryId"));
                return beer;
            } catch (DataAccessException exception) {
                exception.printStackTrace();
            }
            return null;
    }
}
