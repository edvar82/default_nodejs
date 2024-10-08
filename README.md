## Como Executar

Para executar o projeto localmente, siga estas etapas:

1. Certifique-se de ter o Node.js e o npm instalados em sua máquina.
2. Clone este repositório.

```
git clone https://github.com/edvar82/default_nodejs.git
```

3. Navegue até o diretório do projeto.

```
cd default_nodejs
```

4. Instale as dependências.

```
npm install
```

5. Copie o arquivo `.env.example` para `.env` e configure suas variáveis de ambiente conforme necessário:
    
    `cp .env.example .env` 
    
    Em sistemas Windows, você pode usar:
    
    `copy .env.example .env` 

6. Configure as variáveis de ambiente editando o arquivo .env.example para .env.

7. Execute a imagem do banco com docker.

```
docker compose up -d
```

8. Execute o comando prisma para criar as tabelas do banco.

```
npx prisma db push
```

9. Execute o comando prisma para gerar os seeds.

```
npx prisma db seed
```

10. Execute o projeto.

```
npm start
```
