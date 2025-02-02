import axios from "axios";

export default async function controleDadosImagem(valorImagens) {
    let valorNomesImagens = valorImagens.map((imagem) => {
        const valorUnico = Date.now() + Math.floor(Math.random() * 1000);
        const extensao = imagem.name.split('.').pop();
        const novoNomeImagem = `imagem_${valorUnico}.${extensao}`;

        // Cria um novo objeto File com o novo nome
        const novoArquivo = new File([imagem], novoNomeImagem, { type: imagem.type });

        // Atualiza o arquivo na lista de imagens
        imagem = novoArquivo;

        return novoNomeImagem;
    }).join(',');

    const enviarImagensApi = async (valorImagens) => {
        const formData = new FormData();
        valorImagens.forEach((imagem) => {
            formData.append('imagens', imagem);
        });

        try {
            const response = await axios.post('http://localhost:8080/api/uploadImagem/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            //console.log('Resposta do servidor:', response.data);
            //console.log(formData)
            //console.log('Imagens enviadas com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar as imagens:', error);
            //console.log(formData)
            alert('Erro ao enviar as imagens.');
        }
    };

    await enviarImagensApi(valorImagens);
    return valorNomesImagens;
}
