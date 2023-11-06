package iniko.voda.backendapi.Services.DB;

import iniko.voda.backendapi.DTO.Payment;
import iniko.voda.backendapi.Repos.PaymentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepo paymentRepo;

    public List<Payment> GetAllPayments()
    {
        return new ArrayList<>(paymentRepo.findAll());
    }
    public void CreatePayment(Payment payment)
    {
        paymentRepo.save(payment);
    }
}
