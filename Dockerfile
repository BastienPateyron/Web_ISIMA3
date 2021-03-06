FROM nginx

COPY portfolio /usr/share/nginx/html

HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl localhost || exit 1