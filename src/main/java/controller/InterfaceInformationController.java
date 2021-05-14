package controller;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import model.InterfaceInformation;
import service.InterfaceInformationService;

@CrossOrigin
@RestController
public class InterfaceInformationController {

	@Autowired
	InterfaceInformationService ifs;

	@RequestMapping("/info")
	public ArrayList<InterfaceInformation> getAll() {
		return ifs.getAll();
	}
}
