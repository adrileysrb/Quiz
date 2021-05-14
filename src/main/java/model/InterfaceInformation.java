package model;

import javax.xml.bind.annotation.XmlRootElement;


@XmlRootElement
public class InterfaceInformation {
	
	public InterfaceInformation() {
		super();
		// TODO Auto-generated constructor stub
	}
	public InterfaceInformation(String start, String restart, String victory, String lose, String again) {
		super();
		this.start = start;
		this.restart = restart;
		this.victory = victory;
		this.lose = lose;
		this.again = again;
	}
	String start;
	String restart;
	String victory;
	String lose;
	String again;
	public String getStart() {
		return start;
	}
	public void setStart(String start) {
		this.start = start;
	}
	public String getRestart() {
		return restart;
	}
	public void setRestart(String restart) {
		this.restart = restart;
	}
	public String getVictory() {
		return victory;
	}
	public void setVictory(String victory) {
		this.victory = victory;
	}
	public String getLose() {
		return lose;
	}
	public void setLose(String lose) {
		this.lose = lose;
	}
	public String getAgain() {
		return again;
	}
	public void setAgain(String again) {
		this.again = again;
	}
	
}
