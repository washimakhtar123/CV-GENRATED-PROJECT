 function addNewWEField(){
    // console.log("addig new field")

    let newNode=document.createElement("textarea");
    newNode.classList.add("from-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder','Enter here');


    let weOb=document.getElementById("we");
    let weaddButtonOb=document.getElementById("weAddButton");

     weOb.insertBefore(newNode,weaddButtonOb);

 }

 function addNewEQField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("from-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder','Enter here');


    let eqOb=document.getElementById("eq");
    let eqAddButtonOb=document.getElementById("eqAddButton");

     eqOb.insertBefore(newNode,eqAddButtonOb);

 }
 //genertingCV

 function generateCV(){
    // console.log("genrating cv")
    let nameField=document.getElementById("nameField").value;

    let nameT=document.getElementById("nameT");
    
    nameT.innerHTML=nameField;
    //direct puting value
    document.getElementById("nameT2").innerHTML=nameField;
    //contact putting
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

     //addres putting
     document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

     //facebook link putting
    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;

      //instagram link putting
      document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;

  //linkdin link putting
  document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;

    //putting objective
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

        // work experencess
        let weOb=document.getElementsByClassName("weField");

        let str="";
        for(let e of weOb){

            str=str +`<li> ${e.value} </li>`;
            
        }
     document.getElementById("weT").innerHTML =str;


        //  Academice Qualification
        let eqOb=document.getElementsByClassName("eqField");

        let str1="";
       

        for(let e of eqOb){

            str1=str1+`<li> ${e.value} </li>`;
            
        }
        console.log("kjhg")
     document.getElementById("eqT").innerHTML=str1;

     //add photo section
     let file=document.getElementById("imgField").files[0];
     console.log(file);
     let reader=new FileReader();
     reader.readAsDataURL(file);
     console.log(reader.result);

     //set the img to temleate

     reader.onloadend=function(){
        document.getElementById("imgTemplate").src=reader.result;

     };
     document.getElementById("cv-from").style.display="none";
     document.getElementById("cv-template").style.display="block";
    

}
        //print CV

  function printCV(){
            window.print();
        }
