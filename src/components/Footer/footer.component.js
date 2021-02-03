import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-grid">
        <section>
          <h4>KURUMSAL</h4>
          <p>Hakkımızda</p>
          <p>Müşteri Hizmetleri</p>
          <p>Sipariş Aşamaları</p>
          <p>Sıkça Sorulan Sorular</p>
          <p>İnsan Kaynakları</p>
          <p>Gizlilik Politikamız</p>
        </section>

        <section>
          <br />
          <p>İletişim</p>
          <p>Vatan Card</p>
          <p>Servis Takip Formu</p>
          <p>Mağazalar</p>
          <p>İşlem Rehberi</p>
        </section>

        <section>
          <h4>KATEGORİLER</h4>
          <p>Bilgisayar</p>
          <p>Cep Telefonu</p>
          <p>Tablet PC</p>
          <p>Akıllı Saat</p>
          <p>Vestel TV</p>
          <p>Oyun Bilgisayarı</p>
        </section>

        <section>
          <br />
          <p>Küçük Ev Aletleri</p>
          <p>Kişisel Bakım Ürünleri</p>
          <p>Elektrikli Süpürge</p>
          <p>Ütü</p>
          <p>Masaüstü Bilgisayar</p>
          <p>Sabit Diskler</p>
        </section>

        <section>
          <h4>Özel Ürünler</h4>
          <p>iPhone 7</p>
          <p>iPhone 6S</p>
          <p>iPhone 5S</p>
          <p>iPhone SE</p>
          <p>General Mobile 5 Plus</p>
          <p>Galaxy S7</p>
          <p>Note 5</p>
          <p>Galaxy S6</p>
        </section>
      </div>
      <hr style={{ opacity: "0.7" }} />
      <div className="partners">
        <p
          style={{
            float: "left",
            color: "gray",
            fontSize: "0.75rem",
            textAlign: "left",
          }}
        >
          <strong>Türkiye'nin Teknoloji Hiperstoru</strong>
          <br />
          Copyright 2016 Vatan Bilgisayar San. ve Tic. A.Ş.
        </p>
        <div className="norton"></div>
        <div className="amex"></div>
        <div className="visa"></div>
        <div className="master"></div>
        <div className="bkm"></div>
      </div>
    </div>
  );
};

export default Footer;
