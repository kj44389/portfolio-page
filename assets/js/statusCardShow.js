export function showCard(cardInfo, cardStatus){
      const card = document.querySelector('.send-status-card');
      let statusInfo = document.querySelector('.send-info');
      let statusImage = document.querySelector('.send-image');
      let image = document.createElement('i')
      if(cardStatus === true){
            card.classList.add('success-card');
            image.classList.add('fas')
            image.classList.add('fa-thumbs-up');
            statusImage.appendChild(image);
            statusInfo.textContent = cardInfo;
            card.classList.add('card-visible')
            setTimeout(()=>{
                  clearCard();
            },3000)
      }else{
            card.classList.add('error-card');
            image.classList.add('fas')
            image.classList.add('fa-exclamation-triangle');
            statusImage.appendChild(image);
            statusInfo.textContent = cardInfo;
            card.classList.add('card-visible')
            setTimeout(()=>{
                  clearCard();
            },3000)
      }
}

export function clearCard(){
      if(document.querySelector('.send-status-card').classList.contains('card-visible')){
            const card = document.querySelector('.send-status-card');
            card.classList.remove('card-visible');
            let image = document.querySelector('.send-status-card > .send-image > i');
            let statusInfo = document.querySelector('.send-status-card > .send-info');
            image.remove();
            statusInfo.textContent = "";
            if(card.classList.contains('success-card')){
                  card.classList.remove('success-card')
            }
            else{
                  card.classList.remove('error-card')
            }
      }
}