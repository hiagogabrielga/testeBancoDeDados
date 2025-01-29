'use client'
import React from "react";
import Image from "next/image";
import style from "./Footer.module.css"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                <div className={style.logo}>

                </div>
                <div className={style.footerLinks}>
                    <div className={style.column}>
                        <h3><span>Institucional</span></h3>
                        <ul>
                            <li><a href="#">Acessibilidade</a></li>
                            <li><a href="#">Gerenciamento de cookies</a></li>
                            <li><a href="#">Termos e condições</a></li>
                        </ul>
                    </div>
                    <div className={style.column}>
                        <h3>Comprar</h3>
                        <ul>
                            <li><a href="*">Veículos novos</a></li>
                            <li><a href="*">Veículos semi-novos</a></li>
                            <li><a href="*">Veículos usados</a></li>
                        </ul>
                    </div>
                    <div className={style.column}>
                        <h3>Novidades</h3>
                        <ul>
                            <li><a href="*">Os mais populares</a></li>
                            <li><a href="*">Promoções</a></li>
                        </ul>
                    </div>
                    <div className={style.column}>
                        <h3>Ajuda</h3>
                        <ul>
                            <li><a href="*">Criar conta</a></li>
                            <li><a href="*">Logar conta</a></li>
                            <li><a href="*">Meu perfil</a></li>
                            <li><a href="*">Suporte</a></li>
                            <li><a href="*">Vender veículo</a></li>
                            <li><a href="#">Contato: +55 (69) 012345678</a></li>
                        </ul>
                    </div>
                    <div className={style.column}>
                        <h3></h3>
                        <ul>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={style.footerBottom}>
                <p>© 2024–2025 Webcars do Brasil Ltda. Todos os direitos do site reservado</p>
            </div>
        </footer>
    )
}