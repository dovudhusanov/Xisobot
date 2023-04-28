import React from 'react'
import "./home.css"
import logo from "../../assets/Xisobot_logo-removebg-preview (1).png"
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="wrapper">
            <header>
                <nav>
                    <a href="/"><img src={logo} alt=""/></a>
                    <Link to="/login">Tizimga kirish <i className="fa-solid fa-right-to-bracket"></i></Link>
                </nav>
            </header>
            <div className="main-body">
                <h3>O`zbekiston bo`ylab barcha ta`lim markazlarini avtomatlashtirish dasturi. Xisobot.uz orqalik siz
                    nimalar qila olasiz? Dasturimiz orqalik
                    o'quvchilarni kelib ketishlari, ular haqida ma'lumot hamda ustozlarda qancha o'quvchilar borlig,
                    barcha fanlar alohida kategoriyalarda joylashganligi,
                    pul mablag`larini kuzatib borish va turli xil qulay imkoniyatlar, barchasi bizda ta'minlangan!
                </h3>
                <div className="garant">
                    <div>
                        <i className="fa-solid fa-computer"></i>
                        <h4>Dasturni o'rnatib, <br/> o'rgatish mutlaqo bepul!</h4>
                    </div>
                    <div>
                        <i className="fa-solid fa-file-circle-check"></i>
                        <h4>Litsenziya amal qilish <br/> muddatigacha qo'llab quvvatlash!</h4>
                    </div>
                    <div>
                        <i className="fa-regular fa-thumbs-up"></i>
                        <h4>Barcha xizmat va <br/> huquqlar kafolatlangan!</h4>
                    </div>
                </div>
                <div className="footer">
                    <h4>InnaSite - kompaniyasi tomonidan ishlab chiqilgan!</h4>
                    <a href="tel: +998942774846">+998 94 277 48 46</a>
                </div>
            </div>
        </div>
    )
}

export default Home