let a,b,store,c = 0,Acolor,Bcolor,target,tlocA,tlocB,pi,pj,tomove,juptill,iuptill,jdtill,idtill,dval,diluptill,djluptill,diruptill, djruptill ,dildtill,djldtill,dirdtill, djrdtill;
let chessboard =[
    [document.getElementById('a1'),document.getElementById('a2'),document.getElementById('a3'),document.getElementById('a4'),document.getElementById('a5'),document.getElementById('a6'),document.getElementById('a7'),document.getElementById('a8')],
    [document.getElementById('b1'),document.getElementById('b2'),document.getElementById('b3'),document.getElementById('b4'),document.getElementById('b5'),document.getElementById('b6'),document.getElementById('b7'),document.getElementById('b8')],
    [document.getElementById('c1'),document.getElementById('c2'),document.getElementById('c3'),document.getElementById('c4'),document.getElementById('c5'),document.getElementById('c6'),document.getElementById('c7'),document.getElementById('c8')],
    [document.getElementById('d1'),document.getElementById('d2'),document.getElementById('d3'),document.getElementById('d4'),document.getElementById('d5'),document.getElementById('d6'),document.getElementById('d7'),document.getElementById('d8')],
    [document.getElementById('e1'),document.getElementById('e2'),document.getElementById('e3'),document.getElementById('e4'),document.getElementById('e5'),document.getElementById('e6'),document.getElementById('e7'),document.getElementById('e8')],
    [document.getElementById('f1'),document.getElementById('f2'),document.getElementById('f3'),document.getElementById('f4'),document.getElementById('f5'),document.getElementById('f6'),document.getElementById('f7'),document.getElementById('f8')],
    [document.getElementById('g1'),document.getElementById('g2'),document.getElementById('g3'),document.getElementById('g4'),document.getElementById('g5'),document.getElementById('g6'),document.getElementById('g7'),document.getElementById('g8')],
    [document.getElementById('h1'),document.getElementById('h2'),document.getElementById('h3'),document.getElementById('h4'),document.getElementById('h5'),document.getElementById('h6'),document.getElementById('h7'),document.getElementById('h8'),]
]
let whiteset =[chessboard[0][0].innerHTML,chessboard[0][1].innerHTML,chessboard[0][2].innerHTML,chessboard[0][3].innerHTML,chessboard[0][4].innerHTML,chessboard[1][0].innerHTML];
let Blackset =[chessboard[7][0].innerHTML,chessboard[7][1].innerHTML,chessboard[7][2].innerHTML,chessboard[7][3].innerHTML,chessboard[7][4].innerHTML,chessboard[6][0].innerHTML];
let alphabetPart=['a','b','c','d','e','f','g','h']
let Movedata= document.getElementById('MovementOL');
let whiteKing = chessboard[0][3];
let blackKing = chessboard[7][4];
let wLCastle=1,wRCastle=1,bLCastle=1,bRCastle=1,turn = 1;

function elemenateBlackPeice(){
  if(chessboard[tlocA][tlocB].innerHTML!=""){
    document.getElementById('elemenatedBlackPeice').innerHTML+=chessboard[tlocA][tlocB].innerHTML;
  }
  }

function elemenateWhitePeice(){
  if(chessboard[tlocA][tlocB].innerHTML!=""){
  document.getElementById('elemenatedWhitePeice').innerHTML+=chessboard[tlocA][tlocB].innerHTML;}
}

function updateMove(peice){
  console.log(peice);
  if(peice.includes('Wpeice')){
    Movedata.innerHTML=(`<li style="background-color:#fde8ce;"> ${alphabetPart[pi]}${pj+1}${peice}${alphabetPart[tlocB]}${tlocA+1}</li>`+Movedata.innerHTML);
  }
  else{
    Movedata.innerHTML=(`<li style="background-color:#e9d6be;"> ${alphabetPart[pi]}${pj+1}${peice}${alphabetPart[tlocB]}${tlocA+1}</li>`+Movedata.innerHTML);
  }
  
  console.log("updateMove")
  turn = !turn;
}
function checkking(){
  if(!(whiteKing.innerHTML.includes('White_King'))){
    alert("Black Wins");
  }
  else if(!(blackKing.innerHTML.includes('Black_King'))){
    alert('White wins');
  }
}

function removeClass(){
  let z = document.getElementsByClassName('legal_Move');
  Array.from(z).forEach((element)=>{
    element.classList.remove('legal_Move');
  })
  // console.log(z[3]);
}
function move(x){
  target=x;
}

function check(){
  for(let i = 0 ; i < 8 ; i++){
    for(let j = 0 ; j < 8 ; j++){
      if(b===chessboard[i][j]){
        tlocA=i;
        tlocB=j;
        break;
      }
    }
  }
}

function illegalMove(){
  alert("Sorry Mate !! It's an Illegal Move");
}

function validmove(a){
  b=document.getElementById(`${a}`);
  check();
  if(c===0 && target != undefined){

    console.log("if c 0")
    if(turn){
      if(target==="wpawn"){
      pi=tlocA;
      pj=tlocB;
      store=chessboard[pi][pj].innerHTML;
      c=1;
      tomove="wpawn";
    }
    else  if(target==="wk"){
      pi=tlocA;
      pj=tlocB;
      store=chessboard[pi][pj].innerHTML;
      c=1;
      tomove="wk";
    }
    else if(target=="wr"){
      pi=tlocA;
      pj=tlocB;
      store=chessboard[pi][pj].innerHTML;
      c=1;
      tomove="wr";
    }
    else if(target=="wn"){
      pi=tlocA;
      pj=tlocB;
      store=chessboard[pi][pj].innerHTML;
      c=1;
      tomove="wn";
    }
    else if(target=="wb"){
      pi=tlocA;
      pj=tlocB;
      store=chessboard[pi][pj].innerHTML;
      c=1;
      tomove="wb";
    }
    else if(target=="wq"){
      pi=tlocA;
      pj=tlocB;
      store=chessboard[pi][pj].innerHTML;
      c=1;
      tomove="wq";
    }

    else{
      turn;
    }
    }
    
   else {
      if(target==="bpawn"){
      pi=tlocA;
      pj=tlocB;
      store=chessboard[pi][pj].innerHTML;
      c=1;
      tomove="bpawn";
}
  
    else  if(target==="bk"){
      pi=tlocA;
      pj=tlocB;
      store=chessboard[pi][pj].innerHTML;
      c=1;
      tomove="bk";
    }
    
    else if(target=="br"){
      pi=tlocA;
      pj=tlocB;
      store=chessboard[pi][pj].innerHTML;
      c=1;
      tomove="br";
    }
    
    else if(target=="bn"){
      pi=tlocA;
      pj=tlocB;
      store=chessboard[pi][pj].innerHTML;
      c=1;
      tomove="bn";
    }
    
    
    else if(target=="bb"){
      pi=tlocA;
      pj=tlocB;
      store=chessboard[pi][pj].innerHTML;
      c=1;
      tomove="bb";
    }
    else if(target=="bq"){
      pi=tlocA;
      pj=tlocB;
      store=chessboard[pi][pj].innerHTML;
      c=1;
      tomove="bq";
    }
    else{
      turn;
    }
  }
    
    
  }
  else{
    console.log("else")
    check();
    if(tomove=="wq"){
      
      for(let i = pi+1, j = pj+1;i<8 && j < 8;i++,j++){
        let d = chessboard[i][j].innerHTML;
        console.log("i=",i,"j=",j);
        if(d!=""){
          if(d.includes('Wpeice')){
            diruptill=i-1;
            djruptill=j-1;
            
            break;
          }
          else{
            diruptill=i;
            djruptill=j;
            chessboard[i][j].classList.add('legal_Move');
            break;
          }
        }
        else{
          diruptill=i;
            djruptill=j;
        }
        chessboard[i][j].classList.add('legal_Move');
      }
      for(let i = pi+1, j = pj-1;i<8 && j >= 0;i++,j--){
        let d = chessboard[i][j].innerHTML;
        console.log("i=",i,"j=",j);
        if(d!=""){
          if(d.includes('Wpeice')){
            diluptill=i-1;
            djluptill=j+1;
           
            break;
          }
          else{
            diluptill=i;
            djluptill=j;
            chessboard[i][j].classList.add('legal_Move');
            break;
          }
        }
        else if(d===undefined){break;}
        else{
          diluptill=i;
            djluptill=j;
        }
        chessboard[i][j].classList.add('legal_Move');
      }
      if(pi==0){
        dirdtill=0;
        dildtill=0;
        djldtill=pj;
        djrdtill=pj;
      }
      // else if(pj==0){
      //   dirdtill=pi;
      //   dildtill=pi;
      //   djldtill=0;
      //   djrdtill=0;
      // }
      else{
        for(let i = pi-1, j = pj-1;i>=0 && j >= 0;i--,j--){
          let d = chessboard[i][j].innerHTML;
          console.log("down right i=",i,"j=",j);
          if(d!=""){
            if(d.includes('Wpeice')){
              dildtill=i+1;
              djldtill=j+1;
              
              console.log("diagnol left down till");
              break;
            }
            else{
              dildtill=i;
              djldtill=j;
              chessboard[i][j].classList.add('legal_Move');
              console.log("diagnol left down till");
              break;
            }
          }
          else{
            dildtill=i;
              djldtill=j;
              chessboard[i][j].classList.add('legal_Move');
              console.log("diagnol left down till");
          }
          // chessboard[i][j].classList.add('legal_Move');
          
        }
        for(let i = pi-1, j = pj+1;i>=0 && j < 8;i--,j++){
          if(chessboard[i][j].innerHTML==undefined){break;}
          let d = chessboard[i][j].innerHTML;
          console.log("i=",i,"j=",j);
          if(d!=""){
            if(d.includes('Wpeice')){
              dirdtill=i+1;
              djrdtill=j-1;
              break;
            }
            else{
              dirdtill=i;
              djrdtill=j;
              chessboard[i][j].classList.add('legal_Move');
              break;
            }
          }
          else if(d===undefined){break;}
          else{
            dirdtill=i;
              djrdtill=j;
              chessboard[i][j].classList.add('legal_Move');
          }
          chessboard[i][j].classList.add('legal_Move');
        }
      }

      
      console.log("rook");
      for(let i = pi+1; i < 8 ; ++i){
        console.log("enter in loop")
        if(chessboard[i][pj].innerHTML.trim()!=""){
          let d = chessboard[i][pj].innerHTML;
          if(d.includes("Wpeice")){
            console.log("enter in loop 1if")
            iuptill= i-1;
            console.log("iuptill")
          break;}
          else{
            iuptill = i;
            i=8;
          }
        }
      }
      if(pi ==0){
        idtill=0;
      }
      else{
        dval = pi-1;
        for(let i= dval; i>=0;--i){
          console.log("in -vei loop");
          if(chessboard[i][pj].innerHTML.trim()!=""){
            let d = chessboard[i][pj].innerHTML;
            if(d.includes("Wpeice")){
              idtill = i+1;
              break;
            }
            else{
              idtill = i;
              i=-1;
              break;
            }
            
          }idtill=i;
        }
      }
      if(pj==7){
        juptill=7;
      }
      else{
        for(let j = pj+1;j<8;j++){
          if(chessboard[pi][j].innerHTML.trim()!=""){
            let d = chessboard[pi][j].innerHTML;
            if(d.includes("Wpeice")){
              console.log("triggered");
              juptill=j-1;
              break;
            }
            else{
              juptill=j;
              break; 
            }
            
          }
          juptill=j;
        }
      }
      if(pj ==0){
        jdtill=pj;
      }
      else{
        dval = pj-1;
        for(let j= dval; j>=0;j--){
          console.log("in -vei loop");
          if(chessboard[pi][j].innerHTML.trim()!=""){
            let d = chessboard[pi][j].innerHTML;
            if(d.includes("Wpeice")){
              jdtill = j+1;
              break;
            }
            else{
              jdtill = j;
              break
              // j=-1;
            }
          }
          jdtill=j;
        }
      }
      
      console.log("pi,pj,tlocA,tlocB,iuptill,idtill,juptill,jdtill",pi,pj,tlocA,tlocB,iuptill,idtill,juptill,jdtill);   
      // if((tlocA==pi && (tlocB>=jdtill && tlocB<=juptill))||((tlocB==pj)&&(tlocA>=idtill && tlocA<=iuptill))){
        if((tlocA>=idtill&&  tlocA<=iuptill)&&(tlocB>=jdtill && tlocB<=juptill)&&((pi!=tlocA && pj==tlocB)||(tlocA==pi && pj!=tlocB))){
        console.log("moving rook");
        elemenateBlackPeice();
        chessboard[pi][pj].innerHTML=null;
          chessboard[tlocA][tlocB].innerHTML=store;
          store=null;
          updateMove(whiteset[4]);
          // pi=null;
          // pj=null;
          // juptill=null;
          // jdtill=null;
          // iuptill=null;
          // idtill=null;

          c=0;
        }
        else if(chessboard[tlocA][tlocB].classList.contains("legal_Move")){
          elemenateBlackPeice();
          console.log("Triggred");
          chessboard[pi][pj].innerHTML="";
          chessboard[tlocA][tlocB].innerHTML=store;
          c=0;
          updateMove(whiteset[4]);
          pntr=0;
          removeClass();
        }
        else{
          illegalMove();
        }
    
      }
    else if(tomove=="bq"){
      
      for(let i = pi+1, j = pj+1;i<8 && j < 8;i++,j++){
        let d = chessboard[i][j].innerHTML;
        console.log("i=",i,"j=",j);
        if(d!=""){
          if(d.includes('bpeice')){
            diruptill=i-1;
            djruptill=j-1;
            
            break;
          }
          else{
            diruptill=i;
            djruptill=j;
            chessboard[i][j].classList.add('legal_Move');
            break;
          }
        }
        else{
          diruptill=i;
            djruptill=j;
        }
        chessboard[i][j].classList.add('legal_Move');
      }
      for(let i = pi+1, j = pj-1;i<8 && j >= 0;i++,j--){
        let d = chessboard[i][j].innerHTML;
        console.log("i=",i,"j=",j);
        if(d!=""){
          if(d.includes('bpeice')){
            diluptill=i-1;
            djluptill=j+1;
           
            break;
          }
          else{
            diluptill=i;
            djluptill=j;
            chessboard[i][j].classList.add('legal_Move');
            break;
          }
        }
        else if(d===undefined){break;}
        else{
          diluptill=i;
            djluptill=j;
        }
        chessboard[i][j].classList.add('legal_Move');
      }
      if(pi==0){
        dirdtill=0;
        dildtill=0;
        djldtill=pj;
        djrdtill=pj;
      }
      // else if(pj==0){
      //   dirdtill=pi;
      //   dildtill=pi;
      //   djldtill=0;
      //   djrdtill=0;
      // }
      else{
        for(let i = pi-1, j = pj-1;i>=0 && j >= 0;i--,j--){
          let d = chessboard[i][j].innerHTML;
          console.log("down right i=",i,"j=",j);
          if(d!=""){
            if(d.includes('bpeice')){
              dildtill=i+1;
              djldtill=j+1;
              
              console.log("diagnol left down till");
              break;
            }
            else{
              dildtill=i;
              djldtill=j;
              chessboard[i][j].classList.add('legal_Move');
              console.log("diagnol left down till");
              break;
            }
          }
          else{
            dildtill=i;
              djldtill=j;
              chessboard[i][j].classList.add('legal_Move');
              console.log("diagnol left down till");
          }
          // chessboard[i][j].classList.add('legal_Move');
          
        }
        for(let i = pi-1, j = pj+1;i>=0 && j < 8;i--,j++){
          if(chessboard[i][j].innerHTML==undefined){break;}
          let d = chessboard[i][j].innerHTML;
          console.log("i=",i,"j=",j);
          if(d!=""){
            if(d.includes('bpeice')){
              dirdtill=i+1;
              djrdtill=j-1;
              break;
            }
            else{
              dirdtill=i;
              djrdtill=j;
              chessboard[i][j].classList.add('legal_Move');
              break;
            }
          }
          else if(d===undefined){break;}
          else{
            dirdtill=i;
              djrdtill=j;
              chessboard[i][j].classList.add('legal_Move');
          }
          chessboard[i][j].classList.add('legal_Move');
        }
      }
        console.log("pi,pj,tlocA,tlocB,diruptill,djruptill,diluptill,djluptill,dirdtill,djrdtill,dildtill,djldtill",pi,pj,tlocA,tlocB,diruptill,djruptill,diluptill,djluptill,dirdtill,djrdtill,dildtill,djldtill)
        console.log(`uptill right ${diruptill} ${djruptill} downtill = ${dildtill} ${djldtill} `)
        
          console.log("rook");
          if(pi==7){ iuptill = 7;}
          
          else{
          for(let i = pi+1; i < 8 ; ++i){
            console.log("enter in loop",i)
            if(chessboard[i][pj].innerHTML.trim()!=""){
              let d = chessboard[i][pj].innerHTML;
              if(d.includes("bpeice")){
                console.log("enter in loop 1if")
                iuptill= i-1;
                console.log("iuptill")
              break;}
              else{
                iuptill = i;
                break;
              }
            } iuptill =i;
          }
        }
          if(pi ==0){
            idtill=0;
          }
          else{
            dval = pi-1;
            for(let i= dval; i>=0;--i){
              console.log("in -vei loop");
              if(chessboard[i][pj].innerHTML.trim()!=""){
                let d = chessboard[i][pj].innerHTML;
                if(d.includes("bpeice")){
                  idtill = i+1;
                  break;
                }
                else{
                  idtill = i;
                  i=-1;
                  break;
                }
                
              }idtill=i;
            }
          }
          if(pj == 7){juptill=7;}
          else{
          for(let j = pj+1;j<8;j++){
            if(chessboard[pi][j].innerHTML.trim()!=""){
              let d = chessboard[pi][j].innerHTML;
              if(d.includes("bpeice")){
                console.log("triggered");
                juptill=j-1;
                break;
              }
              else{
                juptill=j;
                break; 
              }
              
            }
            juptill=j;
          }}
          if(pj ==0){
            jdtill=0;
          }
          else{
            dval = pj-1;
            for(let j= dval; j>=0;--j){
              console.log("in -vei loop");
              if(chessboard[pi][j].innerHTML.trim()!=""){
                let d = chessboard[pi][j].innerHTML;
                if(d.includes("bpeice")){
                  jdtill = j+1;
                  break;
                }
                else{
                  jdtill = j;
                  j=-1;
                  break;
                }
              }
              jdtill=j;
            }
          }
          
          console.log("pi,pj,tlocA,tlocB,iuptill,idtill,juptill,jdtill",pi,pj,tlocA,tlocB,iuptill,idtill,juptill,jdtill);   
          // if((tlocA==pi && (tlocB>=jdtill && tlocB<=juptill))||((tlocB==pj)&&(tlocA>=idtill && tlocA<=iuptill))){
            if((tlocA>=idtill&&  tlocA<=iuptill)&&(tlocB>=jdtill && tlocB<=juptill)&&((pi!=tlocA && pj==tlocB)||(tlocA==pi && pj!=tlocB))){
            console.log("moving rook");
            elemenateWhitePeice()
            chessboard[pi][pj].innerHTML=null;
              chessboard[tlocA][tlocB].innerHTML=store;
              updateMove(Blackset[3]);
              store=null;
              // pi=null;
              // pj=null;
              // juptill=null;
              // jdtill=null;
              // iuptill=null;
              // idtill=null;
    
              c=0;
          }
          
        else if(chessboard[tlocA][tlocB].classList.contains("legal_Move")){
          elemenateWhitePeice()
          console.log("Triggred");
          chessboard[pi][pj].innerHTML="";
          chessboard[tlocA][tlocB].innerHTML=store;
          updateMove(Blackset[3]);
          c=0;
          pntr=0;
          removeClass();
        }
        else{
          illegalMove();
        }
    }
    else if(tomove=="bb"){
      
      for(let i = pi+1, j = pj+1;i<8 && j < 8;i++,j++){
        let d = chessboard[i][j].innerHTML;
        console.log("i=",i,"j=",j);
        if(d!=""){
          if(d.includes('bpeice')){
            diruptill=i-1;
            djruptill=j-1;
            
            break;
          }
          else{
            diruptill=i;
            djruptill=j;
            chessboard[i][j].classList.add('legal_Move');
            break;
          }
        }
        else{
          diruptill=i;
            djruptill=j;
        }
        chessboard[i][j].classList.add('legal_Move');
      }
      for(let i = pi+1, j = pj-1;i<8 && j >= 0;i++,j--){
        let d = chessboard[i][j].innerHTML;
        console.log("i=",i,"j=",j);
        if(d!=""){
          if(d.includes('bpeice')){
            diluptill=i-1;
            djluptill=j+1;
           
            break;
          }
          else{
            diluptill=i;
            djluptill=j;
            chessboard[i][j].classList.add('legal_Move');
            break;
          }
        }
        else if(d===undefined){break;}
        else{
          diluptill=i;
            djluptill=j;
        }
        chessboard[i][j].classList.add('legal_Move');
      }
      if(pi==0){
        dirdtill=0;
        dildtill=0;
        djldtill=pj;
        djrdtill=pj;
      }
      // else if(pj==0){
      //   dirdtill=pi;
      //   dildtill=pi;
      //   djldtill=0;
      //   djrdtill=0;
      // }
      else{
        for(let i = pi-1, j = pj-1;i>=0 && j >= 0;i--,j--){
          let d = chessboard[i][j].innerHTML;
          console.log("down right i=",i,"j=",j);
          if(d!=""){
            if(d.includes('bpeice')){
              dildtill=i+1;
              djldtill=j+1;
              
              console.log("diagnol left down till");
              break;
            }
            else{
              dildtill=i;
              djldtill=j;
              chessboard[i][j].classList.add('legal_Move');
              console.log("diagnol left down till");
              break;
            }
          }
          else{
            dildtill=i;
              djldtill=j;
              chessboard[i][j].classList.add('legal_Move');
              console.log("diagnol left down till");
          }
          // chessboard[i][j].classList.add('legal_Move');
          
        }
        for(let i = pi-1, j = pj+1;i>=0 && j < 8;i--,j++){
          if(chessboard[i][j].innerHTML==undefined){break;}
          let d = chessboard[i][j].innerHTML;
          console.log("i=",i,"j=",j);
          if(d!=""){
            if(d.includes('bpeice')){
              dirdtill=i+1;
              djrdtill=j-1;
              break;
            }
            else{
              dirdtill=i;
              djrdtill=j;
              chessboard[i][j].classList.add('legal_Move');
              break;
            }
          }
          else if(d===undefined){break;}
          else{
            dirdtill=i;
              djrdtill=j;
              chessboard[i][j].classList.add('legal_Move');
          }
          chessboard[i][j].classList.add('legal_Move');
        }
      }
        console.log("pi,pj,tlocA,tlocB,diruptill,djruptill,diluptill,djluptill,dirdtill,djrdtill,dildtill,djldtill",pi,pj,tlocA,tlocB,diruptill,djruptill,diluptill,djluptill,dirdtill,djrdtill,dildtill,djldtill)
        console.log(`uptill right ${diruptill} ${djruptill} downtill = ${dildtill} ${djldtill} `)
        if(chessboard[tlocA][tlocB].classList.contains("legal_Move")){
          elemenateWhitePeice()
          console.log("Triggred");
          chessboard[pi][pj].innerHTML="";
          chessboard[tlocA][tlocB].innerHTML=store;
          c=0;
          updateMove(Blackset[2]);
          pntr=0;
          removeClass();
        }
        else{
          illegalMove();
        }
    }
   else if(tomove=="wb"){
      
      for(let i = pi+1, j = pj+1;i<8 && j < 8;i++,j++){
        let d = chessboard[i][j].innerHTML;
        console.log("i=",i,"j=",j);
        if(d!=""){
          if(d.includes('Wpeice')){
            diruptill=i-1;
            djruptill=j-1;
            
            break;
          }
          else{
            diruptill=i;
            djruptill=j;
            chessboard[i][j].classList.add('legal_Move');
            break;
          }
        }
        else{
          diruptill=i;
            djruptill=j;
        }
        chessboard[i][j].classList.add('legal_Move');
      }
      for(let i = pi+1, j = pj-1;i<8 && j >= 0;i++,j--){
        let d = chessboard[i][j].innerHTML;
        console.log("i=",i,"j=",j);
        if(d!=""){
          if(d.includes('Wpeice')){
            diluptill=i-1;
            djluptill=j+1;
           
            break;
          }
          else{
            diluptill=i;
            djluptill=j;
            chessboard[i][j].classList.add('legal_Move');
            break;
          }
        }
        else if(d===undefined){break;}
        else{
          diluptill=i;
            djluptill=j;
        }
        chessboard[i][j].classList.add('legal_Move');
      }
      if(pi==0){
        dirdtill=0;
        dildtill=0;
        djldtill=pj;
        djrdtill=pj;
      }
      // else if(pj==0){
      //   dirdtill=pi;
      //   dildtill=pi;
      //   djldtill=0;
      //   djrdtill=0;
      // }
      else{
        for(let i = pi-1, j = pj-1;i>=0 && j >= 0;i--,j--){
          let d = chessboard[i][j].innerHTML;
          console.log("down right i=",i,"j=",j);
          if(d!=""){
            if(d.includes('Wpeice')){
              dildtill=i+1;
              djldtill=j+1;
              
              console.log("diagnol left down till");
              break;
            }
            else{
              dildtill=i;
              djldtill=j;
              chessboard[i][j].classList.add('legal_Move');
              console.log("diagnol left down till");
              break;
            }
          }
          else{
            dildtill=i;
              djldtill=j;
              chessboard[i][j].classList.add('legal_Move');
              console.log("diagnol left down till");
          }
          // chessboard[i][j].classList.add('legal_Move');
          
        }
        for(let i = pi-1, j = pj+1;i>=0 && j < 8;i--,j++){
          if(chessboard[i][j].innerHTML==undefined){break;}
          let d = chessboard[i][j].innerHTML;
          console.log("i=",i,"j=",j);
          if(d!=""){
            if(d.includes('Wpeice')){
              dirdtill=i+1;
              djrdtill=j-1;
              break;
            }
            else{
              dirdtill=i;
              djrdtill=j;
              chessboard[i][j].classList.add('legal_Move');
              break;
            }
          }
          else if(d===undefined){break;}
          else{
            dirdtill=i;
              djrdtill=j;
              chessboard[i][j].classList.add('legal_Move');
          }
          chessboard[i][j].classList.add('legal_Move');
        }
      }
        console.log("pi,pj,tlocA,tlocB,diruptill,djruptill,diluptill,djluptill,dirdtill,djrdtill,dildtill,djldtill",pi,pj,tlocA,tlocB,diruptill,djruptill,diluptill,djluptill,dirdtill,djrdtill,dildtill,djldtill)
        console.log(`uptill right ${diruptill} ${djruptill} downtill = ${dildtill} ${djldtill} `)
        if(chessboard[tlocA][tlocB].classList.contains("legal_Move")){
          elemenateBlackPeice();
          console.log("Triggred");
          chessboard[pi][pj].innerHTML="";
          chessboard[tlocA][tlocB].innerHTML=store;
          updateMove(whiteset[2]);
          c=0;
          pntr=0;
          removeClass();
        }
        else{
          illegalMove();
        }
    }
   else if(tomove=="wn"){
      console.log("inside wn");
      console.log('pi pj tlocA tlocB',pi, pj ,tlocA ,tlocB);
      if((((tlocA==pi-1 && tlocB==pj+2)||(tlocA==pi-1 && tlocB == pj-2)||(tlocA==pi+1 && tlocB==pj+2)||(tlocA==pi+1 && tlocB==pj-2))||(tlocA==pi-2 && tlocB==pj+1)||(tlocA==pi-2 && tlocB==pj-1)||(tlocA==pi+2 && tlocB==pj+1)||(tlocA==pi+2 && tlocB==pj-1))&&(!(chessboard[tlocA][tlocB].innerHTML.includes('Wpeice')))){
        console.log("inside knight if");
          elemenateBlackPeice();
        chessboard[pi][pj].innerHTML="";
          chessboard[tlocA][tlocB].innerHTML=store;
          updateMove(whiteset[1]);

          c=0;
      }
      else{
        illegalMove();
      }
    }
    else if(tomove=="bn"){
      console.log("inside wn");
      console.log('pi pj tlocA tlocB',pi, pj ,tlocA ,tlocB);
      if((((tlocA==pi-1 && tlocB==pj+2)||(tlocA==pi-1 && tlocB == pj-2)||(tlocA==pi+1 && tlocB==pj+2)||(tlocA==pi+1 && tlocB==pj-2))||(tlocA==pi-2 && tlocB==pj+1)||(tlocA==pi-2 && tlocB==pj-1)||(tlocA==pi+2 && tlocB==pj+1)||(tlocA==pi+2 && tlocB==pj-1))&&(!(chessboard[tlocA][tlocB].innerHTML.includes('bpeice')))){
        console.log("inside knight if");
        chessboard[pi][pj].innerHTML="";
          elemenateWhitePeice();
        
          chessboard[tlocA][tlocB].innerHTML=store;
          updateMove(Blackset[1]);
          c=0;
      }
      else{
        illegalMove();
      }
    }
    else if(tomove==="wpawn"){ console.log("wpawn")
      if((tlocA==pi+1 && tlocA < 8)){
        if((tlocB==pj+1 ||tlocB==pj-1 )&&(chessboard[tlocA][tlocB].innerHTML.includes('bpeice'))){
          elemenateBlackPeice();
          chessboard[pi][pj].innerHTML="";
          chessboard[tlocA][tlocB].innerHTML=store;
          updateMove(whiteset[5]);
          c=0;
        }
        else if(tlocB==pj&&(chessboard[tlocA][tlocB].innerHTML.trim()=="")){
          elemenateBlackPeice();
          chessboard[pi][pj].innerHTML="";
          chessboard[tlocA][tlocB].innerHTML=store;
          updateMove(whiteset[5]);
          c=0;
        }
        else{
          illegalMove(1);
        }
      }
      else{
        illegalMove(1);
      }
    }
    else if(tomove==="bpawn"){console.log("bpawn")
      if((tlocA==pi-1 )){
        if((tlocB==pj+1 ||tlocB==pj-1)&&chessboard[tlocA][tlocB].innerHTML.includes('Wpeice')){
          elemenateWhitePeice()
          chessboard[pi][pj].innerHTML="";
          chessboard[tlocA][tlocB].innerHTML=store;
          updateMove(Blackset[5]);
          c=0;
        }
        else if(tlocB==pj &&chessboard[tlocA][tlocB].innerHTML.trim()==""){
          elemenateWhitePeice()
          chessboard[pi][pj].innerHTML="";
          chessboard[tlocA][tlocB].innerHTML=store;
          updateMove(Blackset[5]);
          c=0;
        }
        else{
          illegalMove(2);
        }
      }
      else{
        illegalMove(2);
      }
    }
    else if(tomove==="wk"){
      if(((tlocA==pi+1 || tlocA==pi-1 ||tlocA==pi )&&(tlocB==pj+1 ||tlocB==pj-1 ||tlocB==pj))){
        
          if(!(chessboard[tlocA][tlocB].innerHTML.includes('Wpeice'))){
            elemenateBlackPeice();
          chessboard[pi][pj].innerHTML=null;
          chessboard[tlocA][tlocB].innerHTML=store;
          whiteKing=chessboard[tlocA][tlocB];
          updateMove(whiteset[3]);
          store=null;
          pi=null;
          pj=null;
          c=0;
          wLCastle=false;
          wRCastle=false;
        }
        
          
        else{
          illegalMove(1);
        }
      }
      else if(((tlocA==0 && tlocB==1)&&((chessboard[0][1].innerHTML=="" && chessboard[0][2].innerHTML=="")&&wLCastle===1))){
        chessboard[pi][pj].innerHTML=null;
        chessboard[tlocA][tlocB].innerHTML=store;
        whiteKing=chessboard[tlocA][tlocB];
        chessboard[0][2].innerHTML=chessboard[0][0].innerHTML;
        store=null;
        chessboard[0][0].innerHTML=null;
        pi=null;
        pj=null;
        c=0;
        wLCastle=false;
        wRCastle=false;
        updateMove(whiteset[3]);
      }
      else if(((tlocA==0 && tlocB==5)&&((chessboard[0][6].innerHTML=="" && chessboard[0][5].innerHTML=="" && chessboard[0][4].innerHTML=="")&&wRCastle===true))){
        chessboard[pi][pj].innerHTML=null;
        chessboard[tlocA][tlocB].innerHTML=store;
        whiteKing=chessboard[tlocA][tlocB];
        chessboard[0][4].innerHTML=chessboard[0][7].innerHTML;
        store=null;
        chessboard[0][7].innerHTML=null;
        pi=null;
        pj=null;
        c=0;
        wLCastle=false;
        wRCastle=false;
        updateMove(whiteset[3]);
      }
      else{
        illegalMove(1);
      }
    }
    else if(tomove==="bk"){
      if((tlocA==pi+1 || tlocA==pi-1 ||tlocA==pi )&&(tlocB==pj+1 ||tlocB==pj-1 ||tlocB==pj)){
        
          if(!(chessboard[tlocA][tlocB].innerHTML.includes('bpeice'))){chessboard[pi][pj].innerHTML=null;
            elemenateWhitePeice()
          chessboard[tlocA][tlocB].innerHTML=store;
          blackKing=chessboard[tlocA][tlocB];
          updateMove(Blackset[4]);
          store=null;
          pi=null;
          pj=null;
          c=0;}
          else{
            illegalMove(2);
          }
        
      }
      else if(((tlocA==7 && tlocB==6)&&((chessboard[7][5].innerHTML=="" && chessboard[7][6].innerHTML=="")&&bRCastle===1))){
        chessboard[pi][pj].innerHTML=null;
        chessboard[tlocA][tlocB].innerHTML=store;
        blackKing=chessboard[tlocA][tlocB];
        chessboard[7][5].innerHTML=chessboard[7][7].innerHTML;
        store=null;
        chessboard[7][7].innerHTML=null;
        pi=null;
        pj=null;
        c=0;
        wLCastle=false;
        wRCastle=false;
        updateMove(Blackset[4]);
      }
      else if(((tlocA==7 && tlocB==2)&&((chessboard[7][1].innerHTML=="" && chessboard[7][2].innerHTML=="" && chessboard[7][3].innerHTML=="")&&bLCastle===1))){
        chessboard[pi][pj].innerHTML=null;
        chessboard[tlocA][tlocB].innerHTML=store;
        blackKing=chessboard[tlocA][tlocB];
        chessboard[7][3].innerHTML=chessboard[7][0].innerHTML;
        store=null;
        chessboard[7][0].innerHTML=null;
        pi=null;
        pj=null;
        c=0;
        wLCastle=false;
        wRCastle=false;
        updateMove(Blackset[4]);
      }
      else{
        illegalMove(2);
      }
    }
    else if(tomove==="wr"){
      console.log("rook");
      for(let i = pi+1; i < 8 ; ++i){
        console.log("enter in loop")
        if(chessboard[i][pj].innerHTML.trim()!=""){
          let d = chessboard[i][pj].innerHTML;
          if(d.includes("Wpeice")){
            console.log("enter in loop 1if")
            iuptill= i-1;
            console.log("iuptill")
          break;}
          else{
            iuptill = i;
            i=8;
          }
        }
      }
      if(pi ==0){
        idtill=0;
      }
      else{
        dval = pi-1;
        for(let i= dval; i>=0;--i){
          console.log("in -vei loop");
          if(chessboard[i][pj].innerHTML.trim()!=""){
            let d = chessboard[i][pj].innerHTML;
            if(d.includes("Wpeice")){
              idtill = i+1;
              break;
            }
            else{
              idtill = i;
              i=-1;
              break;
            }
            
          }idtill=i;
        }
      }
      if(pj==7){
        juptill=7;
      }
      else{
        for(let j = pj+1;j<8;j++){
          if(chessboard[pi][j].innerHTML.trim()!=""){
            let d = chessboard[pi][j].innerHTML;
            if(d.includes("Wpeice")){
              console.log("triggered");
              juptill=j-1;
              break;
            }
            else{
              juptill=j;
              break; 
            }
            
          }
          juptill=j;
        }
      }
      if(pj ==0){
        jdtill=pj;
      }
      else{
        dval = pj-1;
        for(let j= dval; j>=0;j--){
          console.log("in -vei loop");
          if(chessboard[pi][j].innerHTML.trim()!=""){
            let d = chessboard[pi][j].innerHTML;
            if(d.includes("Wpeice")){
              jdtill = j+1;
              break;
            }
            else{
              jdtill = j;
              break
              // j=-1;
            }
          }
          jdtill=j;
        }
      }
      
      console.log("pi,pj,tlocA,tlocB,iuptill,idtill,juptill,jdtill",pi,pj,tlocA,tlocB,iuptill,idtill,juptill,jdtill);   
      // if((tlocA==pi && (tlocB>=jdtill && tlocB<=juptill))||((tlocB==pj)&&(tlocA>=idtill && tlocA<=iuptill))){
        if((tlocA>=idtill&&  tlocA<=iuptill)&&(tlocB>=jdtill && tlocB<=juptill)&&((pi!=tlocA && pj==tlocB)||(tlocA==pi && pj!=tlocB))){
        console.log("moving rook");
        elemenateBlackPeice();
        chessboard[pi][pj].innerHTML=null;
          chessboard[tlocA][tlocB].innerHTML=store;
          store=null;
          updateMove(whiteset[0]);
          c=0;
      }
      else{
        illegalMove(1);
      }
    }
    else if(tomove==="br"){
      console.log("rook");
      if(pi==7){ iuptill = 7;}
      
      else{
      for(let i = pi+1; i < 8 ; ++i){
        console.log("enter in loop",i)
        if(chessboard[i][pj].innerHTML.trim()!=""){
          let d = chessboard[i][pj].innerHTML;
          if(d.includes("bpeice")){
            console.log("enter in loop 1if")
            iuptill= i-1;
            console.log("iuptill")
          break;}
          else{
            iuptill = i;
            break;
          }
        } iuptill =i;
      }
    }
      if(pi ==0){
        idtill=0;
      }
      else{
        dval = pi-1;
        for(let i= dval; i>=0;--i){
          console.log("in -vei loop");
          if(chessboard[i][pj].innerHTML.trim()!=""){
            let d = chessboard[i][pj].innerHTML;
            if(d.includes("bpeice")){
              idtill = i+1;
              break;
            }
            else{
              idtill = i;
              i=-1;
              break;
            }
            
          }idtill=i;
        }
      }
      if(pj == 7){juptill=7;}
      else{
      for(let j = pj+1;j<8;j++){
        if(chessboard[pi][j].innerHTML.trim()!=""){
          let d = chessboard[pi][j].innerHTML;
          if(d.includes("bpeice")){
            console.log("triggered");
            juptill=j-1;
            break;
          }
          else{
            juptill=j;
            break; 
          }
          
        }
        juptill=j;
      }}
      if(pj ==0){
        jdtill=0;
      }
      else{
        dval = pj-1;
        for(let j= dval; j>=0;--j){
          console.log("in -vei loop");
          if(chessboard[pi][j].innerHTML.trim()!=""){
            let d = chessboard[pi][j].innerHTML;
            if(d.includes("bpeice")){
              jdtill = j+1;
              break;
            }
            else{
              jdtill = j;
              j=-1;
              break;
            }
          }
          jdtill=j;
        }
      }
      
      console.log("pi,pj,tlocA,tlocB,iuptill,idtill,juptill,jdtill",pi,pj,tlocA,tlocB,iuptill,idtill,juptill,jdtill);   
      // if((tlocA==pi && (tlocB>=jdtill && tlocB<=juptill))||((tlocB==pj)&&(tlocA>=idtill && tlocA<=iuptill))){
        if((tlocA>=idtill&&  tlocA<=iuptill)&&(tlocB>=jdtill && tlocB<=juptill)&&((pi!=tlocA && pj==tlocB)||(tlocA==pi && pj!=tlocB))){
        console.log("moving rook");
        elemenateWhitePeice()
        chessboard[pi][pj].innerHTML=null;
          chessboard[tlocA][tlocB].innerHTML=store;
          store=null;
          updateMove(Blackset[0]);
          c=0;
      }
      else{
        illegalMove(2);
      }
    }
  }
  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  delay(300) 
    .then(() => {
      checkking(); 
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
  
  
}
