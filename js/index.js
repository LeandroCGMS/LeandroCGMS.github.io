$(window).ready(() => {
    $('#divResult').hide()
    let stateButton = false
    $('#mainBtn').on('click', async () => {
        const urlToGet = $('#mainTextArea').val()
        // fetch("https://raw.githubusercontent.com/LeandroCGMS/LeandroCGMS.github.io/main/Familia.txt")
        // .then(async function (response) {
        //     if(response.ok){
        //         let text = await response.text()
        //         alert(`Os nomes contidos no arquivo do endereço descrito são:\n\n`+text)
        //         $('#mainTextArea').text(`Aqui também eles são exibidos:\n\n`+text)
        //     } else {
        //         alert('Ocorreu um erro ao tentar acessar o endereço web informado -> \n')
        //     }
        // }).catch(error => {
        //     console.error(error)
        // })
        try {
            $('#divTextResult').text("")
            // $('#twinsImage').attr('src', "src/images/muichiro-and-yuichiro-tokito-from-demon-slayer.avif")
            $('#spinner').show()
            result = await fetch(urlToGet)
            $('#spinner').hide()
            const contentType = await result.headers.get('content-type')
            if (contentType.includes('application/json') || contentType.includes('text/')) {
                const text = await result.text()
                $('#divResult').show()
                $('#divTextResult').text(text)
            } else if (contentType.includes('image/')) {
                $('#divRestartAlt').show()
                $('#spinner').show()
                const image = await result.blob()
                var reader = new FileReader()
                reader.readAsDataURL(image)
                reader.onloadend = function () {
                    var base64data = reader.result
                    $('#twinsImage').attr('src', base64data)
                    $('#spinner').hide()
                }
                // https://images.unsplash.com/photo-1547721064-da6cfb341d50
            } else {

            }
        } catch (error) {
            console.error(`Ocorreu um erro -> `, error, `\n\nStack ⬇️\n\n`, error.stack)
            $('#divResult').show()
            $('#errorFetch').text(`Ocorreu um erro ao tentar pegar conteúdo do site/arquivo/mídia informado. Provavelmente é por política de CORS, veja o erro no concole.`)
        }

    })
    $('#btnCloseWelcome, #iconCloser').on('click', () => {
        $('#welcome').hide()
    })
    $('#btnCloseDivResult, #iconCloserDivResult').on('click', () => {
        $('#divResult').hide()
    })
    $('#divRestartAlt').on('click', () => {
        $('#twinsImage').attr('src', "src/images/muichiro-and-yuichiro-tokito-from-demon-slayer.avif")
        $('#divRestartAlt').hide()
    })
    $('#divRestartAlt').css({
        'display': 'none',
        'border-radius': '100%',
        // 'padding': '0.5em',
        'cursor': 'pointer',
        // 'border': '4px solid black',
        'padding-bottom': '1em',
        'margin-top': '0',
        'justify-content': 'center',
        'align-items': 'center',
        'font-size': '30pt',
        'font-weight': 'bold'
    })
    $('#divRestartAlt').hover(function () {
        // $(this).removeClass('bg-success')
        $(this).css({
            // 'background-color': 'green',
            'zoom': '105%'
        })
    })
    $('#divRestartAlt').on('mouseout', function () {
        // $(this).addClass('bg-success')
        $(this).css({
            'zoom': '100%'
        })
    })
    $('#divPrimeiroCampoRegraTres').focus()
    $('#divPrimeiroCampoRegraTres, #divSegundoCampoRegraTres, #divTerceiroCampoRegraTres').on('keyup', (element) => {
        const target = element.target
        if(target.value.match(/\D/gmi)){
            target.value = target.value.replace(/[^\d.]/gmi, '')
        }
    })
    /*
        #divRestartAlt {
            display: none;
            border-radius: 100%;
            padding: 0.5em;
            cursor: pointer;
            border: 4px solid black;
        }
    */
})
