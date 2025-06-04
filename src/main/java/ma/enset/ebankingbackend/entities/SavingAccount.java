package ma.enset.ebankingbackend.entities;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@DiscriminatorValue("SA")
<<<<<<< HEAD
@Data @AllArgsConstructor @NoArgsConstructor
public class SavingAccount extends BankAccount{
=======
@Data @NoArgsConstructor @AllArgsConstructor
public class SavingAccount extends BankAccount {
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
    private double interestRate;
}