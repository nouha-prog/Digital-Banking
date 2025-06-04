package ma.enset.ebankingbackend.repositories;
<<<<<<< HEAD

=======
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
import ma.enset.ebankingbackend.entities.AccountOperation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

<<<<<<< HEAD
public interface AccountOperationRepository extends JpaRepository<AccountOperation, Long> {
=======
public interface AccountOperationRepository extends JpaRepository<AccountOperation,Long> {
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
    List<AccountOperation> findByBankAccountId(String accountId);
    Page<AccountOperation> findByBankAccountIdOrderByOperationDateDesc(String accountId, Pageable pageable);
}