package ma.enset.ebankingbackend.web;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import ma.enset.ebankingbackend.dto.CustomerDTO;

import ma.enset.ebankingbackend.entities.Customer;
import ma.enset.ebankingbackend.exceptions.CustomerNotFoundException;
import ma.enset.ebankingbackend.services.BankAccountService;
import org.springframework.security.access.prepost.PreAuthorize;

import ma.enset.ebankingbackend.exceptions.CustomerNotFoundException;
import ma.enset.ebankingbackend.services.BankAccountService;


import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@CrossOrigin("*")
public class CustomerRestController {
    private BankAccountService bankAccountService;


    @GetMapping("/customers")
    @PreAuthorize("hasAuthority('SCOPE_USER')")
    public List<CustomerDTO> customers() {
        return bankAccountService.listCustomers();
    }

    @GetMapping("/customers/search")
    @PreAuthorize("hasAuthority('SCOPE_USER')")
    public List<CustomerDTO> searchCustomers(@RequestParam(name = "keyword", defaultValue = "") String keyword) {
        return bankAccountService.searchCustomers(keyword);
    }

    @GetMapping("/customers/{id}")
    @PreAuthorize("hasAuthority('SCOPE_USER')")
    public CustomerDTO getCustomer(@PathVariable(name = "id") Long customerId) throws CustomerNotFoundException {
        return bankAccountService.getCustomer(customerId);
    }

    @PostMapping("/customers")
    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    public CustomerDTO saveCustomer(@RequestBody CustomerDTO customerDTO){
        return bankAccountService.saveCustomer(customerDTO);
    }

    @PutMapping("/customers/{id}")
    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    public CustomerDTO updateCustomer(@PathVariable(name = "id") Long customerId, @RequestBody CustomerDTO customerDTO){
        customerDTO.setId(customerId);
        return bankAccountService.updateCustomer(customerDTO);
    }

    @DeleteMapping("/customers/{id}")
    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    public void deleteCustomer(@PathVariable(name = "id") Long customerId){
        bankAccountService.deleteCustomer(customerId);
    }
}

    @GetMapping("/customers")

    public List<CustomerDTO> getCustomers(){
        log.info("Getting all customers");
        return bankAccountService.listCustomers();
    }
    @GetMapping("/customers/{id}")

    public CustomerDTO getCustomer(@PathVariable(name = "id") Long id)throws CustomerNotFoundException {
        log.info("Getting customer with id {}", id);
        return bankAccountService.getCustomer(id);
    }
    @PostMapping("/customers")

    public CustomerDTO saveCustomer(@RequestBody CustomerDTO customerDTO){
        log.info("Saving customer");
        return bankAccountService.saveCustomer(customerDTO);
    }
    @PutMapping("/customers/{customerId}")

    public CustomerDTO updateCustomer(@PathVariable(name = "customerId") Long customerId,@RequestBody CustomerDTO customerDTO){
        log.info("Updating customer with id {}", customerId);
        customerDTO.setId(customerId);
        return bankAccountService.saveCustomer(customerDTO);
    }
    @DeleteMapping("/customers/{customerId}")

    public void deleteCustomer(@PathVariable(name = "customerId") Long customerId) {
        log.info("Deleting customer with id {}", customerId);
        bankAccountService.deleteCustomer(customerId);
    }
    @GetMapping("/customers/search")

    public List<CustomerDTO> searchCustomers(@RequestParam (name = "keyword", defaultValue = "") String keyword){
        return bankAccountService.searchCustomers("%" + keyword + "%");
    }
}

