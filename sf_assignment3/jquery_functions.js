$(document).ready(function() 
{
	$('#close').click(function()
	{
		$('#instructions').hide(500);
	});
});





function random_generaton(){
	var arr = []
	while(arr.length < 8){
    	var randomnumber = Math.ceil(Math.random()*100)
    	if(arr.indexOf(randomnumber) > -1) continue;
    	arr[arr.length] = String.fromCharCode(64 + randomnumber);
	}
	document.write(arr);
	return arr;
}