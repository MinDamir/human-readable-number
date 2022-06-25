module.exports = function toReadable (number) {
    if(number==0){
        return "zero"
        return
    }
    var ed_num=["","one","two","three","four","five","six","seven","eight","nine"]
    var co="";
  if(number>99) {
  co=ed_num[Math.floor(number/100)]+" hundred"
  }
  number=number+"";
  if(number.length>1&&number.charAt(number.length-2)==="1"){
  var numb =number.charAt(number.length-2)+number.charAt(number.length-1)
    switch (numb){
            case "10":
                numb="ten"
            break;        
            case "11":
                numb= "eleven"
            break;
            case "12":
                numb= "twelve"
            break; 
            case "13":
                numb= "thirteen"
            break; 
            case "14":
                numb="fourteen"
            break; 
            case "15":
                numb= "fifteen"
            break; 
            case "16":
            numb="sixteen"
            break; 
            case "17":
                numb= "seventeen"
            break; 
            case "18":
                numb= "eighteen"
            break; 
            case "19":
            numb= "nineteen"
            break; 
    }
    if(number.length==3){
        return co+" "+numb;
        return
    }
    return co+numb;
    return
}
  var ed=ed_num[((number.charAt(number.length-1))+1-1)/10]
  if(number.length==1){
    return ed;
    return
  }
     var de= number.charAt(number.length-2);
     switch (de)
  {
    case "9":
        de="ninety"
        break;
        case "8":
        de="eighty"
        break;
        case "7":
        de="seventy"
        break;
        case "6":
        de="sixty"
        break;
        case "5":
        de="fifty"
        break;
        case "4":
        de="forty"
        break;
        case "3":
        de="thirty"
        break;
        case "2":
        de="twenty"
        break;
        case "0":
        de=''
        break;
}
if(number.charAt(number.lenght-1)==="0"){
   return (co+de).trim();
   return;
}
if(de==''){
    return (co+" "+ed).trim()
    return;
 }
return (co+" "+de+" "+ed).trim();
}
