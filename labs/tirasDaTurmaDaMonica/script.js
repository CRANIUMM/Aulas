/**
 * Exercício de JavaScript + jQuery
 * Montar um objeto com os números das tiras da turma da mónica
 * URL: http://www.monica.com.br/comics/tirinhas.htm
 */

//Verificamos a ordem dos personagens
var personagens = 'Mônica Cebolinha Cascao Magali Anjinho Bidu Chico Bento Franjinha Penadiho PapaCapim'.split(" ");

//Montamos os dados das tiras
var dadosDasTiras = $("table table") //Procura tabelas dentro de tabelas
						
						.not(":last") //Exclui a última porque não é de tiras
						
						.map(function(indicePersonagem,elementoPersonagem) { //Cria um mapeamento das tabelas = retorna um array
							
							var tiras = {}; //Cria um obbjeto
							
								tiras['personagem'] = personagens[indicePersonagem]; //Adiciona o nome do personagem
								
								tiras['tiras'] = $(elementoPersonagem) //Adiciona o array com o número de cada tira
													
													.find("a") //Para isso, localizamos os links para as páginas das tiras
													
													.map(function(indiceTira,elementoTira){ //Analisaremos o url que contém o número da tira
														
														var numero = elementoTira.href.replace(/[^\d]/g,'');  //Deixaremos só o número
														
														return numero; //E retornamos para a coleção
													})
													
													.toArray(); //Convertemos a coleção jQuery em array
								return tiras; 
						})
						
						.toArray();
//O objeto						
var tirasTurmaDaMonicaObjeto = {
	url: 'http://www.monica.com.br/comics/tirinhas/images/#.gif', 
	tiras: dadosDasTiras
}

//A string
var tirasTurmaDaMonicaString = JSON.stringify(tirasTurmaDaMonica);

/* 

	O resultado é:

	"{"url":"http://www.monica.com.br/comics/tirinhas/images/#.gif","tiras":[{"personagem":"Monica","tiras":["1","2","5","7","9","11","13","15","16","18","21","24","25","31","32","39","41","42","47","51","52","54","57","58","60","62","63","64","67","68","70","71","74","83","86","87","88","89","93","94","96","97","98","99","104","105","110","114","117","118","119","122","124","128","129","132","134","136","137","139","141","142","143","145","146","148","149","150","157","169","173","177","180","181","188","189","191","192","197","201","212","219","221","224","225","226","227","231","232","238","239","243","244","245","247","248","252","253","254","258","259","260","261","264","267","268","270","273","275","277","278","280","282","284","285","295","311","312","314","316","320","321","326","328","329","331","332","333","334","335","336","337","339","340"]},{"personagem":"Cebolinha","tiras":["1","2","4","5","7","8","9","10","11","12","13","14","15","16","21","25","27","29","31","32","33","34","35","39","40","41","43","44","45","46","47","48","51","52","54","57","58","60","61","65","66","71","74","75","76","78","79","80","83","84","85","87","88","89","91","92","94","95","96","97","98","99","100","101","102","103","104","105","110","113","114","117","118","119","122","125","126","128","129","130","132","134","136","137","138","139","140","141","144","145","146","147","148","149","159","151","153","154","155","156","157","162","163","165","166","167","168","170","171","172","174","175","178","179","181","182","184","185","186","187","196","197","201","202","205","211","212","218","219","220","222","223","225","226","227","228","229","230","231","233","234","235","236","237","238","239","240","243","245","246","249","250","252","253","254","255","257","259","260","261","263","264","267","270","273","274","275","277","278","280","281","284","285","286","289","290","291","301","303","304","305","306","310","311","312","313","314","315","316","317","319","320","322","323","324","325","326","327","329","330","331","332","333","334","335","336","337","338"]},{"personagem":"Cascao","tiras":["3","8","10","11","13","14","16","19","21","25","26","27","28","30","33","36","39","40","44","46","55","57","58","59","60","65","72","74","76","77","78","79","88","92","94","95","96","97","98","100","103","110","116","122","128","130","132","134","138","139","140","146","147","150","153","156","158","159","162","166","167","168","171","190","191","192","203","208","209","210","216","218","219","222","224","225","234","235","239","240","242","245","251","252","254","255","259","268","270","273","280","282","283","284","288","290","294","298","304","307","310","313","317","322","323","326","331","332","335"]},{"personagem":"Magali","tiras":["4","6","17","20","40","49","50","50","53","56","57","70","81","82","89","90","93","98","102","106","107","108","115","119","120","122","133","135","136","146","152","157","160","161","168","174","183","184","186","190","192","217","197","204","206","207","208","213","215","219","226","240","239","244","247","248","265","266","269","272","273","274","275","276","279","280","293","303","308","318","319","332","339","340","341"]},{"personagem":"Anjinho","tiras":["15","48","69","73","80","85","114","131","132","154","163","176","193","201","251","287","294","305","310"]},{"personagem":"Bidu","tiras":["22","23","37","38","109","111","112","127","262","292","296","299","302","343"]},{"personagem":"Chico","tiras":["121","123","194","195","241","297","300","309","344"]},{"personagem":"Bento","tiras":["27","97","109","127","197","228","262","299","304","315","317","329","335"]},{"personagem":"Franjinha","tiras":["198","199","214","342"]},{"personagem":"Penadiho","tiras":["200"]}]}"
	
*/
