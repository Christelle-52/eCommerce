productScroll();
productScroll2();
        
        function productScroll() {
          let slider1 = document.getElementById("slider1");
          let next1 = document.getElementById("pro-next1");
          let prev1 = document.getElementById("pro-prev1");
          let slide1 = document.getElementById("slide1");
          let item1 = document.getElementById("slide1");
        
            let position1 = 0; //slider postion
        
            prev1.addEventListener("click", function() {
              //click previos button
              if (position1 > 0) {
                //avoid slide left beyond the first item
                position1 -= 1;
                translateX1(position1); //translate items
              }
            });
        
            next1.addEventListener("click", function() {
              if (position1 >= 0 && position1 < hiddenItems1()) {
                //avoid slide right beyond the last item
                position1 += 1;
                translateX1(position1); //translate items
              }
            });
        
          function hiddenItems1() {
            //get hidden items
            let items1 = getCount1(item1, false);
            let visibleItems1 = slider1.offsetWidth / 260;
            return items1 - Math.ceil(visibleItems1);
          }
        }
        
        function translateX1(position1) {
          //translate items
          slide1.style.left = position1 * -260 + "px";
        }
        
        function getCount1(parent, getChildrensChildren) {
          //count no of items
          let relevantChildren1 = 0;
          let children1 = 8;
          for (let i = 0; i < children1; i++) {
            if (parent.childNodes[i].nodeType != 4) { //nombre articles en dehors
              if (getChildrensChildren)
                relevantChildren1 += getCount(parent.childNodes[i], true);
              relevantChildren1++;
            }
          }
          return relevantChildren1;
        }

        /*PARTIE 2*/
        function productScroll2() {
          let slider2 = document.getElementById("slider2");
          let next2 = document.getElementById("pro-next2");
          let prev2 = document.getElementById("pro-prev2");
          let slide2 = document.getElementById("slide2");
          let item2 = document.getElementById("slide2");
        
            let position2 = 0; //slider postion
        
            prev2.addEventListener("click", function() {
              //click previos button
              if (position2 > 0) {
                //avoid slide left beyond the first item
                position2 -= 1;
                translateX2(position2); //translate items
              }
            });
        
            next2.addEventListener("click", function() {
              if (position2 >= 0 && position2 < hiddenItems2()) {
                //avoid slide right beyond the last item
                position2 += 1;
                translateX2(position2); //translate items
              }
            });
        
          function hiddenItems2() {
            //get hidden items
            let items2 = getCount2(item2, false);
            let visibleItems2 = slider2.offsetWidth / 260;
            return items2 - Math.ceil(visibleItems2);
          }
        }
        
        function translateX2(position2) {
          //translate ite
          slide2.style.left = position2 * -260 + "px";
        }
        
        function getCount2(parent, getChildrensChildren) {
          //count no of items
          let relevantChildren2 = 0;
          let children2 = 7;
          for (let i = 0; i < children2; i++) {
            if (parent.childNodes[i].nodeType != 4) { //nombre articles en dehors
              if (getChildrensChildren)
                relevantChildren2 += getCount2(parent.childNodes[i], true);
              relevantChildren2++;
            }
          }
          return relevantChildren2;
        }



        // function verifForm() { 
        //   // déclaration de variables à tester
        //   let nom = document.getElementById("nom");
        //   let prenom = document.getElementById("prenom");
        //   let dateNaissance = document.getElementById("dateNaissance").value;
        //   let email = document.getElementById("email").value;
        //   let mdp = document.getElementById("mdp").value;
        //   let confirmMdp = document.getElementById("confirmMdp").value;
          
        //   //déclaration des variables de renvoi d'erreurs
        //   let erreurNom = document.getElementById("erreurNom");
        //   let erreurPrenom = document.getElementById("erreurPrenom");
        //   let erreurDateNai = document.getElementById("erreurDateNai");
        //   let erreurEmail = document.getElementById("erreurEmail");
        //   let erreurMdp = document.getElementById("erreurMdp");
        //   let erreurConfirmMdp = document.getElementById("erreurConfirmMdp");
          
        //   //regex de vérification email, mdp, date de naissance, lieu de naissance
        //   let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
        //   let regexPassword = /^((?=.*[\d])(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*[\d])(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*[\d])(?=.*[a-z]) (?=.*[^\w\d\s])).{5,}$/.test(mdp);
        //   let regexDate = /^(((0[1-9]|[12]\d|3[01])[/](0[13578]|1[02])[/]((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)[/](0[13456789]|1[012])[/]((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])[/]02[/]((19|[2-9]\d)\d{2}))|(29[/]02[/]((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/.test(dateNaissance);
          
        //   // test de la longueur du nom 
        //   if (nom.value.length<=3){
        //       erreurNom.innerText="Vous devez saisir votre nom";
        //       nom.value = "";
        //   }else{
        //       erreurNom.innerText="";
        //   }
        //   // test de la longueur du prénom 
        //   if (prenom.value.length<=3){
        //       erreurPrenom.innerText="Vous devez saisir votre prénom";
        //       prenom.value ="";
        //   }else{
        //       erreurPrenom.innerText="";
        //   }
        //   // test regex du format dd/mm/aaaa de la date de naissance
        //   if(!regexDate){
        //       erreurDateNai.innerText="La date de naissance doit impérativement être au format dd/mm/aaaa";
        //   }else{
        //       erreurDateNai.innerText="";
        //   }
          
        //   // test du format de email avec @ et .com, .fr ...
        //   if(!regexEmail){
        //       erreurEmail.innerText="Vous devez saisir votre email";
        //   }else{
        //       erreurEmail.innerText="";
        //   }
        //   //test regex format mot de passe 5 min + 1 M + 1 chiffre + 1 car spé
        //   if(!regexPassword){
        //       erreurMdp.innerText="Vous devez saisir un mdp valide (5 caractères minimum, 1 majuscule, 1 symbole (#,?,!,@,$,%,^,&,*ou-) et 1 chiffre";
        //   }else{
        //       erreurMdp.innerText="";
        //   }
        //   // test confirmation mdp
        //   if(confirmMdp !== mdp){
        //       erreurConfirmMdp.innerText="Vous devez confirmer votre mot de passe";
        //   }else{
        //       erreurConfirmMdp.innerText="";
        //   }
         
        //   if (prenom.length<=3 || nom.length<=3 || presentation.length<=10 ||!regexEmail ||!regexPassword || confirmMdp !== mdp || !regexDate){
        //       return false;
        //   }
        //   };