productScroll();
        
        function productScroll() {
          let slider = document.getElementById("slider");
          let next = document.getElementsByClassName("pro-next");
          let prev = document.getElementsByClassName("pro-prev");
          let slide = document.getElementById("slide");
          let item = document.getElementById("slide");
        
          for (let i = 0; i < next.length; i++) {
            //refer elements by class name
        
            let position = 0; //slider postion
        
            prev[i].addEventListener("click", function() {
              //click previos button
              if (position > 0) {
                //avoid slide left beyond the first item
                position -= 1;
                translateX(position); //translate items
              }
            });
        
            next[i].addEventListener("click", function() {
              if (position >= 0 && position < hiddenItems()) {
                //avoid slide right beyond the last item
                position += 1;
                translateX(position); //translate items
              }
            });
          }
        
          function hiddenItems() {
            //get hidden items
            let items = getCount(item, false);
            let visibleItems = slider.offsetWidth / 260;
            return items - Math.ceil(visibleItems);
          }
        }
        
        function translateX(position) {
          //translate items
          slide.style.left = position * -260 + "px";
        }
        
        function getCount(parent, getChildrensChildren) {
          //count no of items
          let relevantChildren = 0;
          let children = parent.childNodes.length;
          for (let i = 0; i < children; i++) {
            if (parent.childNodes[i].nodeType != 4) { //nombre articles en dehors
              if (getChildrensChildren)
                relevantChildren += getCount(parent.childNodes[i], true);
              relevantChildren++;
            }
          }
          return relevantChildren;
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