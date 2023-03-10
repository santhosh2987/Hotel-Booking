package com.example.demo.HService;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.example.demo.Entity.HotelBook;
import com.example.demo.MyRepo3.Repository;

@Service
public class HotelService {

	@Autowired
	private Repository repo;

	// addEmployee
	public HotelBook addGuest(HotelBook obj) {
		return repo.save(obj);
	}

	// getEmployee
	public List<HotelBook> getGuest() {
		List<HotelBook> arr = new ArrayList<>();
		arr = repo.findAll();
		return arr;
	}
	
	//deleteById  
	public void deleteById(Long id) {
		repo.deleteById(id);
	}
	
	//getById
	public Optional<HotelBook> findById(Long id) {
		Optional<HotelBook> g = repo.findById(id);
		return g;
	}
	
	//Paging
	public List<HotelBook> showValues(){
		Pageable p=PageRequest.of(0,3);
		Page<HotelBook> c=repo.findAll(p);
		return c.toList();
	}
	
	//Sorting
	public List<HotelBook> sort(){
		return repo.findAll(Sort.by(Sort.Direction.DESC,"cost"));
	}
	
	//update
	public HotelBook update(Long id,HotelBook hb) {
		HotelBook h= repo.findById(id).get();
		
		if(Objects.nonNull(h) && (!(Objects.isNull(hb.getName())))) {
			h.setName(hb.getName());
		}
		if(Objects.nonNull(h) && (hb.getAge()!=0)) {
			h.setAge(hb.getAge());
		}
		if(Objects.nonNull(h) && (!(Objects.isNull(hb.getDoa())))) {
			h.setDoa(hb.getDoa());
		}
		if(Objects.nonNull(h) && (!(Objects.isNull(hb.getDod())))) {
			h.setDod(hb.getDod());
		}
		if(Objects.nonNull(h) && (hb.getCount()!=0)) {
			h.setCount(hb.getCount());
		}
		if(Objects.nonNull(h) && (!(Objects.isNull(hb.getType())))) {
			h.setType(hb.getType());
		}
		if(Objects.nonNull(h) && (hb.getCost()!=0)) {
			h.setCost(hb.getCost());
		}
		if(Objects.nonNull(h) && (!(Objects.isNull(hb.getMailID())))) {
			h.setMailID(hb.getMailID());
		}
		if(Objects.nonNull(h) && (!(Objects.isNull(hb.getMOP())))) {
			h.setMOP(hb.getMOP());
		}
		return repo.save(h);
	}
}
