FROM nginx

COPY portfolio /usr/share/nginx/html

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl localhost || exit 1