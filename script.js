function cadastrarEncomenda() {
    const fotoInput = document.getElementById('foto-encomenda');
    const destinatario = document.getElementById('destinatario').value;

    if (fotoInput.files.length > 0 && destinatario) {
        const foto = fotoInput.files[0];
        // Simula o envio de notificação
        document.getElementById('mensagens').innerText = `Encomenda cadastrada para ${destinatario}. Notificação enviada!`;
    } else {
        alert('Por favor, selecione uma foto e insira o nome do destinatário.');
    }
}

function darBaixa() {
    const destinatario = document.getElementById('destinatario-retirada').value;
    const quemRetirou = document.getElementById('quem-retirou').value;

    if (destinatario && quemRetirou) {
        document.getElementById('mensagens').innerText = `Retirada registrada: ${destinatario} - Retirado por: ${quemRetirou}`;
    } else {
        alert('Por favor, insira o nome do destinatário e quem retirou a encomenda.');
    }
}
