let encomendasPendentes = {
    "C12": [],
    "D34": [],
    "E56": [],
};

function mostrarSeção(seção) {
    document.getElementById('encomenda-section').style.display = 'none';
    document.getElementById('retirada-section').style.display = 'none';
    if (seção === 'cadastrar') {
        document.getElementById('encomenda-section').style.display = 'block';
        iniciarCamera();
    } else {
        document.getElementById('retirada-section').style.display = 'block';
        atualizarEncomendas();
    }
}

function iniciarCamera() {
    const video = document.getElementById('camera');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            video.srcObject = stream;
            video.play();
        });
    }
}

function tirarFoto() {
    const canvas = document.getElementById('foto-canvas');
    const video = document.getElementById('camera');
    const context = canvas.getContext('2d');
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.style.display = 'block';
}

function cadastrarEncomenda() {
    const destinatario = document.getElementById('destinatario').value;
    if (destinatario) {
        const novaEncomenda = `Encomenda ${encomendasPendentes[destinatario].length + 1}`;
        encomendasPendentes[destinatario].push(novaEncomenda);
        document.getElementById('mensagens').innerText = `Encomenda cadastrada para ${destinatario}.`;
    }
}

function atualizarEncomendas() {
    const destinatario = document.getElementById('destinatario-retirada').value;
    const encomendasSelect = document.getElementById('encomendas-pendentes');
    encomendasSelect.innerHTML = '';
    encomendasPendentes[destinatario].forEach(encomenda => {
        const option = document.createElement('option');
        option.textContent = encomenda;
        encomendasSelect.appendChild(option);
    });
}

function darBaixa() {
    const destinatario = document.getElementById('destinatario-retirada').value;
    const encomenda = document.getElementById('encomendas-pendentes').value;
    const quemRetirou = document.getElementById('quem-retirou').value;
    if (quemRetirou && encomenda) {
        encomendasPendentes[destinatario] = encomendasPendentes[destinatario].filter(e => e !== encomenda);
        document.getElementById('mensagens').innerText = `Encomenda ${encomenda} retirada por ${quemRetirou}.`;
        atualizarEncomendas();
    } else {
        alert('Por favor, insira o nome de quem retirou e selecione uma encomenda.');
    }
}
