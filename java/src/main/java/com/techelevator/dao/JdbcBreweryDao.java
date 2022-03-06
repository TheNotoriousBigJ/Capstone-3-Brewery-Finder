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
    public Boolean updateBrewery(Brewery brewery) {
        String sql = "UPDATE breweries"
                + " SET name = ?, address = ?, websiteUrl= ?, phone = ?, email = ?, description = ?, hoursOfOperation = ?, daysOfOperation = ?, user_id = ?"
                + " WHERE brewery_id = ?";

        int count = jdbcTemplate.update(sql, brewery.getName(), brewery.getAddress(), brewery.getWebsiteUrl(), brewery.getPhone(),brewery.getEmail(), brewery.getDescription(),brewery.getHoursOfOperation(), brewery.getDaysOfOperation(),brewery.getUserId(), brewery.getBrewery_id());
        if (count > 0) {
            return true;
        }
        else {
            return false;
        }

    }

    @Override
    public Boolean createBrewery(Brewery brewery) {
        String sql = "INSERT INTO breweries (name, address, websiteUrl, phone, email, description, hoursOfOperation, daysOfOperation, user_id) VALUES (?,?,?,?,?,?,?,?,?)";
        int count = jdbcTemplate.update(sql, brewery.getName(), brewery.getAddress(),brewery.getWebsiteUrl(), brewery.getPhone(),brewery.getEmail(), brewery.getDescription(),brewery.getHoursOfOperation(), brewery.getDaysOfOperation(), brewery.getUserId());
        if (count > 0) {
            return true;
        }
        else {
            return false;
        }


//      //  return false;
    }

    @Override
    public void deleteBrewery(int brewery_id ) {
        String sqlDeleteBrewery = "DELETE FROM breweries where brewery_id = ?";
        jdbcTemplate.update(sqlDeleteBrewery, brewery_id);

    }

    private Brewery mapRowToBrewery(SqlRowSet sql) {
        try {
            Brewery brewery = new Brewery();
            brewery.setBrewery_id(sql.getInt("brewery_id"));
            brewery.setName(sql.getString("name"));
            brewery.setAddress(sql.getString("address"));
            brewery.setImage(sql.getString("image"));
            brewery.setWebsiteUrl(sql.getString("websiteUrl"));
            brewery.setPhone(sql.getString("phone"));
            brewery.setEmail(sql.getString("email"));
            brewery.setDescription(sql.getString("description"));
            brewery.setHoursOfOperation(sql.getString("hoursOfOperation"));
            brewery.setDaysOfOperation(sql.getString("daysOfOperation"));
            brewery.setUserId(sql.getLong("user_id"));
            return brewery;
        } catch (DataAccessException ex) {
            ex.printStackTrace();
        }
        return null;
    }
}
