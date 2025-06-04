package ma.enset.ebankingbackend.entities;

import jakarta.persistence.*;
<<<<<<< HEAD
=======
import jdk.jfr.Enabled;
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ma.enset.ebankingbackend.enums.AccountStatus;

<<<<<<< HEAD
=======

>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
import java.util.Date;
import java.util.List;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
<<<<<<< HEAD
@DiscriminatorColumn(name = "TYPE", length = 4)
=======
@DiscriminatorColumn(name = "TYPE",length = 4)
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
@Data @NoArgsConstructor @AllArgsConstructor
public abstract class BankAccount {
        @Id
        private String id;
        private double balance;
        private Date createdAt;
        @Enumerated(EnumType.STRING)
        private AccountStatus status;
        @ManyToOne
        private Customer customer;
<<<<<<< HEAD
        @OneToMany(mappedBy = "bankAccount")
        private List<AccountOperation> accountOperations;
}
=======
        @OneToMany(mappedBy = "bankAccount",fetch = FetchType.LAZY)
        private List<AccountOperation> accountOperations;
}
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
