import axios from 'axios'

const HotelBook= "http://localhost:1940/"

class HotelService{

    saveCust(CustDetails){
        return axios.post(HotelBook + "add", CustDetails);
    }
    getCust(){
        return axios.get(HotelBook + "show");
    }
    updateCust(id, details){
        return axios.put(HotelBook + `update/${id}`, details);
    }
    
    getCustById(id){
        return axios.get(HotelBook + "show/" + id);
    }
}

export default new HotelService();