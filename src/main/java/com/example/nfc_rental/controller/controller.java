package com.example.nfc_rental.controller;


import com.example.nfc_rental.entity.Item;
import com.example.nfc_rental.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/items")
public class controller {


    ItemService service;

    @Autowired
    controller(ItemService service){
        this.service =service;
    }

    @GetMapping("/{id}")
    public Optional<Item> GetData(@PathVariable long id){
        return service.GetDetails(id);
    }

    @PostMapping
    public String RegisterItem(@RequestBody Item item){
        service.RegisterItem(item);
        return "https://localhost:8080/api/items/"+item.getId();
    }

    @PutMapping("/{itemId}/modify")
    public ResponseEntity<?> modifyItemDetails(@PathVariable Long itemId, @RequestBody Item updatedItem) {
        try {
            Item modifiedItem = service.modifyDetails(itemId, updatedItem);
            return ResponseEntity.ok(modifiedItem);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }


}