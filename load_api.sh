curl http://0.0.0.0:8000/openapi.json -o openapi.json
cp openapi.json ./frontend/colorkwest-front/src/services/api/openapi.json
cd frontend/colorkwest-front
yarn run build-api