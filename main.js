var images = [
  "https://i.postimg.cc/MGn9GJXw/family.jpg",
   "https://i.postimg.cc/wjMnFtMX/father.jpg" ,
   "https://i.postimg.cc/bw5W5zSK/mother.jpg" ,
    "https://i.postimg.cc/5ymDKL83/bro.jpg",
     "https://i.postimg.cc/JnL6wtrd/sister.jpg"
    ];

var names = [
  "Fmaily Book",
  "Dr. Simran Singh",
  "Dr. Grace Budhiraja",
   "Abhiraj Singh",
    "Suhavi Kaur"
  ];

var i = 0;
function update(){
    document.getElementById("family_member_image").src = images[i];
    document.getElementById("family_member_name").innerHTML = names[i];
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }  
}
