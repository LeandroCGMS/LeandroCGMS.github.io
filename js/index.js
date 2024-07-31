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
            result = await fetch(urlToGet)
            const contentType = await result.headers.get('content-type')
            if (contentType.includes('application/json') || contentType.includes('text/')) {
                const text = await result.text()
                $('#divResult').show()
                $('#divTextResult').text(text)
                console.log(`texto -> ${text}`)
            } else if (contentType.includes('image/')) {
                return response.blob();
            } else {

            }
        } catch (error) {
            console.error(`Ocorreu um erro -> `, error, `\n\nStack ⬇️\n\n`, error.stack)
            $('#divResult').show()
            $('#errorFetch').text(`Ocorreu um erro ao tentar pegar conteúdo do site/arquivo/mídia informado. Provavelmente é por política de CORS, veja o erro abaixo 👇\n\n`, error)
        }

    })
    $('#btnCloseWelcome, #iconCloser').on('click', () => {
        $('#welcome').hide()
    })
    $('#btnCloseDivResult, #iconCloserDivResult').on('click', () => {
        $('#divResult').hide()
    })
})
