arr.first=function(){
	return this.array[0]
}
arr.last=function(){
	return this.array[this.array.length-1]
}
function Array(array){
	arr={}
	arr.array=array;	
	arr.first=first()
	arr.last=first()
	return arr
}