package com.techelevator.model;

public class Brewery {
    private int breweryId;
    private String name;
    private String address;
    private String websiteUrl;
    private String phone;
    private String email;
    private String description;
    private Long userId;

    public Brewery(int breweryId, String name, String address, String websiteUrl, String phone,
                   String email, String description, Long userId) {
        this.breweryId = breweryId;
        this.name = name;
        this.address = address;
        this.websiteUrl = websiteUrl;
        this.phone = phone;
        this.email = email;
        this.description = description;
        this.userId = userId;
    }

    public int getBreweryId() {
        return breweryId;
    }

    public void setBreweryId(int id) {
        this.breweryId = breweryId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getWebsiteUrl() {
        return websiteUrl;
    }

    public void setWebsiteUrl(String websiteUrl) {
        this.websiteUrl = websiteUrl;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
