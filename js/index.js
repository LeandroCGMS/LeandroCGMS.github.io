$(window).ready(() => {
    let stateButton = false
    $('#mainBtn').on('click', async () => {
        const urlToGet = $('#mainTextArea').val()
        if (!stateButton) {
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
                const contentType = response.headers.get('content-type')
                if (contentType.includes('application/json')) {
                    return response.json();
                } else if (contentType.includes('text/')) {
                    return response.text();
                } else if (contentType.includes('image/')) {
                    return response.blob();
                } else {
                    
                }
            } catch (error) {

            }
        } else {
            alert('Agora, vamos limpar o resultado para tentar novamente.')
            $('#mainTextArea').text("")
        }
        stateButton = !stateButton

    })
    $('#btnCloseWelcome, #iconCloser').on('click', () => {
        console.log('fechou')
        $('#welcome').hide()
    })
})
