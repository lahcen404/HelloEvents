package com.helloevents.helloevents.controller;

import com.helloevents.helloevents.model.Event;
import com.helloevents.helloevents.service.EventService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/events")
public class EventController {
    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping
    public Event createEvent( @RequestBody Event event){
        return eventService.createEvent(event);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/{id}")
    public Event updateEvent(@PathVariable Long id, @RequestBody Event event){
       return eventService.updateevent(id,event);
    }

    @GetMapping("/count")
    public Long getCount(Event event){
        return eventService.getCountByEventName(event);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("{id}")
    public void deleteEvent(@PathVariable Long id){
         eventService.deleteEvent(id);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN','CUSTOMER')")
    @GetMapping
    public List<Event> getAllEvents(){
        return eventService.getAllEvents();
    }

    @GetMapping("{id}")
    public Event getEventById(@PathVariable Long id){
        return eventService.getEventById(id).orElseThrow();
    }
}
