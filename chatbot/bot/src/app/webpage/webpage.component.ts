import { Component, OnInit } from '@angular/core';


import {ChatsvcService} from '../chatsvc.service';
@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.css']
})
export class WebPageComponent implements OnInit {

 
  constructor(private api:ChatsvcService) { }
  answer = [];

  data:any=[];
  ngOnInit(): void {
   
  }
  isDisplay = true;
  toggleDisplay(){
    this.isDisplay = !this.isDisplay;
  }
  massage (massage:any){
    this.data = massage.split(' ');

    if(massage == '' ){
      alert(" Plz enter the ur request")
    }

    
    this.api.getQuestion(massage).subscribe(data =>{
      this.answer=data;//task to be done
      console.log("data ",data);
      for(let i=0;i<this.data.length;i++){

        for(let j=0;j<this.answer.length;j++){
          if(this.data[i]==this.answer[j].question){
            var userinput = document.createElement('div');
            
            userinput.innerHTML= this.data[i];
            userinput.className="userentry";
            document.getElementById('massage').append(userinput)


            var answer = document.createElement('div');
            answer.innerHTML = this.answer[j].answer;
            answer.className="answer";
            document.getElementById('massage').append(answer)
           
           
          }
        }
      }
      
        })
    
      }
    

  create(){
   
    var y ="1";
    this.api.getanswer(y).subscribe
    ((data)=>{
      console.log(data);
      var question=document.createElement('div');
      question.innerHTML=data[0].answer;//
      question.className="answer";
      document.getElementById('massage').append(question);
      this.generatebutton();
    })
  }
create1(){
  var id=prompt("Enter the ID")
 this.api.getdetails(id).subscribe(data =>{
    console.log(data);
var p = document.createElement("p");
p.innerHTML = " Id : "  +  data[0].id   +   " , "+  data[0].name   +" "+"your Pizza Order is Successfully done 👍 Yummy!! Pizza will reach u soon 💁......" ;
 p.className = "view";
 
  document.getElementById("massage").append(p)
  this.ending();
})


}



generatebutton()
{
  var value=["Veg-Pizza🌮","Non-veg Pizza🌭"]
  var div=document.createElement('div');
  var div1=document.createElement('div');
  div.className="pizza";
  for(let i=0;i<value.length;i++)
  {
    var btn=document.createElement('button');
    btn.className="btn"
    btn.innerHTML=value[i];
    div1.append(btn);
    div.append(div1);
    document.getElementById('massage').append(div); 
    btn.addEventListener('click',(e:Event)=>this.operation(i));
  }
 
}

operation(i){
  if(i==0){
    this.variety1();
  }
    else
    {
      this.variety2();
    }

  }
  variety1(){
    var y ="2";
    this.api.getanswer(y).subscribe
    ((data)=>{
      console.log(data);
      var question=document.createElement('div');
      question.innerHTML= data[0].answer;//
      question.className="answer";
      document.getElementById('massage').append(question);
      this.button();
    })


  }
  variety2(){
    var y ="6";
    this.api.getanswer(y).subscribe
    ((data)=>{
      console.log(data);
      var question=document.createElement('div');
      question.innerHTML= data[0].answer;//
      question.className="answer";
      document.getElementById('massage').append(question);
      this.button1();
    })}

    button(){
    var value=["Small✌ ","Medium ✌","Large ✌"]
  var div=document.createElement('div');
  var div1=document.createElement('div');
  div.className="pizzu";
  for(let i=0;i<value.length;i++)
  {
    var btn=document.createElement('button');
    btn.className="btn1"
    btn.innerHTML=value[i];
    div1.append(btn);
    div.append(div1);
    document.getElementById('massage').append(div); 
    btn.addEventListener('click',(e:Event)=>this.size(i));
  }

  }

  button1(){
    var value=["Small✌ ","Medium ✌","Large ✌"]
  var div=document.createElement('div');
  var div1=document.createElement('div');
  div.className="pizzu";
  for(let i=0;i<value.length;i++)
  {
    var btn=document.createElement('button');
    btn.className="btn1"
    btn.innerHTML=value[i];
    div1.append(btn);
    div.append(div1);
    document.getElementById('massage').append(div); 
    btn.addEventListener('click',(e:Event)=>this.size1(i));
  }

  }

    size(i){
    if(i==0 || i==1 || i==2)
    {
      this.menu();
    }}

    
    size1(i){
      if(i==0 || i==1 || i==2)
      {
        this.menu1();
      }}

  menu(){
    var y ="3";
    this.api.getanswer(y).subscribe
    ((data)=>{
      console.log(data);
      var question=document.createElement('div');
      question.innerHTML=data[0].answer;//
      question.className="answer";
      document.getElementById('massage').append(question);
      this.picture();
    })}


    menu1(){
      
        var y ="3";
        this.api.getanswer(y).subscribe
        ((data)=>{
          console.log(data);
          var question=document.createElement('div');
          question.innerHTML=data[0].answer;//
          question.className="answer";
          document.getElementById('massage').append(question);
          this.picture1();
        })}
    

  picture(){

    var value=["👇"]
    var div=document.createElement('div');
    var div1=document.createElement('div');
    div.className="operate";
   let i=0;
      var btn=document.createElement('button');
      btn.className="btn3"
      btn.innerHTML=value[i];
      div1.append(btn);
      div.append(div1);
      document.getElementById('massage').append(div); 
      btn.addEventListener('click',(e:Event)=>this.direct(i));
    }

    picture1(){

      var value=["👇"]
      var div=document.createElement('div');
      var div1=document.createElement('div');
      div.className="operate";
     let i=0;
        var btn=document.createElement('button');
        btn.className="btn3"
        btn.innerHTML=value[i];
        div1.append(btn);
        div.append(div1);
        document.getElementById('massage').append(div); 
        btn.addEventListener('click',(e:Event)=>this.direct1(i));
      }
    
  direct(i){
    if(i==0){
     this.show();
     }
      }
      direct1(i){
        if(i==0){
         this.show1();
         }
          }

      show(){
        var value=["Sun-Dried Tomatoes Pizza","Egg and Sweet Potato Pizza","Dessert Pizza","Nutella","Fugazza"]
        var div=document.createElement('div');
    var div1=document.createElement('div');
    div.className="menu";
    for(let i=0;i<value.length;i++)
    {
      var btn=document.createElement('button');
      btn.className="btn4"
      btn.innerHTML=value[i];
      div1.append(btn);
      div.append(div1);
      document.getElementById('massage').append(div); 
      btn.addEventListener('click',(e:Event)=>this.app(i));
    }
  
      }

      
    show1(){
    var value=["Margherita Pizza","Zesty Chicken Pizza","Barbeque Chicken Pizza","Chicken Golden Delight Pizza"]
    var div=document.createElement('div');
    var div1=document.createElement('div');
    div.className="menu1";
    for(let i=0;i<value.length;i++)
    {
      var btn=document.createElement('button');
      btn.className="btn4"
      btn.innerHTML=value[i];
      div1.append(btn);
      div.append(div1);
      document.getElementById('massage').append(div); 
      btn.addEventListener('click',(e:Event)=>this.app1(i));
   }
  }



  app(i){
    if(i==0 ||i==1 ||i==2 ||i==3 ||i==4)
    var value=["Add Extra Toppings"]
var div=document.createElement('div');
var div1=document.createElement('div');
div.className="opera";
for(let i=0;i<value.length;i++){
var btn=document.createElement('button');
btn.className="butn"
btn.innerHTML=value[i];
div1.append(btn);
div.append(div1);
document.getElementById('massage').append(div); 
btn.addEventListener('click',(e:Event)=>this.topping(i));
}
  }



topping(i){
if(i==0){
var value=["Pepperoni 🗯","Onions 🗯","Extra cheese 🗯","Black olives 🗯","Sausage 🗯"]
var div=document.createElement('div');
var div1=document.createElement('div');
div.className="opera";
for(let i=0;i<value.length;i++){
var btn=document.createElement('button');
btn.className="btn10"
btn.innerHTML=value[i];
div1.append(btn);
div.append(div1);
document.getElementById('massage').append(div); 
btn.addEventListener('click',(e:Event)=>this.appl(i));
}
}
}

app1(i){
  if(i==0 || i==1 ||i==2 ||i==3 ){
  var value=["Extra Toppings"]
var div=document.createElement('div');
var div1=document.createElement('div');
div.className="opera";
for(let i=0;i<value.length;i++){
var btn=document.createElement('button');
btn.className="butn"
btn.innerHTML=value[i];
div1.append(btn);
div.append(div1);
document.getElementById('massage').append(div); 
btn.addEventListener('click',(e:Event)=>this.topping1(i));
}
}
}
topping1(i){
if(i==0 ){
var value=["Pepperoni 🗯","Onions 🗯","Extra cheese 🗯","Black olives 🗯","Sausage 🗯"]
var div=document.createElement('div');
var div1=document.createElement('div');
div.className="opera";
for(let i=0;i<value.length;i++){
var btn=document.createElement('button');
btn.className="btn10"
btn.innerHTML=value[i];
div1.append(btn);
div.append(div1);
document.getElementById('massage').append(div); 
btn.addEventListener('click',(e:Event)=>this.appl1(i));
}
}
}

      appl(i){
        if(i==0){
          this.image1();
        }
        else if(i==1){
          this.image2();

        }else if(i==2){
          this.image3();
        }else if(i==3){
          this.image4();
        }else{
         this.image5();
        }

      }
      appl1(i){
        if(i==0){
          this.image6();
        }
        else if(i==1){
          this.image7();

        }else if(i==2){
          this.image8();
        }else {
          this.image9();
        
        }}

      image1(){
      var y ="1";
        this.api.getmenu(y).subscribe
        ((data)=>{
          console.log(data);
          var question=document.createElement('img');
          question.src="./assets/tomoto.png";
        
          question.className="img";
          document.getElementById('massage').append(question);
          this.pic0();
        })
      }
      pic0(){
        var y ="1";
             this.api.getmenu(y).subscribe
             ((data)=>{
               console.log(data);
               var question=document.createElement('div');
               question.innerHTML=data[0].pizzaName;
             
               question.className="answer";
               document.getElementById('massage').append(question);
               this.pic1();
             })
        }

   pic1(){
   var y ="1";
        this.api.getmenu(y).subscribe
        ((data)=>{
          console.log(data);
          var question=document.createElement('div');
          question.innerHTML=data[0].Description;
        
          question.className="answer";
          document.getElementById('massage').append(question);
          this.flow();
        })
   }

   flow(){
    var y ="1";
    this.api.getmenu(y).subscribe
    ((data)=>{
      console.log(data);
      var question=document.createElement('div');
      question.innerHTML=data[0].cost;
    
      question.className="answer";
      document.getElementById('massage').append(question);
      this.flowing();
    })
    

  }
      
      image2(){
        var y ="2";
        this.api.getmenu(y).subscribe
        ((data)=>{
          console.log(data);
          var question=document.createElement('img');
          question.src="./assets/egg.png";
        
          question.className="img";
          document.getElementById('massage').append(question);
          this.pic20();
        })

      }
      pic20(){
        var y ="2";
             this.api.getmenu(y).subscribe
             ((data)=>{
               console.log(data);
               var question=document.createElement('div');
               question.innerHTML=data[0].pizzaName;
             
               question.className="answer";
               document.getElementById('massage').append(question);
               this.pic2();
             })
        }
      pic2(){
       
          var y ="2";
               this.api.getmenu(y).subscribe
               ((data)=>{
                 console.log(data);
                 var question=document.createElement('div');
                 question.innerHTML=data[0].Description;
               
                 question.className="answer";
                 document.getElementById('massage').append(question);
                 this.flow1();
               })
          }

      flow1(){
        var y ="2";
    this.api.getmenu(y).subscribe
    ((data)=>{
      console.log(data);
      var question=document.createElement('div');
      question.innerHTML=data[0].cost;
    
      question.className="answer";
      document.getElementById('massage').append(question);
      this.flowing();
    })
    

      }
      image3(){
        var y ="3";
        this.api.getmenu(y).subscribe
        ((data)=>{
          console.log(data);
          var question=document.createElement('img');
          question.src="./assets/dessert.png";
        
          question.className="img";
          document.getElementById('massage').append(question);
          this.pic30();
        })

      }
      pic30(){
        var y ="3";
             this.api.getmenu(y).subscribe
             ((data)=>{
               console.log(data);
               var question=document.createElement('div');
               question.innerHTML=data[0].pizzaName;
             
               question.className="answer";
               document.getElementById('massage').append(question);
               this.pic3();
             })
        }
      pic3(){
        var y ="3";
               this.api.getmenu(y).subscribe
               ((data)=>{
                 console.log(data);
                 var question=document.createElement('div');
                 question.innerHTML=data[0].Description;
               
                 question.className="answer";
                 document.getElementById('massage').append(question);
                 this.flow2();
               })}

               flow2(){
                var y ="3";
                this.api.getmenu(y).subscribe
                ((data)=>{
                  console.log(data);
                  var question=document.createElement('div');
                  question.innerHTML=data[0].cost;
                
                  question.className="answer";
                  document.getElementById('massage').append(question);
                  this.flowing();
                })

               }
      image4(){
        var y ="4";
        this.api.getmenu(y).subscribe
        ((data)=>{
          console.log(data);
          var question=document.createElement('img');
          question.src="./assets/nutella.png";
        
          question.className="img";
          document.getElementById('massage').append(question);
          this.pic40();
        })

      }
      pic40(){
        var y ="4";
             this.api.getmenu(y).subscribe
             ((data)=>{
               console.log(data);
               var question=document.createElement('div');
               question.innerHTML=data[0].pizzaName;
             
               question.className="answer";
               document.getElementById('massage').append(question);
               this.pic4();
             })
        }
      pic4(){
        var y ="4";
        this.api.getmenu(y).subscribe
        ((data)=>{
          console.log(data);
          var question=document.createElement('div');
          question.innerHTML=data[0].Description;
        
          question.className="answer";
          document.getElementById('massage').append(question);
          this.flow3();
        })}
       
        flow3(){
          var y ="4";
          this.api.getmenu(y).subscribe
          ((data)=>{
            console.log(data);
            var question=document.createElement('div');
            question.innerHTML=data[0].cost;
          
            question.className="answer";
            document.getElementById('massage').append(question);
            this.flowing();
          }) }

      
      image5(){
        var y ="5";
        this.api.getmenu(y).subscribe
        ((data)=>{
          console.log(data);
          var question=document.createElement('img');
          question.src="./assets/fuga.png";
        
          question.className="img";
          document.getElementById('massage').append(question);
          this.pic50();
        })}
        pic50(){
          var y ="5";
               this.api.getmenu(y).subscribe
               ((data)=>{
                 console.log(data);
                 var question=document.createElement('div');
                 question.innerHTML=data[0].pizzaName;
               
                 question.className="answer";
                 document.getElementById('massage').append(question);
                 this.pic5();
               })
          }
        pic5(){
          var y ="5";
          this.api.getmenu(y).subscribe
          ((data)=>{
            console.log(data);
            var question=document.createElement('div');
            question.innerHTML=data[0].Description;
          
            question.className="answer";
            document.getElementById('massage').append(question);
            this.flow4();
          })}
          flow4(){
            var y ="5";
            this.api.getmenu(y).subscribe
            ((data)=>{
              console.log(data);
              var question=document.createElement('div');
              question.innerHTML=data[0].cost;
            
              question.className="answer";
              document.getElementById('massage').append(question);
              this.flowing();

          })}

          image6(){
            var y ="6";
              this.api.getmenu(y).subscribe
              ((data)=>{
                console.log(data);
                var question=document.createElement('img');
                question.src="./assets/margherita.png";
              
                question.className="img";
                document.getElementById('massage').append(question);
                this.pic60();
              })
            }


            pic60(){
              var y ="6";
                   this.api.getmenu(y).subscribe
                   ((data)=>{
                     console.log(data);
                     var question=document.createElement('div');
                     question.innerHTML=data[0].pizzaName;
                   
                     question.className="answer";
                     document.getElementById('massage').append(question);
                     this.pic6();
                   })
              }
         pic6(){
         var y ="6";
              this.api.getmenu(y).subscribe
              ((data)=>{
                console.log(data);
                var question=document.createElement('div');
                question.innerHTML=data[0].Description;
              
                question.className="answer";
                document.getElementById('massage').append(question);
                this.flow6();
              })
         }
      
         flow6(){
          var y ="6";
          this.api.getmenu(y).subscribe
          ((data)=>{
            console.log(data);
            var question=document.createElement('div');
            question.innerHTML=data[0].cost;
          
            question.className="answer";
            document.getElementById('massage').append(question);
            this.flowing();
          }) }
            
            image7(){
              var y ="7";
              this.api.getmenu(y).subscribe
              ((data)=>{
                console.log(data);
                var question=document.createElement('img');
                question.src="./assets/Zesty.png";
              
                question.className="img";
                document.getElementById('massage').append(question);
                this.pic70();
              })
      
            }
            pic70(){
              var y ="7";
                   this.api.getmenu(y).subscribe
                   ((data)=>{
                     console.log(data);
                     var question=document.createElement('div');
                     question.innerHTML=data[0].pizzaName;
                   
                     question.className="answer";
                     document.getElementById('massage').append(question);
                     this.pic7();
                   })
              }
            pic7(){
             
                var y ="7";
                     this.api.getmenu(y).subscribe
                     ((data)=>{
                       console.log(data);
                       var question=document.createElement('div');
                       question.innerHTML=data[0].Description;
                     
                       question.className="answer";
                       document.getElementById('massage').append(question);
                       this.flow7();
                     })
                }
      
            flow7(){
              var y ="7";
          this.api.getmenu(y).subscribe
          ((data)=>{
            console.log(data);
            var question=document.createElement('div');
            question.innerHTML=data[0].cost;
          
            question.className="answer";
            document.getElementById('massage').append(question);
            this.flowing();
          })
          
      
            }
            image8(){
              var y ="8";
              this.api.getmenu(y).subscribe
              ((data)=>{
                console.log(data);
                var question=document.createElement('img');
                question.src="./assets/barbeque.png";
              
                question.className="img";
                document.getElementById('massage').append(question);
                this.pic80();
              })
      
            }
            pic80(){
              var y ="8";
                   this.api.getmenu(y).subscribe
                   ((data)=>{
                     console.log(data);
                     var question=document.createElement('div');
                     question.innerHTML=data[0].pizzaName;
                   
                     question.className="answer";
                     document.getElementById('massage').append(question);
                     this.pic8();
                   })
              }
            pic8(){
              var y ="8";
                     this.api.getmenu(y).subscribe
                     ((data)=>{
                       console.log(data);
                       var question=document.createElement('div');
                       question.innerHTML=data[0].Description;
                     
                       question.className="answer";
                       document.getElementById('massage').append(question);
                       this.flow8();
                     })}
      
                     flow8(){
                      var y ="8";
                      this.api.getmenu(y).subscribe
                      ((data)=>{
                        console.log(data);
                        var question=document.createElement('div');
                        question.innerHTML=data[0].cost;
                      
                        question.className="answer";
                        document.getElementById('massage').append(question);
                        this.flowing();
                      })
      
                     }
            image9(){
              var y ="9";
              this.api.getmenu(y).subscribe
              ((data)=>{
                console.log(data);
                var question=document.createElement('img');
                question.src="./assets/golden.png";
              
                question.className="img";
                document.getElementById('massage').append(question);
                this.pic90();
              })
      
            }
            pic90(){
              var y ="9";
                   this.api.getmenu(y).subscribe
                   ((data)=>{
                     console.log(data);
                     var question=document.createElement('div');
                     question.innerHTML=data[0].pizzaName;
                   
                     question.className="answer";
                     document.getElementById('massage').append(question);
                     this.pic9();
                   })
              }
            pic9(){
              var y ="9";
              this.api.getmenu(y).subscribe
              ((data)=>{
                console.log(data);
                var question=document.createElement('div');
                question.innerHTML=data[0].Description;
              
                question.className="answer";
                document.getElementById('massage').append(question);
                this.flow9();
              })}
             
              flow9(){
                var y ="9";
                this.api.getmenu(y).subscribe
                ((data)=>{
                  console.log(data);
                  var question=document.createElement('div');
                  question.innerHTML=data[0].cost;
                
                  question.className="answer";
                  document.getElementById('massage').append(question);
                  this.flowing();
                }) }

               
     flowing (){
       
        var value=["Click to Enter User Details 👪"]
        var div=document.createElement('div');
        var div1=document.createElement('div');
        div.className="pizza";
       let i=0;
          var btn=document.createElement('button');
          btn.className="btn31"
          btn.innerHTML=value[i];
          div1.append(btn);
          div.append(div1);
          document.getElementById('massage').append(div); 
          btn.addEventListener('click',(e:Event)=>this.direction(i));
        
      }
  

        direction(i){
           if(i==0){
             this.status();
            
           }
          }

status(){
          var Name=prompt("Enter the name")
          var Address=prompt("Enter the Address")
          var Phonenumber = prompt("Enter the Phonenumber")
          if(Phonenumber.length!=10)
          {
            alert("Enter valid number!!");
            var Phonenumber = prompt("Enter the Phonenumber")
          }
         
      


        
        
          var random = Math.floor(Math.random()*(9*(Math.pow(10,5))))+(Math.pow(10,5))
          this.api.putdetails(Name,Address,Phonenumber,String(random)).subscribe(data =>{
          console.log(data);
         })
        
      var h4 = document.createElement("h4");
      h4.innerHTML = "Your Id : "+random;
      h4.className = "id";
      document.getElementById("massage").append(h4)
      this.display();
        } 
      


    display(){
       
    var value=["Check 📝Status"]
    var div=document.createElement('div');
    var div1=document.createElement('div');
    div.className="status";
      let i=0;
      var btn=document.createElement('button');
      btn.className="btn3"
      btn.innerHTML=value[i];
      div1.append(btn);
      div.append(div1);
      document.getElementById('massage').append(div); 
      btn.addEventListener('click',(e:Event)=>this.check(i));
    }

     check(i){
      var id=prompt("Enter the ID")
   
      this.api.getdetails(id).subscribe(data =>{
        console.log(data);
      

      var p = document.createElement("p");
      p.innerHTML = " Id : "  +  data[0].id   +   " , "+  data[0].name   +" "+"your Pizza Order is Successfully done 👍 Yummy Pizza will reach u soon 💁......" ;
      p.className = "view";
     
      document.getElementById("massage").append(p)
      this.end();
    })

    }
    
    end(){
      var value=["💞🙏"]
      var div=document.createElement('div');
      var div1=document.createElement('div');
      div.className="status";
        let i=0;
        var btn=document.createElement('button');
        btn.className="btn9"
        btn.innerHTML=value[i];
        div1.append(btn);
        div.append(div1);
        document.getElementById('massage').append(div); 
        btn.addEventListener('click',(e:Event)=>this.thanks(i));
    }


    thanks(i){
      if(i==0){
      var y ="7";
      this.api.getanswer(y).subscribe
      ((data)=>{
        console.log(data);
        var question=document.createElement('div');
        question.innerHTML=data[0].answer;
      
        question.className="answer";
        document.getElementById('massage').append(question);
        this.smiley();
      })

    }
  }
  smiley(){
    var value=["😊"]
      var div=document.createElement('div');
      var div1=document.createElement('div');
      div.className="status";
        let i=0;
        var btn=document.createElement('button');
        btn.className="btn9"
        btn.innerHTML=value[i];
        div1.append(btn);
        div.append(div1);
        document.getElementById('massage').append(div); 
        btn.addEventListener('click',(e:Event)=>this.wish(i));
    }

    wish(i){
      if(i==0){
        var y ="8";
        this.api.getanswer(y).subscribe
        ((data)=>{
          console.log(data);
          var question=document.createElement('div');
          question.innerHTML=data[0].answer;
        
          question.className="answer";
          document.getElementById('massage').append(question);

      })
    }
    }

    ending(){
      var value=["💞🙏"]
      var div=document.createElement('div');
      var div1=document.createElement('div');
      div.className="status";
        let i=0;
        var btn=document.createElement('button');
        btn.className="btn9"
        btn.innerHTML=value[i];
        div1.append(btn);
        div.append(div1);
        document.getElementById('massage').append(div); 
        btn.addEventListener('click',(e:Event)=>this.thanking(i));
    }


    thanking(i){
      if(i==0){
        var y ="7";
        this.api.getanswer(y).subscribe
        ((data)=>{
          console.log(data);
          var question=document.createElement('div');
          question.innerHTML=data[0].answer;
        
          question.className="answer";
          document.getElementById('massage').append(question);
          this.smile();
        })
  
      }
    }
    smile(){
      var value=["😊"]
        var div=document.createElement('div');
        var div1=document.createElement('div');
        div.className="status";
          let i=0;
          var btn=document.createElement('button');
          btn.className="btn9"
          btn.innerHTML=value[i];
          div1.append(btn);
          div.append(div1);
          document.getElementById('massage').append(div); 
          btn.addEventListener('click',(e:Event)=>this.repeat(i));
    }

    repeat(i){
      if(i==0){
        if(i==0){
          var y ="9";
          this.api.getanswer(y).subscribe
          ((data)=>{
            console.log(data);
            var question=document.createElement('div');
            question.innerHTML=data[0].answer;
          
            question.className="answer";
            document.getElementById('massage').append(question);
            this.start();
          })
    
        }
    }
  }
  start(){
    var value=["Order Pizza 🍕","Check Order Status 📋","Not Needed ❌"]
    var div=document.createElement('div');
    var div1=document.createElement('div');
    div.className="align";
    for(let i=0;i<value.length;i++)
    {
      var btn=document.createElement('button');
      btn.className="btn0"
      btn.innerHTML=value[i];
      div1.append(btn);
      div.append(div1);
      document.getElementById('massage').append(div); 
      btn.addEventListener('click',(e:Event)=>this.final(i));
    }
   
  }

final(i){
  if(i==0){
    this.create();
  }
  else if(i==1){
    this.create1();
  }
  else{
    this.bye();
  }
}

bye(){
  var y ="10";
  this.api.getanswer(y).subscribe
  ((data)=>{
    console.log(data);
    var question=document.createElement('div');
    question.innerHTML=data[0].answer;
  
    question.className="answer";
    document.getElementById('massage').append(question);
    
  })

}
}



  
  
  
  

          
           

   
        
         
      
      

  



  



  

  

  

