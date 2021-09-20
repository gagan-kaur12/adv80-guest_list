console.log("guest_list");
 var guest_list = [];
 console.log(guest_list);

function submit(){

var GuestName = document.getElementById("name1").value;
guest_list.push(GuestName);
console.log(GuestName);
htmldata=""
var  length_of_guest_list = guest_list.length;
console.log( length_of_guest_list);
for(var i =0; i<length_of_guest_list;i++){
    htmldata=htmldata+ guest_list[i] + '<br>'
   
    document.getElementById("display_list").innerHTML =htmldata; 
}
}
function show(){

   
    htmldata=""
    var  length_of_guest_list = guest_list.length;
    console.log( length_of_guest_list);
    for(var i =0; i<length_of_guest_list;i++){
        htmldata=htmldata+ guest_list[i] + '<br>'
       
        document.getElementById("show_List").innerHTML =htmldata;
       
    }
    }

    function sort(){
        guest_list.sort();
   
        var i = guest_list.join("<br>")
           
            document.getElementById("sorted_List").innerHTML =i.toString();
           
        }
        
        function search(){
         var s = document.getElementById("s1").value;
         var found = 0;
         var j;
           for(var j =0;j< guest_list.length;j++)
               {

                if(s === guest_list[j]){
                    found =found +1;
                }
                document.getElementById("search").innerHTML="name found "+found+" time/s";
                console.log("found name "+found+" time/s");
               
            }
        }
        
    