function pdfexport(){
	var ltitle=document.getElementById('tlt').innerText;
		lname=document.getElementById('Lbname').innerText;
		lage=document.getElementById('age').innerText;
		lp1=document.getElementById('p1').innerText;
		lp2=document.getElementById('p2').innerText;
		lp3=document.getElementById('p3').innerText;
		lprom=document.getElementById('promedio').innerText;

	var	lname=document.getElementById('Lbname').value;
		lage=document.getElementById('Lbage').value;
		lp1=document.getElementById('p1').value;
		lp2=document.getElementById('p2').value;
		lp3=document.getElementById('p3').value;
		lprom=document.getElementById('promedio').value;
 
 	var doc=new jsPDF();
 	doc.setFontSize(12);
 	doc.text(ltitle,20,20);
 	doc.setFontSize(12);
 	doc.text(lname +' '+ lname,10,20);
 	doc.text(age +' '+ age,10,30);
 	doc.text(p1 +' '+ p1,10,40);
 	doc.text(p2 +' '+ p2,10,50);
 	doc.text(p3 +' '+ p3,10,60);
 	doc.text(prom +' '+ prom,10,70);

}
