USE `Web-Cars`;

-- Populando a tabela endereco
INSERT INTO `endereco` (`estado`, `cidade`, `bairro`, `rua`) VALUES
('Rondônia', 'Vilhena', 'Centro', 'Rua A'),
('São Paulo', 'São Paulo', 'Jardins', 'Rua B'),
('Rio de Janeiro', 'Rio de Janeiro', 'Copacabana', 'Avenida Atlântica');

-- Populando a tabela concessionaria
INSERT INTO `concessionaria` (`nome_concessionaria`, `cnpj_concessionaria`, `email_concessionaria`, `telefone_concessionaria`, `imagem_concessionaria`, `endereco_id_endereco`) VALUES
('Concessionária Vilhena', '12345678000100', 'vilhena@carros.com', '(69) 1234-5678', 'imagem1.jpg', 1),
('Concessionária SP', '98765432000100', 'sp@carros.com', '(11) 9876-5432', 'imagem2.jpg', 2),
('Concessionária RJ', '56789012000100', 'rj@carros.com', '(21) 7654-3210', 'imagem3.jpg', 3);

-- Populando a tabela cor
INSERT INTO `cor` (`nome_cor`) VALUES
('Vermelho'),
('Azul'),
('Preto'),
('Branco');

-- Populando a tabela aro
INSERT INTO `aro` (`nome_aro`) VALUES
('15'),
('16'),
('17'),
('18');

-- Populando a tabela categoria
INSERT INTO `categoria` (`nome_categoria`) VALUES
('SUV'),
('Sedan'),
('Hatch'),
('Picape');

-- Populando a tabela marca
INSERT INTO `marca` (`nome_marca`) VALUES
('Toyota'),
('Honda'),
('Ford'),
('Chevrolet');

-- Populando a tabela modelo
INSERT INTO `modelo` (`nome_modelo`, `marca_id_marca`, `categoria_id_categoria`) VALUES
('Corolla', 1, 2),
('Civic', 2, 2),
('Ranger', 3, 4),
('Trailblazer', 4, 1);

-- Populando a tabela combustivel
INSERT INTO `combustivel` (`nome_combustivel`) VALUES
('Gasolina'),
('Álcool'),
('Diesel'),
('Flex');

-- Populando a tabela cambio
INSERT INTO `cambio` (`nome_cambio`) VALUES
('Manual'),
('Automático');

-- Populando a tabela anuncioCarro
INSERT INTO `anuncioCarro` (`ano`, `condicao`, `valor`, `ipva_pago`, `data_ipva`, `data_compra`, `detalhes_veiculo`, `blindagem`, `cor_id_cor`, `aro_id_aro`, `categoria_id_categoria`, `marca_id_marca`, `modelo_id_modelo`, `combustivel_id_combustivel`, `cambio_id_cambio`, `concessionaria_id_concessionaria`, `concessionaria_endereco_id_endereco`) VALUES
(2022, 'Novo', 150000.00, 1, '2024-01-01', '2023-12-01', 'Carro com baixa quilometragem', 0, 1, 3, 2, 1, 1, 1, 2, 1, 1),
(2020, 'Usado', 90000.00, 0, NULL, '2023-01-01', 'Bem conservado', 0, 2, 2, 2, 2, 2, 4, 1, 2, 2),
(2023, 'Novo', 250000.00, 1, '2024-01-01', '2023-10-01', 'Blindado, alto padrão', 1, 3, 4, 1, 4, 4, 3, 2, 3, 3);

-- Populando a tabela cliente
INSERT INTO `cliente` (`nome_cliente`, `cpf_cliente`, `email_cliente`, `telefone_cliente`, `imagem_cliente`) VALUES
('João da Silva', '12345678900', 'joao@gmail.com', '(69) 91234-5678', 'joao.jpg'),
('Maria Oliveira', '98765432100', 'maria@gmail.com', '(11) 99876-5432', 'maria.jpg'),
('Carlos Santos', '56789012300', 'carlos@gmail.com', '(21) 97654-3210', 'carlos.jpg');

-- Populando a tabela filtroAlerta
INSERT INTO `filtroAlerta` (`ano`, `condicao`, `ipva_pago`, `data_ipva`, `data_compra`, `valor_maximo`, `valor_minimo`, `cor_id_cor`, `cambio_id_cambio`, `aro_id_aro`, `categoria_id_categoria`, `marca_id_marca`, `modelo_marca_id_marca`, `cliente_id_cliente`, `combustivel_id_combustivel`) VALUES
(2022, 'Novo', 1, '2024-01-01', NULL, 160000.00, 140000.00, 1, 2, 3, 2, 1, 1, 1, 1),
(NULL, 'Usado', NULL, NULL, NULL, 100000.00, 80000.00, 2, 1, 2, 2, 2, 2, 2, 4);

-- Populando a tabela imagensCarro
INSERT INTO `imagensCarro` (`id_imagensCarro`, `nome_imagensCarro`, `anuncioCarro_id_anuncioCarro`) VALUES
(1, 'corolla1.jpg', 1),
(2, 'civic1.jpg', 2),
(3, 'trailblazer1.jpg', 3);

COMMIT;
