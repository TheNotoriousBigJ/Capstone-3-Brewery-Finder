package com.techelevator.dao;

import com.techelevator.model.Brewery;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;

@Component
public class JdbcBreweryDao implements BreweryDAO {

    private final JdbcTemplate jdbcTemplate;

    public JdbcAccountDao(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource); }

    private mapRowToBrewery(SqlRowSet sql) {
        try {
            Brewery brewery = new Brewery();
            brewery.setName(sql.getString("name"));
            brewery.setAddress(sql.getString("address"));
            brewery.setWebsiteUrl(sql.getString("websiteurl"));
            brewery.setPhone(sql.getString("phone"));
            brewery.setEmail(sql.getString("email"));

        }
    }
}
