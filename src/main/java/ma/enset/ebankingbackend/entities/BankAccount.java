package ma.enset.ebankingbackend.entities;

import jakarta.persistence.*;
import jdk.jfr.Enabled;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ma.enset.ebankingbackend.enums.AccountStatus;

import java.util.Date;
import java.util.List;
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
//@DiscriminatorColumn(name = "Type",length = 4)
@Data @AllArgsConstructor @NoArgsConstructor

public class BankAccount {
        @Id
        private String id;
        private double balance;
        private Date createdAt;
        private AccountStatus status;
        @ManyToOne
        private Customer customer;
        @OneToMany(mappedBy = "bankAccount")
        private List<AccountOperation> accountOperations;
}
