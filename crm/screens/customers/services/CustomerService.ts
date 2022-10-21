import config from "../../../config";
import axios from "axios";
const url = config.api + 'customers/';


export class CustomerService {

    static async getAll(): Promise<Customer[]> {
       const response = await axios.get(url);
       return response.data;
    }

    static async getOne(id: number): Promise<Customer> {
        const response = await axios.get(url + id);
        return response.data;
    }

    static async deleteOne(id: number) {
        const response = await axios.delete(url + id);
        return response.data;
    }

    static async postOne(customer: Omit<Customer, 'id'>): Promise<Customer> {
        const response = await axios.post(url, customer);
        return response.data;
    }

    static async putOne(customer: Customer): Promise<Customer> {
        const response = await axios.put(url + customer.id, customer);
        return response.data;
    }
}