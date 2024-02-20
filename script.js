//your JS code here. If required.
function getLevel(level){
  	 var ele = document.getElementById(level);
	var count = 0;
     while(ele!=null){
		 count++;
		 ele=ele.parentElement;
	 }
	return count;
}
var domL=getLevel('level');
alert("The level of the element is: " + domL);