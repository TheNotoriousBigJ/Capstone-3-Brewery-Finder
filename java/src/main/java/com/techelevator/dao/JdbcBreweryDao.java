package com.techelevator.dao;

import com.techelevator.model.Brewery;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcBreweryDao implements BreweryDAO {

    private final JdbcTemplate jdbcTemplate;

    public JdbcBreweryDao(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource); }

    @Override
    public List<Brewery> getAllBreweries() {
        ArrayList<Brewery> breweries = new ArrayList<>();

        String sql = "SELECT * FROM breweries;";

        SqlRowSet result = jdbcTemplate.queryForRowSet(sql);

        while(result.next()) {
            breweries.add(mapRowToBrewery(result));
        }

        return breweries;
    }

    @Override
    public Brewery getBreweryWithId(Long userId) {

        return null;
    }

    @Override
    public String updateBrewery(Brewery brewery) {
        return null;
    }

    @Override
    public boolean createBrewery(String name, String address, String websiteUrl, String phone, String description, Long userId) {
        return false;
    }

    private Brewery mapRowToBrewery(SqlRowSet sql) {
        try {
            Brewery brewery = new Brewery();
            brewery.setName(sql.getString("name"));
            brewery.setAddress(sql.getString("address"));
            brewery.setWebsiteUrl(sql.getString("websiteurl"));
            brewery.setPhone(sql.getString("phone"));
            brewery.setEmail(sql.getString("email"));
            brewery.setDescription(sql.getString("description"));
            brewery.setUserId(sql.getLong("user_id"));
            return brewery;
        } catch (DataAccessException ex) {
            ex.printStackTrace();
        }
        return null;
    }
}
