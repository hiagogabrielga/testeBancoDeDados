-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Web-Cars
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Web-Cars
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Web-Cars` DEFAULT CHARACTER SET utf8 ;
USE `Web-Cars` ;

-- -----------------------------------------------------
-- Table `Web-Cars`.`Endereço`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Web-Cars`.`Endereço` (
  `idEndereço` INT NOT NULL AUTO_INCREMENT,
  `estado` VARCHAR(45) NOT NULL,
  `cidade` VARCHAR(45) NOT NULL,
  `bairro` VARCHAR(45) NOT NULL,
  `rua` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idEndereço`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Web-Cars`.`UsuarioConcessionaria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Web-Cars`.`UsuarioConcessionaria` (
  `idConcessionaria` INT NOT NULL AUTO_INCREMENT,
  `nomeConcessionaria` VARCHAR(45) NOT NULL,
  `cnpjConcessionaria` VARCHAR(45) NOT NULL,
  `emailConcessionaria` VARCHAR(45) NOT NULL,
  `telefoneConcessionaria` INT NOT NULL,
  `imagemConcessionaria` VARCHAR(45) NOT NULL,
  `Endereço_idEndereço` INT NOT NULL,
  PRIMARY KEY (`idConcessionaria`, `Endereço_idEndereço`),
  INDEX `fk_UsuarioConcessionaria_Endereço1_idx` (`Endereço_idEndereço` ASC) VISIBLE,
  CONSTRAINT `fk_UsuarioConcessionaria_Endereço1`
    FOREIGN KEY (`Endereço_idEndereço`)
    REFERENCES `Web-Cars`.`Endereço` (`idEndereço`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Web-Cars`.`Cor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Web-Cars`.`Cor` (
  `idCor` INT NOT NULL AUTO_INCREMENT,
  `nomeCor` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Web-Cars`.`Cambio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Web-Cars`.`Cambio` (
  `idCambio` INT NOT NULL AUTO_INCREMENT,
  `modeloCambio` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCambio`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Web-Cars`.`Aro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Web-Cars`.`Aro` (
  `idAro` INT NOT NULL AUTO_INCREMENT,
  `numeroAro` INT NOT NULL,
  PRIMARY KEY (`idAro`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Web-Cars`.`Categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Web-Cars`.`Categoria` (
  `idCategoria` INT NOT NULL AUTO_INCREMENT,
  `nomeCategoria` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Web-Cars`.`Marca`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Web-Cars`.`Marca` (
  `idMarca` INT NOT NULL AUTO_INCREMENT,
  `MarcaNome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idMarca`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Web-Cars`.`Modelo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Web-Cars`.`Modelo` (
  `idModelo` INT NOT NULL AUTO_INCREMENT,
  `modeloNome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idModelo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Web-Cars`.`Combustivel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Web-Cars`.`Combustivel` (
  `idCombustivel` INT NOT NULL AUTO_INCREMENT,
  `tipoCombustivel` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCombustivel`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Web-Cars`.`AnuncioCarro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Web-Cars`.`AnuncioCarro` (
  `idProduto` INT NOT NULL AUTO_INCREMENT,
  `ano` INT NOT NULL,
  `condicao` VARCHAR(45) NOT NULL,
  `valor` FLOAT NOT NULL,
  `ipvaPago` TINYINT NOT NULL,
  `dataipva` INT NOT NULL,
  `dataCompra` INT NOT NULL,
  `detalhesDoVeiculo` VARCHAR(45) NOT NULL,
  `blindagem` TINYINT NOT NULL,
  `Cor_idCor` INT NOT NULL,
  `Cambio_idCambio` INT NOT NULL,
  `Aro_idAro` INT NOT NULL,
  `Categoria_idCategoria` INT NOT NULL,
  `Marca_idMarca` INT NOT NULL,
  `Modelo_idModelo` INT NOT NULL,
  `Combustivel_idCombustivel` INT NOT NULL,
  `UsuarioConcessionaria_idConcessionaria` INT NOT NULL,
  `UsuarioConcessionaria_Endereço_idEndereço` INT NOT NULL,
  `imagemProduto` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idProduto`, `Cor_idCor`, `Cambio_idCambio`, `Aro_idAro`, `Categoria_idCategoria`, `Marca_idMarca`, `Modelo_idModelo`, `Combustivel_idCombustivel`, `UsuarioConcessionaria_idConcessionaria`, `UsuarioConcessionaria_Endereço_idEndereço`),
  INDEX `fk_AnuncioCarro_Cor1_idx` (`Cor_idCor` ASC) VISIBLE,
  INDEX `fk_AnuncioCarro_Cambio1_idx` (`Cambio_idCambio` ASC) VISIBLE,
  INDEX `fk_AnuncioCarro_Aro1_idx` (`Aro_idAro` ASC) VISIBLE,
  INDEX `fk_AnuncioCarro_Categoria1_idx` (`Categoria_idCategoria` ASC) VISIBLE,
  INDEX `fk_AnuncioCarro_Marca1_idx` (`Marca_idMarca` ASC) VISIBLE,
  INDEX `fk_AnuncioCarro_Modelo1_idx` (`Modelo_idModelo` ASC) VISIBLE,
  INDEX `fk_AnuncioCarro_Combustivel1_idx` (`Combustivel_idCombustivel` ASC) VISIBLE,
  INDEX `fk_AnuncioCarro_UsuarioConcessionaria1_idx` (`UsuarioConcessionaria_idConcessionaria` ASC, `UsuarioConcessionaria_Endereço_idEndereço` ASC) VISIBLE,
  CONSTRAINT `fk_AnuncioCarro_Cor1`
    FOREIGN KEY (`Cor_idCor`)
    REFERENCES `Web-Cars`.`Cor` (`idCor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_AnuncioCarro_Cambio1`
    FOREIGN KEY (`Cambio_idCambio`)
    REFERENCES `Web-Cars`.`Cambio` (`idCambio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_AnuncioCarro_Aro1`
    FOREIGN KEY (`Aro_idAro`)
    REFERENCES `Web-Cars`.`Aro` (`idAro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_AnuncioCarro_Categoria1`
    FOREIGN KEY (`Categoria_idCategoria`)
    REFERENCES `Web-Cars`.`Categoria` (`idCategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_AnuncioCarro_Marca1`
    FOREIGN KEY (`Marca_idMarca`)
    REFERENCES `Web-Cars`.`Marca` (`idMarca`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_AnuncioCarro_Modelo1`
    FOREIGN KEY (`Modelo_idModelo`)
    REFERENCES `Web-Cars`.`Modelo` (`idModelo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_AnuncioCarro_Combustivel1`
    FOREIGN KEY (`Combustivel_idCombustivel`)
    REFERENCES `Web-Cars`.`Combustivel` (`idCombustivel`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_AnuncioCarro_UsuarioConcessionaria1`
    FOREIGN KEY (`UsuarioConcessionaria_idConcessionaria` , `UsuarioConcessionaria_Endereço_idEndereço`)
    REFERENCES `Web-Cars`.`UsuarioConcessionaria` (`idConcessionaria` , `Endereço_idEndereço`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Web-Cars`.`filtroAlerta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Web-Cars`.`filtroAlerta` (
  `idfiltroAlerta` INT NOT NULL AUTO_INCREMENT,
  `Marca_idMarca` INT NOT NULL,
  `Modelo_idModelo` INT NOT NULL,
  `Aro_idAro` INT NOT NULL,
  `Cor_idCor` INT NOT NULL,
  `Combustivel_idCombustivel` INT NOT NULL,
  `Categoria_idCategoria` INT NOT NULL,
  `Cambio_idCambio` INT NOT NULL,
  `ano` INT NOT NULL,
  `condicao` FLOAT NOT NULL,
  `ipvaPago` TINYINT NOT NULL,
  `dataIpva` INT NOT NULL,
  `dataCompra` INT NOT NULL,
  PRIMARY KEY (`idfiltroAlerta`, `Marca_idMarca`, `Modelo_idModelo`, `Aro_idAro`, `Cor_idCor`, `Combustivel_idCombustivel`, `Categoria_idCategoria`, `Cambio_idCambio`),
  INDEX `fk_filtroAlerta_Marca1_idx` (`Marca_idMarca` ASC) VISIBLE,
  INDEX `fk_filtroAlerta_Modelo1_idx` (`Modelo_idModelo` ASC) VISIBLE,
  INDEX `fk_filtroAlerta_Aro1_idx` (`Aro_idAro` ASC) VISIBLE,
  INDEX `fk_filtroAlerta_Cor1_idx` (`Cor_idCor` ASC) VISIBLE,
  INDEX `fk_filtroAlerta_Combustivel1_idx` (`Combustivel_idCombustivel` ASC) VISIBLE,
  INDEX `fk_filtroAlerta_Categoria1_idx` (`Categoria_idCategoria` ASC) VISIBLE,
  INDEX `fk_filtroAlerta_Cambio1_idx` (`Cambio_idCambio` ASC) VISIBLE,
  CONSTRAINT `fk_filtroAlerta_Marca1`
    FOREIGN KEY (`Marca_idMarca`)
    REFERENCES `Web-Cars`.`Marca` (`idMarca`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_filtroAlerta_Modelo1`
    FOREIGN KEY (`Modelo_idModelo`)
    REFERENCES `Web-Cars`.`Modelo` (`idModelo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_filtroAlerta_Aro1`
    FOREIGN KEY (`Aro_idAro`)
    REFERENCES `Web-Cars`.`Aro` (`idAro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_filtroAlerta_Cor1`
    FOREIGN KEY (`Cor_idCor`)
    REFERENCES `Web-Cars`.`Cor` (`idCor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_filtroAlerta_Combustivel1`
    FOREIGN KEY (`Combustivel_idCombustivel`)
    REFERENCES `Web-Cars`.`Combustivel` (`idCombustivel`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_filtroAlerta_Categoria1`
    FOREIGN KEY (`Categoria_idCategoria`)
    REFERENCES `Web-Cars`.`Categoria` (`idCategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_filtroAlerta_Cambio1`
    FOREIGN KEY (`Cambio_idCambio`)
    REFERENCES `Web-Cars`.`Cambio` (`idCambio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Web-Cars`.`UsuarioComum`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Web-Cars`.`UsuarioComum` (
  `idCliente` INT NOT NULL AUTO_INCREMENT,
  `nomeCliente` VARCHAR(45) NOT NULL,
  `cpfCliente` VARCHAR(45) NOT NULL,
  `emailCliente` VARCHAR(45) NOT NULL,
  `telefoneCliente` INT NOT NULL,
  `filtroAlerta_idfiltroAlerta` INT NOT NULL,
  `imagemCliente` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCliente`, `filtroAlerta_idfiltroAlerta`),
  INDEX `fk_UsuarioComum_filtroAlerta1_idx` (`filtroAlerta_idfiltroAlerta` ASC) VISIBLE,
  CONSTRAINT `fk_UsuarioComum_filtroAlerta1`
    FOREIGN KEY (`filtroAlerta_idfiltroAlerta`)
    REFERENCES `Web-Cars`.`filtroAlerta` (`idfiltroAlerta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Web-Cars`.`AnuncioCarro_has_UsuarioComum`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Web-Cars`.`AnuncioCarro_has_UsuarioComum` (
  `AnuncioCarro_idProduto` INT NOT NULL,
  `AnuncioCarro_Cor_idCor` INT NOT NULL,
  `AnuncioCarro_Cambio_idCambio` INT NOT NULL,
  `AnuncioCarro_Aro_idAro` INT NOT NULL,
  `AnuncioCarro_Categoria_idCategoria` INT NOT NULL,
  `AnuncioCarro_Marca_idMarca` INT NOT NULL,
  `AnuncioCarro_Modelo_idModelo` INT NOT NULL,
  `AnuncioCarro_Combustivel_idCombustivel` INT NOT NULL,
  `AnuncioCarro_UsuarioConcessionaria_idConcessionaria` INT NOT NULL,
  `AnuncioCarro_UsuarioConcessionaria_Endereço_idEndereço` INT NOT NULL,
  `UsuarioComum_idCliente` INT NOT NULL,
  `UsuarioComum_filtroAlerta_idfiltroAlerta` INT NOT NULL,
  PRIMARY KEY (`AnuncioCarro_idProduto`, `AnuncioCarro_Cor_idCor`, `AnuncioCarro_Cambio_idCambio`, `AnuncioCarro_Aro_idAro`, `AnuncioCarro_Categoria_idCategoria`, `AnuncioCarro_Marca_idMarca`, `AnuncioCarro_Modelo_idModelo`, `AnuncioCarro_Combustivel_idCombustivel`, `AnuncioCarro_UsuarioConcessionaria_idConcessionaria`, `AnuncioCarro_UsuarioConcessionaria_Endereço_idEndereço`, `UsuarioComum_idCliente`, `UsuarioComum_filtroAlerta_idfiltroAlerta`),
  INDEX `fk_AnuncioCarro_has_UsuarioComum_UsuarioComum1_idx` (`UsuarioComum_idCliente` ASC, `UsuarioComum_filtroAlerta_idfiltroAlerta` ASC) VISIBLE,
  INDEX `fk_AnuncioCarro_has_UsuarioComum_AnuncioCarro1_idx` (`AnuncioCarro_idProduto` ASC, `AnuncioCarro_Cor_idCor` ASC, `AnuncioCarro_Cambio_idCambio` ASC, `AnuncioCarro_Aro_idAro` ASC, `AnuncioCarro_Categoria_idCategoria` ASC, `AnuncioCarro_Marca_idMarca` ASC, `AnuncioCarro_Modelo_idModelo` ASC, `AnuncioCarro_Combustivel_idCombustivel` ASC, `AnuncioCarro_UsuarioConcessionaria_idConcessionaria` ASC, `AnuncioCarro_UsuarioConcessionaria_Endereço_idEndereço` ASC) VISIBLE,
  CONSTRAINT `fk_AnuncioCarro_has_UsuarioComum_AnuncioCarro1`
    FOREIGN KEY (`AnuncioCarro_idProduto` , `AnuncioCarro_Cor_idCor` , `AnuncioCarro_Cambio_idCambio` , `AnuncioCarro_Aro_idAro` , `AnuncioCarro_Categoria_idCategoria` , `AnuncioCarro_Marca_idMarca` , `AnuncioCarro_Modelo_idModelo` , `AnuncioCarro_Combustivel_idCombustivel` , `AnuncioCarro_UsuarioConcessionaria_idConcessionaria` , `AnuncioCarro_UsuarioConcessionaria_Endereço_idEndereço`)
    REFERENCES `Web-Cars`.`AnuncioCarro` (`idProduto` , `Cor_idCor` , `Cambio_idCambio` , `Aro_idAro` , `Categoria_idCategoria` , `Marca_idMarca` , `Modelo_idModelo` , `Combustivel_idCombustivel` , `UsuarioConcessionaria_idConcessionaria` , `UsuarioConcessionaria_Endereço_idEndereço`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_AnuncioCarro_has_UsuarioComum_UsuarioComum1`
    FOREIGN KEY (`UsuarioComum_idCliente` , `UsuarioComum_filtroAlerta_idfiltroAlerta`)
    REFERENCES `Web-Cars`.`UsuarioComum` (`idCliente` , `filtroAlerta_idfiltroAlerta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
