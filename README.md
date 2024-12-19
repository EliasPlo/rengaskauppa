# Mustapään Auto Oy - Renkaiden Haku

Tämä projekti sisältää verkkosivuston, joka auttaa käyttäjiä löytämään sopivat kesä- ja talvirenkaat valitun koon perusteella. Sivusto toimii paikallisessa ympäristössä ja noudattaa annettuja graafisia ohjeistuksia.

## Asennus ja käynnistys

### Vaaditut ohjelmistot:

- **Node.js**: Varmista, että Node.js on asennettu koneellesi. Voit ladata sen [täältä](https://nodejs.org/).

### Kansiorakenne:

Projektin tulisi näyttää seuraavalta:

```
project/
├── data/
│   └── renkaat.json
├── public/
│   └── index.html
├── server.js
```

### Asennusohjeet:

1. Lataa tai kloonaa projektin tiedostot paikalliselle koneellesi.
2. Siirry projektihakemistoon:
   ```bash
   cd project
   ```
3. Alusta Node.js-projekti ja asenna tarvittavat riippuvuudet:
   ```bash
   npm init -y
   npm install express
   ```
4. Varmista, että seuraavat tiedostot ovat projektihakemistossa:
   - `server.js`
   - `data/renkaat.json`
   - `public/index.html`

### Palvelimen käynnistäminen:

Käynnistä paikallinen palvelin seuraavalla komennolla:

```bash
node server.js
```

Palvelin käynnistyy osoitteessa [http://localhost:3000](http://localhost:3000).

## Sivuston käyttöohjeet

1. **Sivuston avaaminen**:
   Avaa selaimessa osoite [http://localhost:3000](http://localhost:3000).

2. **Renkaiden hakeminen**:

   - Valitse pudotusvalikosta haluamasi renkaiden koko.
   - Klikkaa "Hae"-painiketta.
   - Näet hakutulokset, jotka sisältävät seuraavat tiedot:
     - Rengasmerkki
     - Malli
     - Hinta
     - Tyyppi (esim. nastarengas)
     - Saatavuus varastossa

3. **Muut ominaisuudet**:

   - Näet yrityksen perustiedot, toimipisteen karttakuvan sekä sesonkimainokset.
   - Voit katsoa upotetun videon renkaiden vaihtamisesta suoraan sivustolta.

## Ongelmatilanteet

- **Sivusto ei aukea:**

  - Varmista, että Node.js on asennettu oikein.
  - Tarkista, että palvelin on käynnissä komennolla `node server.js`.
  - Varmista, että tiedostojen kansiorakenne vastaa yllä kuvattua.

- **JSON-data ei lataudu:**

  - Tarkista, että `data/renkaat.json`-tiedosto on oikeassa paikassa.
  - Varmista, että selaimen konsolissa ei ole virheilmoituksia liittyen tiedostopolkuun.


---

