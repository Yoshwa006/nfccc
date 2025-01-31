package com.example.nfc_rental.service;

import com.example.nfc_rental.entity.Item;
import com.example.nfc_rental.repo.ItemRepo;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ItemService {

    ItemRepo repo;
    Item item;

    public ItemService(ItemRepo repo){
        this.repo =repo;
    }
    public Item RegisterItem(Item item){
        return repo.save(item);
    }


    public Optional<Item> GetDetails(long id){
        return repo.findById(id);
    }


    public Item modifyDetails(Long itemId, Item updatedItem) {
        Optional<Item> existingItemOptional = repo.findById(itemId);

        if (existingItemOptional.isPresent()) {
            Item existingItem = existingItemOptional.get();

            if (existingItem.getPassword().equals(updatedItem.getPassword())) {
            
                existingItem.setItemName(updatedItem.getItemName());
                existingItem.setPrice(updatedItem.getPrice());
                existingItem.setDescription(updatedItem.getDescription());
                existingItem.setOwnerName(updatedItem.getOwnerName());
                existingItem.setPhone(updatedItem.getPhone());
                existingItem.setAvailable(updatedItem.isAvailable());

                // Save updated item
                return repo.save(existingItem);
            } else {
                throw new IllegalArgumentException("Invalid password. Modification not allowed.");
            }
        } else {
            throw new IllegalArgumentException("Item not found.");
        }
    }
}