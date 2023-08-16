import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'bearer P9kPbunTAjzHipg3pDKkJpUDCGM5TaXwqbp6DJ-yFjT2f1d-QdDw7v5ozdoLvURJYQLy6pehRFSegzuBN6com8bHHQvuUUgtgVxl22xucgwpRrXSvZ67PVXgaI_bZHYx'
    }
})