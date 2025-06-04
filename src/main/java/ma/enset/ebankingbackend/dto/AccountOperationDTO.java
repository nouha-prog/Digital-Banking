package ma.enset.ebankingbackend.dto;

<<<<<<< HEAD
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ma.enset.ebankingbackend.entities.BankAccount;
=======
import lombok.Data;
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
import ma.enset.ebankingbackend.enums.OperationType;

import java.util.Date;

@Data
public class AccountOperationDTO {
    private Long id;
    private Date operationDate;
    private double amount;
<<<<<<< HEAD
    private String description;
    private OperationType type;
=======
    private OperationType type;
    private String description;
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
}