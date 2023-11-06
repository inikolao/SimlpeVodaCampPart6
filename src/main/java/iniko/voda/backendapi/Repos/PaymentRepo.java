package iniko.voda.backendapi.Repos;

import iniko.voda.backendapi.DTO.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepo extends JpaRepository<Payment,Integer> {
}
