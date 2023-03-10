package com.example.demo.Entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="CustDetails")
public class HotelBook {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "CustomerName")
	private String name;
	
	@Column(name = "CustomerAge")
	private int age;
	
	@Column(name="DateOfArrival")
	private String doa;
	
	@Column(name="DateOfDeparture")
	private String dod;
	
	@Column(name = "NoofPeople")
	private int count; 
	
	@Column(name = "TypeofSuite")
	private String Type;
	
	@Column(name="TotalCost")
	private int cost;
	
	@Column(name = "Email")
	private String mailID;
	
	@Column(name="Payment")
	private String MOP;
	
	
	public HotelBook() {}


	public HotelBook(Long id, String name, int age, String doa, String dod, int count, String Type, int cost, String mailID,
			String MOP) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.doa = doa;
		this.dod = dod;
		this.count = count;
		this.Type = Type;
		this.cost = cost;
		this.mailID = mailID;
		this.MOP = MOP;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public int getAge() {
		return age;
	}


	public void setAge(int age) {
		this.age = age;
	}


	public String getDoa() {
		return doa;
	}


	public void setDoa(String doa) {
		this.doa = doa;
	}


	public String getDod() {
		return dod;
	}


	public void setDod(String dod) {
		this.dod = dod;
	}


	public int getCount() {
		return count;
	}


	public void setCount(int count) {
		this.count = count;
	}


	public String getType() {
		return Type;
	}


	public void setType(String type) {
		this.Type = type;
	}


	public int getCost() {
		return cost;
	}


	public void setCost(int cost) {
		this.cost = cost;
	}


	public String getMailID() {
		return mailID;
	}


	public void setMailID(String mailID) {
		this.mailID = mailID;
	}


	public String getMOP() {
		return MOP;
	}


	public void setMOP(String MOP) {
		this.MOP = MOP;
	}
	
}
	
