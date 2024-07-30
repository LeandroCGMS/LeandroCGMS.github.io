$(window).ready(() => {
    let stateButton = false
    setTimeout(() => {
        alert('Bem vindas à programação, Ana Carolina e Camila.')
    }, 100)
    $('#mainBtn').on('click', () => {
        if(!stateButton){
            fetch("https://raw.githubusercontent.com/LeandroCGMS/LeandroCGMS.github.io/main/Familia.txt")
            .then(async function (response) {
                if(response.ok){
                    let text = await response.text()
                    alert(`Os nomes contidos no arquivo do endereço descrito são:\n\n`+text)
                    $('#mainTextArea').text(`Aqui também eles são exibidos:\n\n`+text)
                } else {
                    alert('Ocorreu um erro ao tentar acessar o endereço web informado -> \n')
                }
            }).catch(error => {
                console.error(error)
            })
        } else {
            alert('Agora, vamos limpar o resultado para tentar novamente.')
            $('#mainTextArea').text("")
        }
        stateButton = !stateButton
        
    })
})
