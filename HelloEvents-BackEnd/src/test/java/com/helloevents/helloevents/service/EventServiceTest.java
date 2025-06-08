package com.helloevents.helloevents.service;

import com.helloevents.helloevents.model.Event;
import com.helloevents.helloevents.repository.EventRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

// enable mockito annotations in this  test
@ExtendWith(MockitoExtension.class)
class EventServiceTest {

    // fake repository will not use the real database
    @Mock
    private EventRepository eventRepository;

    @InjectMocks
    private EventService eventService;
    private Event event;

    // method that runs before each test
    @BeforeEach
    void setUp() {
        event = new Event();
        event.setTitle("Tech Conference 2025");
        event.setDescription("A conference about future tech.");
        event.setLocation("Online");
        event.setDate(LocalDate.from(LocalDateTime.now().plusMonths(6)));
    }


    @Test
    void createEvent_test() {
        // deefine the behavior of our mock repository.
        when(eventRepository.save(any(Event.class))).then(invocation -> {
            Event savedEvent = invocation.getArgument(0);
            savedEvent.setId(1L);
            return savedEvent;
        });


        // call the actuaal method want to test
        Event createdEvent = eventService.createEvent(event);


        // cheeck if the result is what expect
        assertThat(createdEvent).isNotNull();
        assertThat(createdEvent.getId()).isEqualTo(1L);
        assertThat(createdEvent.getTitle()).isEqualTo("Tech Conference 2025");


        eventRepository.save(any(Event.class));
    }
}