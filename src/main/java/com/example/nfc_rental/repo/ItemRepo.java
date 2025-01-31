package com.example.nfc_rental.repo;

import com.example.nfc_rental.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepo extends JpaRepository<Item, Long> {
}