package com.helloevents.helloevents.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Event {
    @Id
    private Long id;
    private String title;
    private String description;
    private LocalDate date;
    private String location;
    private String category;
    private int availableSeats;

@OneToMany(mappedBy = "event" , cascade = CascadeType.ALL)
    private List<Booking> bookings = new ArrayList<>();


}
