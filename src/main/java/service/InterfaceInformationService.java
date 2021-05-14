package service;

import java.util.ArrayList;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import model.InterfaceInformation;
@Repository
@Service
public class InterfaceInformationService {
	ArrayList<InterfaceInformation> infoArray = new ArrayList<InterfaceInformation>();
	public InterfaceInformationService() {
		InterfaceInformation info = new InterfaceInformation();
		info.setStart("Iniciar Jogo");
		info.setVictory("PARABÉNS<br>VOCÊ VENCEU");
		info.setLose("VOCÊ PERDEU");
		info.setRestart("Tentar novamente");
		info.setAgain("Recomeçar o Jogo");
		infoArray.add(info);
	}
	
	public ArrayList<InterfaceInformation> getAll() {
		return infoArray;
	}
}
