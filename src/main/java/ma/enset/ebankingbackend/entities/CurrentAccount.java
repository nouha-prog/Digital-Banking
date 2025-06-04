package ma.enset.ebankingbackend.entities;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@DiscriminatorValue("CA")
@Data @NoArgsConstructor @AllArgsConstructor
<<<<<<< HEAD
public class CurrentAccount extends BankAccount{
    private double overDraft;
}

=======
public class CurrentAccount extends BankAccount {
    private double overDraft;
}
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
