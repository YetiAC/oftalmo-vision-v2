# Oftalmo Visión 2.0

Sitio estático en Astro 7 para https://oftalmo.vision. 41 páginas, sin WordPress, sin plugins.

## Comandos

```bash
npm install
npm run build      # genera dist/
npm run preview    # sirve dist/ en http://localhost:4321
```

## Resultado de PageSpeed (Lighthouse móvil, local)

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO |
|---|---|---|---|---|
| Home | 99 | 100 | 100 | 100 |
| Blefaroplastia | 100 | 100 | 100 | 100 |
| Retinopatía diabética | 100 | 100 | 100 | 100 |
| Empresas | 100 | 100 | 100 | 100 |
| Artículo de blog | 100 | 100 | 100 | 100 |
| /en/ | 99 | 100 | 100 | 100 |

Hay que volver a medir en producción con PageSpeed Insights: el servidor y la red real cambian los números.

## Publicar en Hostinger

1. Respaldar el WordPress actual (archivos y base de datos) desde hPanel.
2. `npm run build`.
3. Subir **el contenido** de `dist/` a `public_html/` (incluye `.htaccess`, `robots.txt` y `api/lead.php`).
4. Purgar la caché de LiteSpeed/CDN en hPanel.
5. Search Console: enviar `https://oftalmo.vision/sitemap-index.xml` e inspeccionar la home, la landing de blefaroplastia y los perfiles.
6. Durante 8 semanas, revisar errores 404 en Search Console.

### Subdominio de la Dra. Citlali

En el hosting de `dracitlalicarrasco-blefaroplastia.oftalmo.vision`, reemplazar el WordPress por un `.htaccess` con:

```apache
RewriteEngine On
RewriteRule ^about/?$ https://oftalmo.vision/profesionales-de-la-salud/dra-citlali-carrasco-gonzalez/ [L,R=301]
RewriteRule ^contact/?$ https://oftalmo.vision/contactanos/ [L,R=301]
RewriteRule ^author/.*$ https://oftalmo.vision/profesionales-de-la-salud/dra-citlali-carrasco-gonzalez/ [L,R=301]
RewriteRule ^.*$ https://oftalmo.vision/padecimiento/cirugia-cosmetica-de-parpados/ [L,R=301]
```

## Medición (GA4 `G-STE0V90Y2X`)

GA4 se carga con la primera interacción del visitante (o a los 12 s) para no afectar PageSpeed. Eventos que manda el sitio:

| Evento | Cuándo | Parámetros |
|---|---|---|
| `click_whatsapp` | Clic en cualquier botón de WhatsApp | `frente`, `ubicacion`, `pagina` |
| `form_submit` | Formulario enviado (después abre WhatsApp) | `formulario`, `frente`, `pagina` |
| `click_call` | Clic en teléfono | `frente`, `ubicacion` |
| `click_setmore` | Clic para agendar en Setmore | `frente`, `ubicacion` |
| `video_play` | Reproducción de un video | `video`, `frente` |

Configuración en GA4 (una sola vez):
1. Administrar → Eventos: marcar `click_whatsapp`, `form_submit`, `click_call` y `click_setmore` como **eventos clave**.
2. Administrar → Definiciones personalizadas: crear dimensiones de evento `frente`, `ubicacion`, `formulario` y `pagina`.
3. Dar acceso de lector a dgarcia@yetiagenciacreativa.com para el reporte mensual.

Cada mensaje de WhatsApp llega con una etiqueta de origen, por ejemplo `[Web · Blefaroplastia · Hero]`. Si la recepción etiqueta esos chats en WhatsApp Business, podremos saber cuántos terminan en cita.

Valores de `frente`: `home`, `clinica`, `parpados`, `retina`, `optica`, `empresas`, `turismo`, `urgencias`, `blog`, `contacto`.

## Dónde cambiar datos

- Teléfonos, WhatsApp, horario, Setmore, reseñas: `src/data/site.ts`
- Padecimientos: `src/data/padecimientos.ts`
- Blog: `src/content/blog/*.md`
- Fotos: `src/assets/fotos/` (se optimizan solas al compilar)

## Pendiente de confirmar con la clínica

- **WhatsApp:** configurado al **664 357 9604** (aparece así en los anuncios de la Dra. Citlali). Confirmar.
- **Horario:** el sitio dice L–V 9–19 h y sáb 9–14 h; Setmore marcaba cierre a las 17 h.
- **Correo** que recibe los formularios (`public/api/lead.php`): hoy `info@oftalmo.vision`.
- **Permiso COFEPRIS 223301202A0622:** vigencia, y si cubre el uso de los antes y después en la web.
- **Sucursal de Playas de Tijuana:** hoy redirige a Zona Río.
- **Revisión médica** de los textos de padecimientos, en especial las 5 páginas nuevas (ptosis, vía lagrimal, inyecciones, vitrectomía, degeneración macular).
- **Fotos de antes y después en alta resolución** (las actuales vienen de Facebook, a 526–1080 px).
- **Video nuevo** de la Dra. Citlali: cambiar el ID `u0QWOZ2Tj94` cuando esté listo.
