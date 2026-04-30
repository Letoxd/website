# Minecraft Nightmare - Vercel Kurulumu

Bu proje statik bir web sitesi oldugu icin Vercel uzerinde sifir backend ile kolayca yayinlanir.

## 1) Projeyi GitHub'a gonder

1. Bu klasoru bir Git reposu olarak baslat.
2. GitHub'da yeni bir repo olustur.
3. Dosyalari push et.

## 2) Vercel'e import et

1. [Vercel Dashboard](https://vercel.com/dashboard) -> **Add New...** -> **Project**
2. GitHub reponu sec.
3. Framework Preset'i **Other** olarak birak.
4. Build/Output ayari girmene gerek yok (statik).
5. **Deploy** tusuna bas.

## 3) Domain bagla

1. Vercel projesine gir -> **Settings** -> **Domains**
2. Satin aldigin domain'i ekle (ornek: `siteadi.com`)
3. Vercel'in verdigi DNS kayitlarini domain saglayicinda tanimla:
   - Apex/root (`@`) icin genelde `A` kaydi: `76.76.21.21`
   - `www` icin genelde `CNAME`: `cname.vercel-dns.com`
4. DNS yayilimi sonrasinda Vercel uzerinde domain durumu **Valid Configuration** olur.

## 4) SSL kontrolu

Vercel SSL sertifikasini otomatik verir. Domain aktif olduktan sonra:

- `https://siteadi.com`
- `https://www.siteadi.com`

adreslerinin acildigini kontrol et.

## Notlar

- `vercel.json` dosyasi temiz URL, guvenlik header'lari ve tum route'larin `index.html`'e dusmesi icin eklendi.
- Projede buyuk dosya (`Minecraft_Nightmare_1.0.0`) indirilebilir asset olarak deploy edilir.
