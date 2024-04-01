function Avaliar(estrela) 
{
    // -----------  PARAMS ------------------------  //
    const STAR_ONE = document.querySelector('#s1').src
    const STAR_TWO = document.querySelector('#s2').src
    const STAR_TREE = document.querySelector('#s3').src
    const STAR_FOUR = document.querySelector('#s4').src
    const STAR_FIVE = document.querySelector('#s5').src


    const URL_HOST = window.location['host']
    const URL_IMG = 'http://' + URL_HOST + '/assets/star1.png'
    
    // FIST STAR 

    if(estrela == 1)
    {
        document.querySelector('#s1').src = '/assets/star1.png'
        document.querySelector('#s2').src = '/assets/star0.png'
        document.querySelector('#s3').src = '/assets/star0.png'
        document.querySelector('#s4').src = '/assets/star0.png'
        document.querySelector('#s5').src = '/assets/star0.png'
    }

    // SECOND STAR

    if(estrela == 2)
    {
        document.querySelector('#s1').src = '/assets/star1.png'
        document.querySelector('#s2').src = '/assets/star1.png'
        document.querySelector('#s3').src = '/assets/star0.png'
        document.querySelector('#s4').src = '/assets/star0.png'
        document.querySelector('#s5').src = '/assets/star0.png'
    }

    // THIRD STAR 

    if(estrela == 3)
    {
        document.querySelector('#s1').src = '/assets/star1.png'
        document.querySelector('#s2').src = '/assets/star1.png'
        document.querySelector('#s3').src = '/assets/star1.png'
        document.querySelector('#s4').src = '/assets/star0.png'
        document.querySelector('#s5').src = '/assets/star0.png'
    }

    if(estrela == 4)
    {
        document.querySelector('#s1').src = '/assets/star1.png'
        document.querySelector('#s2').src = '/assets/star1.png'
        document.querySelector('#s3').src = '/assets/star1.png'
        document.querySelector('#s4').src = '/assets/star1.png'
        document.querySelector('#s5').src = '/assets/star0.png'
    }

    if(estrela == 5)
    {
        document.querySelector('#s1').src = '/assets/star1.png'
        document.querySelector('#s2').src = '/assets/star1.png'
        document.querySelector('#s3').src = '/assets/star1.png'
        document.querySelector('#s4').src = '/assets/star1.png'
        document.querySelector('#s5').src = '/assets/star1.png'
    }
}