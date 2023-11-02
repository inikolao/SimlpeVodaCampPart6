package iniko.voda.backendapi.Services.DB;

import iniko.voda.backendapi.DTO.MFile;
import iniko.voda.backendapi.Repos.MfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MfileService {
    @Autowired
    MfileRepo mfileRepo;

    public void CreateMfile(MFile file)
    {
        mfileRepo.save(file);
    }
    public List<MFile> GetAllMfiles()
    {
        return mfileRepo.findAll();
    }
}