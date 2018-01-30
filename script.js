function a(a1){
    
  var b = 'abcdefghijklmnopqrstuvwxyz';
  var c = a1.toLowerCase();
  var p = "Pangram";
    
    for(var i=0;i<alphabet.length;i++){
        if(c.indexOf(alphabet.charAt(i)) == -1){
            p = "Not " + p;
            return pangram;
        }
    }
    
    return pangram;
}
document.write(a("We promptly judged antique ivory buckles for the next prize   "));