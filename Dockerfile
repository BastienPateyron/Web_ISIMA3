FROM nginx

COPY portfolio /usr/share/nginx/html

# Healthcheck
HEALTHCHECK --interval=5m --timeout=3s \
  CMD curl -f http://localhost/ || exit 1