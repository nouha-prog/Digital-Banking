package ma.enset.ebankingbackend.dto;
<<<<<<< HEAD
import lombok.Data;

import java.util.List;

=======

import lombok.Data;

import java.util.List;
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
@Data
public class AccountHistoryDTO {
    private String accountId;
    private double balance;
    private int currentPage;
    private int totalPages;
    private int pageSize;
    private List<AccountOperationDTO> accountOperationDTOS;
}