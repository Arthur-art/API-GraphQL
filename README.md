# Estudos sobre o GraphQL:
- Link dos cursos:
- 1 https://www.youtube.com/watch?v=7RoHxSGVAdU&list=PLPXWI3llyMiK9uw7tfljM2hnQl2qu6CeT
- 2 https://www.youtube.com/watch?v=oD8GqurXZ-0
- 3 https://www.youtube.com/watch?v=smWR_SxdeUU
- 4 https://www.youtube.com/watch?v=mNiAwtKbcrk&list=PL85ITvJ7FLohz54DLfinJeHi7DrHGT2_U&index=30

# Qual o problema que o GraphQL resolve ?

```json
[
    {"name": "Arthur", "email": "arthurteixeira.guts@gmail.com", "social": {"instagram": "@arthurteixeira.ss" }},
    {"name": "Ness", "email": "ness.guts@gmail.com", "social": {"instagram": "@ness.ss" }},
    {"name": "Johnny", "email": "johnny.guts@gmail.com", "social": {"instagram": "@johnny.ss" }},
    {"name": "Daniel", "email": "daniel.guts@gmail.com", "social": {"instagram": "@daniel.ss" }},
    {"name": "Sono", "email": "sono.guts@gmail.com", "social": {"instagram": "@sono.ss" }},
]
```

```json
{"name": "Arthur"},
{"name": "Ness"},
{"name": "Johnny"},
{"name": "Daniel"},
{"name": "Sono"}
```
- Como demonstrado acima o GraphQL através de querys requisita apenas o necessário para o backend, nesse exemplo precisamos apenas dos nomes dos usuários, oque seria desnecessário trazer todo o arquivo json que iria impactar no uso de mais bytes e no gasto maior de serviços como AWS;

- AWS -> Pay per use: paga por uso.
- Tráfego: quantidade de dados (bytes) trafegados na rede.

- Overfetching: Trafega mas dados do que o cliente precisa.
