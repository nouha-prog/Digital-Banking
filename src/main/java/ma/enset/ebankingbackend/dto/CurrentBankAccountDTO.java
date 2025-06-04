package ma.enset.ebankingbackend.dto;

import lombok.Data;
import ma.enset.ebankingbackend.enums.AccountStatus;

import java.util.Date;

@Data
public class CurrentBankAccountDTO extends BankAccountDTO {
    private String id;
    private double balance;
    private Date createdAt;
    private AccountStatus status;
<<<<<<< HEAD
    private String currency;
=======
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
    private CustomerDTO customerDTO;
    private double overDraft;
}