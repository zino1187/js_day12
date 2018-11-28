//이퀄라이저 사각형 하나를 표현하는 클래스 정의
class Rect{
	//인스턴스 초기화 == 이 객체가 태어날때 어떤
	//개성을 가질지를 결정하는 메서드!! 워낙 기본이라
	//메서드명 조차 정해져 있다 = 생성자 메서드라 한다
	constructor(container, color, targetH){
		this.a=0.1;
		this.targetH=targetH;
		this.div=document.createElement("div");	
		this.div.style.width=60+"px";
		this.div.style.height=20+"px";
		this.div.style.background=color;
		container.appendChild(this.div);
	}
	move(){
		//나의값 = 현재나의값 + 비율계수*(목표값-현재나의값)
		this.div.style.height=parseFloat(this.div.style.height)+this.a*(this.targetH-parseFloat(this.div.style.height))+"px";
	}
}