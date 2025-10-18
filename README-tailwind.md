He creado componentes estilo Data Scientist usando Tailwind y agregué configuraciones básicas.

Pasos recomendados para ejecutar el proyecto (Windows PowerShell):

1) Instalar dependencias (si no están instaladas):

npm install

2) Si necesitas instalar o actualizar Tailwind/PostCSS manualmente (opcional):

npm install -D tailwindcss postcss autoprefixer @tailwindcss/vite

3) Iniciar el servidor de desarrollo:

npm run dev

Notas:
- Agregué `tailwind.config.js` y `postcss.config.cjs`.
- Ajusté `src/index.css` para importar `tailwindcss/preflight` y `tailwindcss/utilities` (alineado con Tailwind v4).
- Si usas una versión diferente de Tailwind, adapta las directivas CSS según la documentación de la versión.
