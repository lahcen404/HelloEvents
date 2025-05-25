package com.helloevents.helloevents.service;

import com.helloevents.helloevents.model.Event;
import com.helloevents.helloevents.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {
    private final EventRepository eventRepository;

    @Autowired
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    //create
    public Event createEvent(Event event){
        event.setId(null); //fix problem with give null to Id
        return eventRepository.save(event);
    }

    //getAll
    public List<Event> getAllEvents(){
        return eventRepository.findAll();
    }

    //getById
    public Optional<Event> getEventById(Long id){
        return eventRepository.findById(id);
    }

    //delete
    public void deleteEvent(Long id){
        eventRepository.deleteById(id);
    }


    //update
    public Event updateevent(Long id , Event eventDetails){
        Event event = eventRepository.findById(id).orElseThrow();
        event.setTitle(eventDetails.getTitle());
        event.setDescription(eventDetails.getDescription());
        event.setDate(eventDetails.getDate());
        event.setLocation(eventDetails.getLocation());
        event.setCategory(eventDetails.getCategory());
        event.setAvailableSeats(eventDetails.getAvailableSeats());
//        event.setBookings(eventDetails.getBookings());


        return eventRepository.save(event);
    }
}
