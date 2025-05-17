package ma.enset.ebankingbackend.services;

import ma.enset.ebankingbackend.entities.BankAccount;
import ma.enset.ebankingbackend.entities.Customer;

import java.util.List;

public interface BankAccountService {
    Customer saveCustomer(Customer customer);

    BankAccount saveBankAccount(double initialBalance, String type, Long customerId);

    List<Customer> listCustomers();

    BankAccount getBankAccount(String accountId);

    void debit(String accountId, double amount, String description);

    void credit(String accountId, double amount, String description);

    void transfer(String accountIdSource, String accountIdDestination, double amount);
}