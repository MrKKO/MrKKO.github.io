 
	var p1=0, p2=0, p3=0, p4=0, p5=0, p6=0, p7=0, p8=0, p9=0, tura=1, tryb=0,zacz=0;

	function gdziewpisz(x){if (tura<11){switch (x){case 1:if(p1==0){p1 = no();tura++;wpisywanie("pole1",co());}break;
	case 2:if(p2==0){p2 = no();tura++;wpisywanie("pole2",co());}break;
	case 3:if(p3==0){p3 = no();tura++;wpisywanie("pole3",co());}break;
	case 4:if(p4==0){p4 = no();tura++;wpisywanie("pole4",co());}break;
	case 5:if(p5==0){p5 = no();tura++;wpisywanie("pole5",co());}break;
	case 6:if(p6==0){p6 = no();tura++;wpisywanie("pole6",co());}break;
	case 7:if(p7==0){p7 = no();tura++;wpisywanie("pole7",co());}break;
	case 8:if(p8==0){p8 = no();tura++;wpisywanie("pole8",co());}break;
	case 9:if(p9==0){p9 = no();tura++;wpisywanie("pole9",co());}break;
														   default:document.getElementById("pole9").innerHTML="err";}
	ktowyg();
	if(tryb==1 && tura%2==0 && zacz==0){komp();}
	if(tryb==1 && tura%2==1 && zacz==1){komp();}}}

	function co(){if(tura%2==0){return "X";}else{return "O";}}
	function no(){if(tura%2==0){return 1;}else{return 2;}}

	function wpisywanie(x,y){document.getElementById(x).innerHTML = y;}
	function zmienstyle(x,y){document.getElementById(x).style = y;}

	function komp(){var rand;good=0;
	if(tura<10){while(good==0){good == 0;rand=Math.floor(Math.random()*9+1);
							if(rand>=10){good = 0;}
	else {switch (rand){
								  case 1:if(p1==0){gdziewpisz(1);good=1;ktowyg();}break;
	case 2:if(p2==0){gdziewpisz(2);good=1;ktowyg();}break;
	case 3:if(p3==0){gdziewpisz(3);good=1;ktowyg();}break;
	case 4:if(p4==0){gdziewpisz(4);good=1;ktowyg();}break;
	case 5:if(p5==0){gdziewpisz(5);good=1;ktowyg();}break;
	case 6:if(p6==0){gdziewpisz(6);good=1;ktowyg();}break;
	case 7:if(p7==0){gdziewpisz(7);good=1;ktowyg();}break;
	case 8:if(p8==0){gdziewpisz(8);good=1;ktowyg();}break;
	case 9:if(p9==0){gdziewpisz(9);good=1;ktowyg();}break;}}}}}

function pvp() {
	if (tryb == 0) {
		wpisywanie("komp", "Zmie&#324 na PvP");
	tryb=1;zacz=0;reset();
	wpisywanie("kto","Ty zaczynasz");
	if(zacz==1 && tura%2==1){komp();}}
	else if (tryb == 1) {
		wpisywanie("komp", "Zmie&#324 na PvE");
	tryb=0;reset();
										  wpisywanie("kto","");}}

	function zaczyna(){if(tryb==1){if(zacz==0){wpisywanie("kto", "PC zaczynasz");
	zacz=1;reset();
	if(zacz==1 && tura%2==1){komp();}}
	else if (zacz==1){wpisywanie("kto", "Ty zaczynasz");
															 zacz=0;reset();}}}

	function reset(){wpisywanie("pole1", "");p1=0;zmienstyle("pole1","background-color:#bbbdb7;");tura=1;
	wpisywanie("pole2","");p2=0;zmienstyle("pole2","background-color:#bbbdb7;");
	wpisywanie("pole3","");p3=0;zmienstyle("pole3","background-color:#bbbdb7;");
	wpisywanie("pole4","");p4=0;zmienstyle("pole4","background-color:#bbbdb7;");
	wpisywanie("pole5","");p5=0;zmienstyle("pole5","background-color:#bbbdb7;");
	wpisywanie("pole6","");p6=0;zmienstyle("pole6","background-color:#bbbdb7;");
	wpisywanie("pole7","");p7=0;zmienstyle("pole7","background-color:#bbbdb7;");
	wpisywanie("pole8","");p8=0;zmienstyle("pole8","background-color:#bbbdb7;");
	wpisywanie("pole9","");p9=0;zmienstyle("pole9","background-color:#bbbdb7;");
	wpisywanie("wynik","");if(zacz==1 && tura%2==1 && tryb==1){komp();}}

	function wynik(z){if(tryb==0){
										  if(z=="X"){wpisywanie("wynik", "Wygra&#322 X !!!");}
	else if(z=="O"){wpisywanie("wynik", "Wygra&#322o O !!!");}
										 }
	else if(tryb==1){if(zacz==1){if(z=="X"){wpisywanie("wynik", "Przegra&#322eœ!!!");}
	else if(z=="O"){wpisywanie("wynik", "Wygra&#322eœ!!!");}
														 }
	else {if(z=="X"){wpisywanie("wynik", "Wygra&#322eœ!!!");}
	else if(z=="O"){wpisywanie("wynik", "Przegra&#322eœ!!!");}
													}
											}
							}

	function ktowyg(){if(tura<11){
							  if(p1==p2 && p2==p3 && p1!=0){var z=document.getElementById("pole1").innerHTML;tura=11;wynik(z);
	zmienstyle("pole1","background-color:green;");
	zmienstyle("pole2","background-color:green;");
							  zmienstyle("pole3","background-color:green;");}
	if(p4==p5 && p5==p6 && p4!=0){var z=document.getElementById("pole4").innerHTML;tura=11;wynik(z);
	zmienstyle("pole4","background-color:green;");
	zmienstyle("pole5","background-color:green;");
							  zmienstyle("pole6","background-color:green;");}
	if(p7==p8 && p8==p9 && p7!=0){var z=document.getElementById("pole7").innerHTML;tura=11;wynik(z);
	zmienstyle("pole7","background-color:green;");
	zmienstyle("pole8","background-color:green;");
							  zmienstyle("pole9","background-color:green;");}
	if(p1==p4 && p4==p7 && p1!=0){var z=document.getElementById("pole1").innerHTML;tura=11;wynik(z);
	zmienstyle("pole1","background-color:green;");
	zmienstyle("pole4","background-color:green;");
							  zmienstyle("pole7","background-color:green;");}
	if(p2==p5 && p5==p8 && p2!=0){var z=document.getElementById("pole2").innerHTML;tura=11;wynik(z);
	zmienstyle("pole2","background-color:green;");
	zmienstyle("pole5","background-color:green;");
							  zmienstyle("pole8","background-color:green;");}
	if(p3==p6 && p6==p9 && p3!=0){var z=document.getElementById("pole3").innerHTML;tura=11;wynik(z);
	zmienstyle("pole3","background-color:green;");
	zmienstyle("pole6","background-color:green;");
							  zmienstyle("pole9","background-color:green;");}
	if(p1==p5 && p5==p9 && p1!=0){var z=document.getElementById("pole1").innerHTML;tura=11;wynik(z);
	zmienstyle("pole1","background-color:green;");
	zmienstyle("pole5","background-color:green;");
							  zmienstyle("pole9","background-color:green;");}
	if(p3==p5 && p5==p7 && p3!=0){var z=document.getElementById("pole3").innerHTML;tura=11;wynik(z);
	zmienstyle("pole3","background-color:green;");
	zmienstyle("pole5","background-color:green;");
							  zmienstyle("pole7","background-color:green;");}
	if(tura==10){wpisywanie("wynik", "Remis");}}
							 };

