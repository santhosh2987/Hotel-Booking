package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.HotelBook;
import com.example.demo.HService.HotelService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HotelController
{
	@Autowired
	private HotelService Hotserv;
	
	@GetMapping("/show")
	public  List<HotelBook> showGuests(){
		return Hotserv.getGuest();
	}  
	
	@GetMapping("/show/{id}")
	public Optional<HotelBook> findById(@PathVariable Long id) {
		return Hotserv.findById(id);
	}
	
	@PostMapping("/add")
	public HotelBook addGuest(@RequestBody HotelBook obj) {
		return Hotserv.addGuest(obj);
	}	
	
	@PutMapping("/update/{id}")
	public HotelBook update(@PathVariable Long id,@RequestBody HotelBook hb){
		return Hotserv.update(id,hb);
	}
	
	@DeleteMapping("/delete/{id}")
	public String removeGuest(@PathVariable Long id) {
		Hotserv.deleteById(id);
		return "Successfully Deleted!!";
	}
	@GetMapping("/display")
	public List<HotelBook> show(){
		return Hotserv.showValues();
	}  
	@GetMapping("/displayit")
	public List<HotelBook> sort(){
		return Hotserv.sort();
	}
}