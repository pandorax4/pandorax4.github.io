function setCookie(c_name,value,expiredays)
{
	var exdate=new Date()
	exdate.setDate(exdate.getDate()+expiredays)
	document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}


function getCookie(c_name)
{
	if (document.cookie.length>0)
	{
		c_start=document.cookie.indexOf(c_name + "=")
		if (c_start!=-1)
		{ 
			c_start=c_start + c_name.length+1 
			c_end=document.cookie.indexOf(";",c_start)
			if (c_end==-1) c_end=document.cookie.length
			return unescape(document.cookie.substring(c_start,c_end))
		} 
	}
	return ""
}


function checkCookie()
{
	username=getCookie('username')
	if (username!=null && username!="")
	{
		alert('Welcome again '+username+'!')
	}
	else 
	{
		username=prompt('Please enter your name:',"")
		if (username!=null && username!="")
		{
			setCookie('username',username,365)
		}
	}
}

function getIP(){

}

function getLocationByIP(ip){

}

function getLanguage(){
	var cookieName = "GeekCashTreasureGame";
	var lang = getCookie(cookieName);
	if(lang == ""){
		lang = navigator.language || navigator.userLanguage;
		if(lang.substr(0,3) == 'zh-') {
			// Load Chinese
			//window.location.href='./ch/index.html';
			lang="ch";
		}
		else{
			// Load English
			//window.location.href='./en/index.html';
			lang="en";
		}
		setCookie(cookieName, lang, 365);
	}

	return lang;
}

function isChinese(){
	var lang = getLanguage();
	return lang == "ch";
}

function isEnglish(){
	var lang = getLanguage();
	return lang == "en";
}

function setChinese(){
	var cookieName = "GeekCashTreasureGame";
	var lang = "ch";
	setCookie(cookieName, lang, 365);
}

function setEnglish(){
	var cookieName = "GeekCashTreasureGame";
	var lang = "en";
	setCookie(cookieName, lang, 365);
}



function OnPageLoad(){
	alert("On Page Load");
	
}