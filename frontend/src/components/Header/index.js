'use client'
import React from "react";
import Image from "next/image";
import style from "./Header.module.css"
import Link from "next/link"

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <Image src="/images/logo.png" alt="Logo" width={50}
                    height={50}
                    loading="eager" />
            </div>

            <div className={style.menuIcon}> <i className="bi bi-list"></i> </div>

            <div id="menuLateral" className={style.menuLateral}>
                <a href="#">Criar Filtro</a>
                <a href="#">Perfil</a>
                <a href="#">Ajuda</a>
                <a href="#">Sair</a>
            </div>
            <div className={style.localRegiao}>
                <i className="bi bi-geo-fill"></i>
            </div>
            <div className={style.barraPesquisa}>
                <input type="text" placeholder="BUSCAR CARROS, MARCAS ETC..."></input>
                <button className={style.lupa}>
                    <i className="bi bi-search"></i>
                </button>
            </div>

            <div className={style.entrarLogar}>
                <a href="#">criar sua conta</a>
                <a href="#">login</a>
            </div>

            <div className={style.carrinho}>
                <Image src="/images/iconeCarrinho.png" alt="" width={50} height={50} loading="eager" />
            </div>

            <div className={style.perfil}>
                <i className="bi bi-person-circle"></i>
            </div>
        </header>
    )
}