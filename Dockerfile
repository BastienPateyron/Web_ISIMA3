FROM nginx

COPY portfolio /usr/share/nginx/html

EXPOSE 80
# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost/ || exit 1