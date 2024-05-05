import { Customer } from "../entity/Customer";
import { CustomerRepository } from "../repository/CustomerRepository";

export default class CustomerService {

    private customerRepository = CustomerRepository;

    async createCustomer(customerName: string, customerPhone: string): Promise<Customer> {
        let customer = new Customer();
        customer.customerName = customerName;
        customer.customerPhone = customerPhone;
        return this.customerRepository.save(customer);
    }
}
