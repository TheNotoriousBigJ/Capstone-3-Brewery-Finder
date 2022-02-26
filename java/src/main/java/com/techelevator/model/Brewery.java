package com.techelevator.model;

public class Brewery {
    private int id;
    private String name;
    private String address;
    private String websiteUrl;
    private String phone;
    private String email;
    private String description;
    private Long userId;

    public Brewery(int id, String name, String address, String websiteUrl, String phone,
                   String email, String description, Long userId) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.websiteUrl = websiteUrl;
        this.phone = phone;
        this.email = email;
        this.description = description;
        this.userId = userId;
    }

    public int getBreweryId() {
        return id;
    }

    public void setBreweryId(int id) {
        this.id = id;
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
