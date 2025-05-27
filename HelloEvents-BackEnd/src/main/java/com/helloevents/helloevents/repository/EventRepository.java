package com.helloevents.helloevents.repository;

import com.helloevents.helloevents.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.nio.channels.SelectableChannel;

@Repository
public interface EventRepository extends JpaRepository<Event,Long> {
    @Query("Select count(e.bookings ) from Event e where e.title=  :name " )
    long countBookingByEventName(@Param("name") String title );
}
