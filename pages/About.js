import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Kok Pizza? adalah pizza yang bikin orang berhenti sebentar sebelum gigit pertama. Bukan karena ragu, tapi karena penasaran. Dari namanya saja sudah terdengar pertanyaan, dan dari rasanya, jawabannya langsung ketemu.
Kami percaya pizza tidak harus ribet untuk jadi enak. Adonan dipanggang sampai pas—tidak keras, tidak lembek—sausnya berani, kejunya serius, dan topping-nya tidak sekadar numpang lewat. Setiap potong dibuat untuk memancing reaksi sederhana: “Kok bisa enak gini?”
Kok Pizza? lahir dari keinginan untuk menyajikan pizza yang jujur. Tidak sok mewah, tidak banyak gaya, tapi tahu betul apa yang dia lakukan. Pizza ini cocok dimakan saat lapar, saat bosan, saat mikir berat, atau bahkan saat tidak tahu mau makan apa.
Karena pada akhirnya, kalau sudah bingung mau makan apa, jawabannya sering cuma satu:
“Kok Pizza?”
        </p>
      </div>
    </div>
  );
}

export default About;
