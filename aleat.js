console.log('added all files')

const commingM = () => {
    alert ('Mom comming!! Open the book.')
}
const goingP = () => {
  const response=  confirm ('You go to picnick')
  console.log(response)
     if ( response === true){
         alert( 'taka de amar ka se bkash kore')
     }else{
         console.log('dure gia mor')
     }

}

const askName = () => {
    const name = prompt (
        'Whats your name'
    )
    if( name){
        console.log(name)
    }
}