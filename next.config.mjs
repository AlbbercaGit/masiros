const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  trailingSlash: true,
  assetPrefix: isProd ? '/masiros/' : '', // Cambia a '/masiros/' para producción
  basePath: isProd ? '/masiros' : '', // Cambia a '/masiros' para producción
  // output: 'export', // Para exportar la aplicación como archivos estáticos
  images: {
    domains: ['raw.githubusercontent.com'], // Permite cargar imágenes de este dominio
  },
};

export default nextConfig;
