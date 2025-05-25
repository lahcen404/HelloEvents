package com.helloevents.helloevents.controller;

import com.helloevents.helloevents.model.Event;
import com.helloevents.helloevents.service.EventService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/events")
public class EventController {
    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @PostMapping
    public Event createEvent( @RequestBody Event event){
        return eventService.createEvent(event);
    }

    @PutMapping("/{id}")
    public Event updateEvent(@PathVariable Long id, @RequestBody Event event){
       return eventService.updateevent(id,event);
    }

    @DeleteMapping("{id}")
    public void deleteEvent(@PathVariable Long id){
         eventService.deleteEvent(id);
    }

    @GetMapping
    public List<Event> getAllEvents(){
        return eventService.getAllEvents();
    }

    @GetMapping("{id}")
    public Event getEventById(@PathVariable Long id){
        return eventService.getEventById(id).orElseThrow();
    }
}
